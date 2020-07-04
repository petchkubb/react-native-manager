import React, {Component} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChangeed, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';

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

  renderError() {
    if (this.props.error) {
      return (
        <View style={styles.white}>
          <Text style={styles.errorTextType}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return <Button title="Login" onPress={this.onButtonPress} />;
  }

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
          {this.renderError()}
          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  errorTextType: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
  white: {
    backgroundColor: 'white',
  },
});

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;
  return {
    email,
    password,
    error,
    loading,
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChangeed,
  loginUser,
})(LoginForm);
