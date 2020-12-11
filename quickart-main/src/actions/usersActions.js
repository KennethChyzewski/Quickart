import { GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAILED } from '../constants';

export function getAllUsers(jwbToken) {
  return dispatch => {
    return fetch(`http://localhost:5000/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwbToken
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        msg: 'getAllUsers GET happened',
        data
      })
    })
    .catch((error) => {
      console.error('Error:', error);
      dispatch({
          type: GET_ALL_USERS_FAILED,
          msg: 'loginActions LOGIN happened'
      });
    });
  };
}
