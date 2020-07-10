import React, {Component} from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import {employeeFetch} from '../actions/EmployeeActions';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeeFetch();
  }

  onRowPress = (employee) => () => {
    Actions.employeeDetail({employee});
  };

  renderItem = ({item, index}) => {
    const {name} = item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress(item)}>
        <View>
          <CardSection>
            <Text>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderItem}
          keyExactor={(item) => item.uid}
        />
      </View>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    employees: _.map(state.employees, (val, uid) => {
      return {...val, uid};
    }),
  };
};

const mapDispatchToProps = {
  employeeFetch,
};
export default connect(mapStatetoProps, mapDispatchToProps)(EmployeeList);
