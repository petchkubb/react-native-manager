import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {employeeUpdate, employeeSave} from '../actions/EmployeeActions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeEdit);
