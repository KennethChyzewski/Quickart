import { ADMIN_ACCOUNT, VALID_LOGIN, INVALID_LOGIN, VALID_SIGNUP, INVALID_SIGNUP, SIGN_OUT } from '../constants';

// export function login(credentials) {
//     return (dispatch, getState) => {
//       // We need to check if the user logging in is a user or an admin
//       var accType = (credentials.username === ADMIN_ACCOUNT) ? "admin" : "user"
//       // connection to Mongo DB and try to login the user
//       // if we were able to successfully connect and login the user
//       dispatch({
//         type: VALID_LOGIN,
//         payload: { 
//             msg: 'loginActions LOGIN happened',
//             accType: accType,
//             credentials
//         }
//       })
//       // if any of the catches trigger, meaning connection or update failed
//       // dispatch({
//       //   type: INVALID_LOGIN,
//       //   payload: { msg: 'loginActions LOGIN happened' }
//       // })
//     };
// }

export function login(credentials) {
  return (dispatch, getState) => {
    // We need to check if the user logging in is a user or an admin
    var accType = (credentials.username === ADMIN_ACCOUNT) ? "admin" : "user"
    // connection to Mongo DB and try to login the user
    // if we were able to successfully connect and login the user
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: VALID_LOGIN,
        payload: { 
            msg: 'loginActions LOGIN happened',
            accType: accType,
            credentials
        }
      });
    })
    // if any of the catches trigger, meaning connection or update failed
    .catch((error) => {
      console.error('Error:', error);
      dispatch({
          type: INVALID_LOGIN,
          payload: { msg: 'loginActions LOGIN happened' }
      });
    });
  };
}

export function logout() {
    return (dispatch, getState) => {
      // connection to Mongo DB and try to logout the user
      // if we were able to successfully connect and logout the user
      dispatch({
        type: SIGN_OUT,
        payload: { msg: 'loginActions LOGOUT happened' }
      })
    };
}

export function signup(credentials) {
    return (dispatch, getState) => {
      // connection to Mongo DB and try to create a user
      // if we were able to successfully connect and create the user
      dispatch({
        type: VALID_SIGNUP,
        payload: { 
            msg: 'loginActions LOGIN happened',
            credentials
        }
      })
      // if any of the catches trigger, meaning connection or update failed
      // dispatch({
      //   type: INVALID_SIGNUP,
      //   payload: { msg: 'loginActions SIGNUP happened' }
      // })
    };
}