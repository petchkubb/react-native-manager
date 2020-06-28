import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  render() {
    return (
      <SafeAreaView>
        <Card>
          <CardSection>
            <Input label="Email" placeholder="email@gmail.com" />
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

export default LoginForm;
