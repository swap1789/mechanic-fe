// @flow

declare var module: {
	hot: {
		accept(path: string, callback: () => void): void
	}
};

declare type ActionType = "SET_USER_TOKEN" | "USER_LOGGED_OUT" | "SAVE_JOB_DATA"; // keep adding the actions here

declare type ActionT<A: ActionType, P> = {|
	type: A,
	payload: P
|};

export type jobData = {
	_id: string,
	customerName: string,
	location: string,
	phoneNumber: number,
	complaint: string,
	status: string,
	carImage: string,
	__v: number,
	assignedTo: {
		_id: string,
		username: string
	},
	jobType: [
		{
			subTypes: [
				{
					_id: string,
					subtypename: string,
					price: number,
					__v: number
				}
			],
			_id: string,
			name: string,
			imageName: string,
			__v: number
		}
	]
};

export type Action =
	| ActionT<"SET_USER_TOKEN", {token: string, name: string, id: string}>
	| ActionT<"SAVE_JOB_DATA", jobData>
	| ActionT<"USER_LOGGED_OUT", {}>;
