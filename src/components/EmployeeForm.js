import React, {Component} from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {CardSection, Input} from './common';
import {employeeUpdate} from '../actions/EmployeeActions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
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
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={(value) =>
              this.props.employeeUpdate({props: 'shift', value})
            }>
            <Picker.Item value="Monday" label="Monday" />
            <Picker.Item value="Tuesday" label="Tuesday" />
            <Picker.Item value="Wednesday" label="Wednesday" />
            <Picker.Item value="Thusday" label="Thusday" />
            <Picker.Item value="Friday" label="Friday" />
            <Picker.Item value="Saturday" label="Saturday" />
            <Picker.Item value="Sunday" label="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
