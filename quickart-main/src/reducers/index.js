import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import loginReducer from "./loginReducer";
import settingsReducer from "./settingsReducer";
import postsReducer from "./postsReducer";
import reportsReducer from "./reportsReducer";

const rootReducer = combineReducers({
	alertsState: alertReducer,
  	loginState: loginReducer,
	settingsState: settingsReducer,
	postsState: postsReducer,
	reportsState: reportsReducer  
});

export default rootReducer;