import { VALID_LOGIN, INVALID_LOGIN, VALID_SIGNUP, INVALID_SIGNUP, SIGN_OUT } from '../constants';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  accType: "user"
};

const loginReducer = (state = initialState, action) => {

  //Destructure 'action'
  const { type, payload } = action; //dont use this...

  switch (type) {
    case VALID_LOGIN:
      console.log("Login Success");
      localStorage.setItem('token', action.data.token);
      return { ...state, accType: action.data.payload.user.accType, id: action.data.payload.user.id, isAuthenticated: true, loading: false};

    case INVALID_LOGIN:
      return {} //Needs to be empty for NavBar update

    case VALID_SIGNUP:
      console.log("Signup Success");
      localStorage.setItem('token', action.data.token);
      return { ...state, accType: action.data.payload.user.accType, id: action.data.payload.user.id, isAuthenticated: true, loading: false};

    case INVALID_SIGNUP:
      localStorage.removeItem('token');
      return { ...state, ...payload, token: null, isAuthenticated: false, loading: false};

    case SIGN_OUT:
      console.log("Signed out");
      localStorage.removeItem('token');
      return {} //Needs to be empty for NavBar update

    default:
      return state;
  }
};

export default loginReducer;