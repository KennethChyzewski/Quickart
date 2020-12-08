import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import loginReducer from "./loginReducer";
import settingsReducer from "./settingsReducer";
import postsReducer from "./postsReducer";
import reportsReducer from "./reportsReducer";
import messagesReducer from "./messagesReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
	alertsState: alertReducer,
  	loginState: loginReducer,
	settingsState: settingsReducer,
	postsState: postsReducer,
	reportsState: reportsReducer,
	messagesState: messagesReducer,
	usersState: usersReducer,
});

export default rootReducer;