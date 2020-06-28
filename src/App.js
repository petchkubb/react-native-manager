import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCJHkKLNlZuHI1DfXUJnZ-ej3ppfmWz9Ps',
      authDomain: 'react-native-manager-e3df8.firebaseapp.com',
      databaseURL: 'https://react-native-manager-e3df8.firebaseio.com',
      projectId: 'react-native-manager-e3df8',
      storageBucket: 'react-native-manager-e3df8.appspot.com',
      messagingSenderId: '26721823704',
      appId: '1:26721823704:web:d121d2e2ea08a9c6f960ad',
      measurementId: 'G-RN7M1Q6CJS',
    };
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
