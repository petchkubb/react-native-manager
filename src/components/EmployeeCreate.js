import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeholder="Jane" />
        </CardSection>
        <CardSection>
          <Input label="Phone" placeholder="555-5555-55" />
        </CardSection>
        <CardSection>
          <Input label="Name" placeholder="Jane" />
        </CardSection>
        <CardSection>
          <Button title="Create" />
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
