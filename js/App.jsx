// @flow
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";
import "../css/App.css";

const fourofour = () => <h1>Page doesnt exist</h1>;

const App = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route exact path="/login" component={Login} />
					<PrivateRoute path="/dashboard" component={Dashboard} />
					<Route component={fourofour} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
);

export default App;
