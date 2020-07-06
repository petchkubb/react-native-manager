import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from '../actions/types';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import '@react-native-firebase/auth';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({props, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {props, value},
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({name, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.pop();
      });
  };
};
