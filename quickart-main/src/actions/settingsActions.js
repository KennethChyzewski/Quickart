import { PROFILE_SETTINGS_RETRIEVED, PROFILE_SETTINGS_NOT_RETRIEVED, EMPTY_PROFILE_CREATE_SUCCESS, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAILED, DELETED_PROFILE_SUCCESS, DELETED_PROFILE_FAILURE } from '../constants';

export function getProfile(userID, jwbToken) {
  return dispatch => {
      return fetch(`http://localhost:5000/profile/user/${userID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwbToken
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: PROFILE_SETTINGS_RETRIEVED,
        msg: 'settingsActions GET happened',
        data
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      dispatch({
          type: PROFILE_SETTINGS_NOT_RETRIEVED,
          msg: 'loginActions LOGIN happened'
      });
    });
  };
}


export function getEditProfile(jwbToken) {
  return dispatch => {
    // connection to Mongo DB and try to get the user's settings
    // if we were able to successfully connect and change the user's settings
    // return fetch(`http://localhost:5000/profile/me?user=${credentials.id}`, {
      return fetch(`http://localhost:5000/profile/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwbToken
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: PROFILE_SETTINGS_RETRIEVED,
        msg: 'settingsActions GET happened',
        data
      });
    })
    .catch((error) => {
      console.error('Error:', error);
      dispatch({
        type: PROFILE_SETTINGS_NOT_RETRIEVED,
        msg: 'settingsActions UPDATE happened'
      })
    });
  };
}


export function makeEmptyProfile(userDetails) {
  return dispatch => {
    return fetch(`http://localhost:5000/profile/me`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userDetails.name, 
        email: userDetails.email,
        location: userDetails.location
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: EMPTY_PROFILE_CREATE_SUCCESS, 
        msg: 'settingsActions CREATE EMPTY PROFILE happened',
        emptyProfile: data
      })
    })
  };
}

export function updateProfile(profileDetails, jwbToken) {
  return dispatch => {
    return fetch(`http://localhost:5000/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwbToken
      },
      body: JSON.stringify({ 
        tags: profileDetails.tags,
        user: profileDetails.user,
        name: profileDetails.name,
        location: profileDetails.location,
        biography: profileDetails.biography,
        niche: profileDetails.niche,
        postings: profileDetails.postings
       })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        msg: 'settingsActions UPDATE happened',
        data
      })
    })
    .catch((error) => {
      console.error('Error:', error);
      dispatch({
        type: PROFILE_UPDATE_FAILED,
        msg: 'settingsActions UPDATE happened'
      })
    });
  };
}

export function deleteUser(jwbToken){
  return dispatch => {
    return fetch(`http://localhost:5000/profile`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwbToken
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: DELETED_PROFILE_SUCCESS, 
        msg: 'deletedProfileAction happened'
      })
    })
    .catch((error) => {
      console.error('Error:', error);
      dispatch({
        type: DELETED_PROFILE_FAILURE,
        msg: 'settingsActions UPDATE happened'
      })
    });
  };
}
