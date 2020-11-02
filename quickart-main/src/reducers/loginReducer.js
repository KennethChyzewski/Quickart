import { VALID_LOGIN, INVALID_LOGIN, VALID_SIGNUP, INVALID_SIGNUP, SIGN_OUT } from '../constants';

const initialState = {
  status: null
};

const loginReducer = (state = initialState, action) => {

  //Destructure 'action'
  const { type, payload } = action; 

  switch (type) {
    case VALID_LOGIN:
      console.log("Login Success");
      return { ...state, payload, status: "Login Success" };

    case INVALID_LOGIN:
      console.log("Login Failed");
      return { ...state, payload, status: "Login Failed" };

    case VALID_SIGNUP:
      console.log("Signup Success");
      return { ...state, payload, status: "Signup Success" };

    case INVALID_SIGNUP:
      console.log("Signup Failed");
      return { ...state, payload, status: "Signup failed" };

    case SIGN_OUT:
      console.log("Signed out");
      return { state, payload };

    default:
      return state;
  }
};

export default loginReducer;