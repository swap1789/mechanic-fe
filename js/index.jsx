// @flow

import React from "react";
import {render} from "react-dom";
// $FlowFixMe
import "element-theme-default"; //eslint-disable-line
import App from "./App";

const renderApp = () => {
	render(<App />, document.getElementById("app"));
};

renderApp();

if (module.hot) {
	module.hot.accept("./App", () => {
		renderApp();
	});
}
