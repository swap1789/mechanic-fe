// @flow
import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

type Props = {
	isLogged: Boolean,
	component: *
};

const PrivateRoute = ({component: Component, isLogged}: Props) => (
	<Route render={() => (isLogged ? <Component /> : <Redirect to="/login" />)} />
);

const mapPropsToState = state => ({
	isLogged: state.user.userDetails.isLoggedIn
});

export default connect(mapPropsToState)(PrivateRoute);
