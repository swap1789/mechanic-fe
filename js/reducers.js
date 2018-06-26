// @flow

import {combineReducers} from "redux";
import {SET_USER_TOKEN, USER_LOGGED_OUT, SAVE_JOB_DATA} from "./actions";

const InitialUserState = {
	userDetails: {
		token: "",
		name: "",
		id: "",
		isLoggedIn: false
	}
};

const InitialJobState = {
	jobData: {}
};
const user = (state = InitialUserState, action: Action) => {
	if (action.type === SET_USER_TOKEN) {
		return {
			...state,
			userDetails: {
				token: action.payload.token,
				name: action.payload.name,
				id: action.payload.id,
				isLoggedIn: true
			}
		}; // set the user name and JWT token in the store
	}
	if (action.type === USER_LOGGED_OUT) {
		return {
			...state,
			userDetails: {
				token: "",
				name: "",
				id: "",
				isLoggedIn: false
			}
		};
	}
	return state;
};

const jobDetails = (state = InitialJobState, action) => {
	if (action.type === SAVE_JOB_DATA) {
		return {
			...state,
			jobData: Object.assign({}, action.payload)
		};
	}
	return state;
};

const rootReducer = combineReducers({user, jobDetails});

export default rootReducer;
