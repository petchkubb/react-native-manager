import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions/EmployeeActions';
import {Card, CardSection, Input, Button, Spinner} from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={(value) =>
              this.props.employeeUpdate({props: 'name', value})
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-5555-55"
            value={this.props.phone}
            onChangeText={(value) =>
              this.props.employeeUpdate({props: 'phone', value})
            }
          />
        </CardSection>
        <CardSection>
          {/* <Input label="Name" placeholder="Jane" /> */}
        </CardSection>
        <CardSection>
          <Button title="Create" />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCreate);
