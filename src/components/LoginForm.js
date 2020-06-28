import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChangeed, loginUser} from '../actions';
import {Card, CardSection, Input, Button} from './common';

class LoginForm extends Component {
  onEmailChange = (text) => {
    this.props.emailChanged(text);
  };

  onPasswordChange = (text) => {
    this.props.passwordChangeed(text);
  };

  onButtonPress = () => {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  };

  render() {
    return (
      <SafeAreaView>
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange}
              value={this.props.email}
            />
          </CardSection>
          <CardSection>
            <Input
              label="Password"
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={this.onPasswordChange}
              value={this.props.password}
            />
          </CardSection>
          <CardSection>
            <Button title="Login" onPress={this.onButtonPress} />
          </CardSection>
        </Card>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChangeed,
  loginUser,
})(LoginForm);
