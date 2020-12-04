import { PROFILE_SETTINGS_RETRIEVED, EMPTY_PROFILE_CREATE_SUCCESS, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAILED, REPORT_USER_SUCCESS, REPORT_USER_FAILED } from '../constants';

//Hardcoded Phase 1 data
import { userSettings } from '../allSettings';

export function getSettings(credentials) {
  return dispatch => {
    // connection to Mongo DB and try to get the user's settings
    // if we were able to successfully connect and change the user's settings
    return fetch(`http://localhost:5000/profile/me?user=${credentials.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
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
        id: userDetails.id,
        name: userDetails.email, 
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

export function updateProfile(profileDetails) {
  return dispatch => {
    // connection to Mongo DB and try to update the user's profile
    // if we were able to successfully connect and change the user's profile

    // let passing = JSON.stringify({
    //     tags: [],
    //     postings: [],
    //     user: null,
    //     name: profileDetails.name,
    //     location: profileDetails.userLocation,
    //     biography: "",
    //     niche: ""
    // })

    return fetch(`http://localhost:5000/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profileDetails })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        payload: { 
          msg: 'settingsActions UPDATE happened',
          userSettings: profileDetails
        }
      })
    }).catch((error) => {
      console.error('Error:', error);
      // if any of the catches trigger, meaning connection or update failed
      dispatch({
        type: PROFILE_UPDATE_FAILED,
        msg: 'settingsActions UPDATE happened'
      })
    });
  };
}

export function reportUser(userID) {
  return dispatch => {
    // connection to Mongo DB and try to add report info to the userID
    // if we were able to successfully connect and report the user's profile
    dispatch({
      type: REPORT_USER_SUCCESS,
      payload: { msg: 'settingsActions REPORT happened' }
    })
    // if any of the catches trigger, meaning connection or update failed
    // dispatch({
    //   type: REPORT_USER_FAILED,
    //   payload: { msg: 'settingsActions REPORT happened' }
    // })
  };
}