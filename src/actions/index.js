import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChangeed = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text,
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => dispatch({type: LOGIN_USER_SUCCESS, payload: user}));
  };
};
