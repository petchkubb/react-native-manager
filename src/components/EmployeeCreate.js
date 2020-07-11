import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeCreate} from '../actions/EmployeeActions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress = () => {
    const {name, phone, shift} = this.props;

    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button title="Create" onPress={() => this.onButtonPress()} />
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
  employeeCreate,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);
