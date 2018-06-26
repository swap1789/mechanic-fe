// @flow
import {SET_USER_TOKEN, USER_LOGGED_OUT, SAVE_JOB_DATA} from "./actions";

import {serviceConfig} from "./handleServiceCalls";

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

export function saveJobDetails(data: jobData) {
	return {
		type: SAVE_JOB_DATA,
		payload: data
	};
}

export function getJobData(userId: string, token: string) {
	return (dispatch: Function) => {
		serviceConfig("get", "api/jobs", {}, userId, token).then((response: jobData) => {
			dispatch(saveJobDetails(response));
		});
	};
}
