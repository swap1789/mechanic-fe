// @flow

declare var module: {
	hot: {
		accept(path: string, callback: () => void): void
	}
};

declare type ActionType = "SET_USER_TOKEN" | "USER_LOGGED_OUT"; // keep adding the actions here

declare type ActionT<A: ActionType, P> = {|
	type: A,
	payload: P
|};

export type Action =
	| ActionT<"SET_USER_TOKEN", {token: string, name: string, id: string}>
	| Action<"USER_LOGGED_OUT", {}>;
