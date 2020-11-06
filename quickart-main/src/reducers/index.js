import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import loginReducer from "./loginReducer";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
	alertsState: alertReducer,
  	loginState: loginReducer,
  	settingsState: settingsReducer
});

export default rootReducer;