import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import loginReducer from "./loginReducer";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
	alertReducer: alertReducer,
  	loginReducer: loginReducer,
  	settingsReducer: settingsReducer
});

export default rootReducer;