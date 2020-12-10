import { PROFILE_SETTINGS_RETRIEVED, EMPTY_PROFILE_CREATE_SUCCESS, PROFILE_UPDATE_SUCCESS, PROFILE_UPDATE_FAILED, DELETED_PROFILE_SUCCESS, DELETED_PROFILE_FAILURE, REPORT_USER_SUCCESS, REPORT_USER_FAILED } from '../constants';

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

  //Destructure 'action'
  const { type, payload } = action; 

  switch (type) {
    case PROFILE_SETTINGS_RETRIEVED:
      console.log("profile settings retrieved");
      //return { ...state, payload };
      return action.data;
    
    case EMPTY_PROFILE_CREATE_SUCCESS:
      console.log("empty profile created success");
      return { ...state, payload };

    case PROFILE_UPDATE_SUCCESS:
      console.log("profile update success");
      return action.data;

    case PROFILE_UPDATE_FAILED:
      console.log("profile update failed");
      return { ...state, payload };

    case REPORT_USER_SUCCESS:
      console.log("reported user success");
      return { ...state, payload };

    case REPORT_USER_FAILED:
      console.log("report user failed");
      return { ...state, payload };

    case DELETED_PROFILE_SUCCESS:
      console.log("delete user sucess");
      localStorage.removeItem('token');
      return {} 

    case DELETED_PROFILE_FAILURE:
      console.log("delete user failed");
      return action.data

    default:
      return state;
  }
};

export default settingsReducer;
