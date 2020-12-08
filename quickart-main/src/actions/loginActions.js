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
  return dispatch => {
    // We need to check if the user logging in is a user or an admin
    // var accType = (credentials.email === ADMIN_ACCOUNT) ? "admin" : "user"
    // connection to Mongo DB and try to login the user
    // if we were able to successfully connect and login the user
    
    return fetch('http://localhost:5000/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      var accType = (credentials.email === ADMIN_ACCOUNT) ? "admin" : "user"
      dispatch({
        type: VALID_LOGIN,
        msg: 'loginActions LOGIN happened',
        accType: accType,
        data
      });
    })
    // if any of the catches trigger, meaning connection or update failed
    .catch((error) => {
      console.error('Error:', error);
      dispatch({
          type: INVALID_LOGIN,
          msg: 'loginActions LOGIN happened'
      });
    });
  };
}

export function logout() {
    return dispatch => {
      // connection to Mongo DB and try to logout the user
      // if we were able to successfully connect and logout the user
      dispatch({
        type: SIGN_OUT,
        msg: 'loginActions LOGOUT happened'
      })
    };
}

// export function signup(credentials) {
//     return (dispatch, getState) => {
//       // connection to Mongo DB and try to create a user
//       // if we were able to successfully connect and create the user
//       console.log("loginActions Sign Up");
    
//     // let passing = JSON.stringify({
//     //                 name : credentials.name ,
//     //                 email : credentials.email, 
//     //                 avatar: credentials.avatar,
//     //                 password: credentials.password,
//     //                 date: null
//     //               })

//     let passing = JSON.stringify({
//       name: credentials.name,
//       email: credentials.email, 
//       password: credentials.password
//     })
    
//     console.log(passing)
//     fetch('http://localhost:5000/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: passing
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Sucess:', data);
//       dispatch({
//         type: VALID_SIGNUP,
//         msg: 'loginActions LOGIN happened',
//         credentials,
//         data

//         // payload: { 
//         //     msg: 'loginActions LOGIN happened',
//         //     creds: credentials,
//         //     D: data
//         // }
//       });
//     }).catch((error) => {
//       console.error('Error:', error);
//       dispatch({
//         type: INVALID_SIGNUP,
//         // payload: { msg: 'loginActions SIGNUP happened' }
//         msg: 'loginActions SIGNUP happened'
//       });
//     });
//   }
// }

export function signup(credentials) {
  return dispatch => {
    return fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email, 
        password: credentials.password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Sucess:', data);
      dispatch({
        type: VALID_SIGNUP,
        msg: 'loginActions LOGIN happened',
        credentials,
        data
      });
    }).catch((error) => {
      console.error('Error:', error);
      dispatch({
        type: INVALID_SIGNUP,
        msg: 'loginActions SIGNUP happened'
      });
    });
  }
}