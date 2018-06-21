import axios from "axios";

const baseURL = "https://mechanicnodeapi.herokuapp.com/";
// const baseURL = "http://localhost:3000/";
export function serviceConfig(type, endpoint, payload, id, token) {
	const config = {
		method: type,
		headers: {
			authorization: `Bearer ${token}`
		},
		url: `${baseURL}${endpoint}/${id}`
	};
	return new Promise((resolve, reject) => {
		axios(config)
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}

export function loginConfig(type, endpoint, payload) {
	return new Promise((resolve, reject) => {
		axios
			[type](`${baseURL}${endpoint}`, payload)
			.then(response => {
				resolve(response.data);
			})
			.catch(err => {
				reject(err);
			});
	});
}
