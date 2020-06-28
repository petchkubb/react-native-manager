import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {};

  render() {
    return (
      <SafeAreaView>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Password"
              secureTextEntry={true}
              placeholder="Password"
            />
          </CardSection>
          <CardSection>
            <Button title="Login" />
          </CardSection>
        </Card>
      </SafeAreaView>
    );
  }
}

export default connect(null, {emailChanged})(LoginForm);
