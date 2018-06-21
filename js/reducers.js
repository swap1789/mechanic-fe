// @flow

import {combineReducers} from "redux";
import {SET_USER_TOKEN, USER_LOGGED_OUT} from "./actions";

const InitialState = {
	userDetails: {
		token: "",
		name: "",
		id: "",
		isLoggedIn: false
	}
};
const user = (state = InitialState.userDetails, action: Action) => {
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
	return state;
};

const loggedOut = (state = InitialState.userDetails, action: Action) => {
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

const rootReducer = combineReducers({user, loggedOut});

export default rootReducer;
