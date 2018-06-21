// @flow
import {SET_USER_TOKEN, USER_LOGGED_OUT} from "./actions";

export function setJWTToken(payload: {}) {
	return {
		type: SET_USER_TOKEN,
		payload
	};
}

export function logoutUser(payload: {}) {
	return {
		type: USER_LOGGED_OUT,
		payload
	};
}

export const test = "test";
