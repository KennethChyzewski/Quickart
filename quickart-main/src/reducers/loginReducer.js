import { VALID_LOGIN, INVALID_LOGIN, VALID_SIGNUP, INVALID_SIGNUP, SIGN_OUT } from '../constants';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

const loginReducer = (state = initialState, action) => {

  //Destructure 'action'
  const { type, payload } = action; 

  switch (type) {
    case VALID_LOGIN:
      console.log("Login Success");
      return { ...state, payload };

    case INVALID_LOGIN:
      // return { ...state, payload };
      return {} //Needs to be empty for NavBar update

    case VALID_SIGNUP:
      console.log("Signup Success");
      localStorage.setItem('token', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };

    case INVALID_SIGNUP:
      // return { ...state, payload };
      localStorage.removeItem('token');
      return { ...state, ...payload, token: null, isAuthenticated: false, loading: false };
      //return {} //Needs to be empty for NavBar update

    case SIGN_OUT:
      console.log("Signed out");
      // return { state, payload };
      return {} //Needs to be empty for NavBar update

    default:
      return state;
  }
};

export default loginReducer;