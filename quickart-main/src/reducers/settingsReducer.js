import { PROFILE_SETTINGS_RETRIEVED,  PROFILE_SETTINGS_NOT_RETRIEVED, EMPTY_PROFILE_CREATE_SUCCESS, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAILED, DELETED_PROFILE_SUCCESS, DELETED_PROFILE_FAILURE, REPORT_USER_SUCCESS, REPORT_USER_FAILED } from '../constants';

const initialState = {
  user: null,
  name: "",
  location:"",
  biography:"",
  niche:"",
  tags: [],
  postings: []
};

const settingsReducer = (state = initialState, action) => {

  switch (action.type) {
    case PROFILE_SETTINGS_RETRIEVED:
      console.log("profile settings retrieved");
      return action.data;
      
    case PROFILE_SETTINGS_NOT_RETRIEVED:
      localStorage.removeItem('token');
      return {} //If we don't have their profile they arent legal 
    
    case EMPTY_PROFILE_CREATE_SUCCESS:
      console.log("empty profile created success");
      return { ...state };

    case PROFILE_UPDATE_SUCCESS:
      console.log("profile update success");
      return action.data;

    case PROFILE_UPDATE_FAILED:
      console.log("profile update failed");
      return { ...state };

    case DELETED_PROFILE_SUCCESS:
      console.log("delete user sucess");
      localStorage.removeItem('token');
      return {} 

    case DELETED_PROFILE_FAILURE:
      console.log("delete user failed");
      return { ...state };

    default:
      return state;
  }
};

export default settingsReducer;
