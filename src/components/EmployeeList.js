import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions/EmployeeActions';
import {Card, CardSection, Input, Button, Spinner} from './common';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch();
  }
  render() {
    return (
      <View>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
        <Text>EmployeeList</Text>
      </View>
    );
  }
}

// const mapStatetoProps = (state) => {
//   return {
//     asd: '',
//   };
// };

const mapDispatchToProps = {
  employeeFetch,
};
export default connect(null, mapDispatchToProps)(EmployeeList);
