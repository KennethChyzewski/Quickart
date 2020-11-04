import { PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAILED, REPORT_USER_SUCCESS, REPORT_USER_FAILED } from '../constants';

export function updateProfile(profileDetails) {
  return (dispatch, getState) => {
    // connection to Mongo DB and try to update the user's profile
    // if we were able to successfully connect and change the user's profile
    dispatch({
      type: PROFILE_UPDATE_SUCCESS,
      payload: { msg: 'settingsActions UPDATE happened' }
    })
    // if any of the catches trigger, meaning connection or update failed
    // dispatch({
    //   type: PROFILE_UPDATE_FAILED,
    //   payload: { msg: 'settingsActions UPDATE happened' }
    // })
  };
}

export function reportUser(userID) {
  return (dispatch, getState) => {
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