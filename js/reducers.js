// @flow

import {combineReducers} from "redux";
import {SET_USER_TOKEN, USER_LOGGED_OUT} from "./actions";

const setJWTToken = (state = {}, action: Action) => {
	if (action.type === SET_USER_TOKEN) {
		return Object.assign({}, state, {
			token: action.payload.token,
			name: action.payload.name,
			id: action.payload.id,
			isLoggedIn: true
		}); // set the user name and JWT token in the store
	}
	return state;
};

const loggedOut = (state = {}, action: Action) => {
	if (action.type === USER_LOGGED_OUT) {
		return {
			...state,
			token: "",
			isLoggedIn: false
		};
	}
	return state;
};

const rootReducer = combineReducers({setJWTToken, loggedOut});

export default rootReducer;
