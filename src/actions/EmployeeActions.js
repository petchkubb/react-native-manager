import {EMPLOYEE_UPDATE} from '../actions/types';

export const employeeUpdate = ({props, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {props, value},
  };
};

export const employeeCreate = ({name, phone, shift: shift || 'Monday'}) => {
  console.log(name, phone, shift);
};
