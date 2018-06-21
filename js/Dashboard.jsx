// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RouterHistory} from "react-router-dom";
import Header from "./Header";
import {serviceConfig} from "./handleServiceCalls";

class Dashboard extends Component {
	state = {
		data: {}
	};

	componentDidMount = () => {
		serviceConfig("get", "api/jobs", {}, this.props.userId, this.props.token).then(response => {
			this.setState({
				data: response
			});
		});
	};

	props: {
		history: RouterHistory,
		userId: string,
		token: string
	};

	logout = () => {
		this.props.history.push("/");
	};

	render() {
		return (
			<div className="dashboard-page">
				<Header logoutUser={this.logout} />
				<pre>
					<code>
						{JSON.stringify(this.state.data, null, 4)}
					</code>
				</pre>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userId: state.setJWTToken.id,
	token: state.setJWTToken.token
});
export default connect(mapStateToProps)(Dashboard);
