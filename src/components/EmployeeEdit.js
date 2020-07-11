import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {
  employeeUpdate,
  employeeSave,
  employeeDelete,
} from '../actions/EmployeeActions';
import {Card, CardSection, Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    _.forEach(this.props.employee, (value, props) => {
      this.props.employeeUpdate({props, value});
    });
  }

  onButtonPress = () => {
    const {name, phone, shift} = this.props;

    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  };

  onTextPress = () => {
    const {phone, shift} = this.props;
    Communications.text(phone, `Your phone upcoming shift is on ${shift}`);
  };

  onAccept = () => {
    const {uid} = this.props.employee;
    this.props.employeeDelete({uid});
  };

  onDecline = () => {
    this.setState({showModal: false});
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button title="Save Changes" onPress={() => this.onButtonPress()} />
        </CardSection>
        <CardSection>
          <Button title="Text Schedule" onPress={() => this.onTextPress()} />
        </CardSection>
        <CardSection>
          <Button
            title="Fire Employee"
            onPress={() => this.setState({showModal: !this.state.showModal})}
          />
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}>
          Are you sure you want to delete it?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {
    name,
    phone,
    shift,
  };
};

const mapDispatchToProps = {
  employeeUpdate,
  employeeSave,
  employeeDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
