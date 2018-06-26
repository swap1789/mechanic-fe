// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RouterHistory} from "react-router-dom";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {getJobData} from "./actionCreators";

class Dashboard extends Component {
	componentDidMount = () => {
		if (!Object.keys(this.props.jobsData).length) {
			this.props.getJobDetails(this.props.userId, this.props.token);
		}
	};

	props: {
		history: RouterHistory,
		userId: string,
		token: string,
		getJobDetails: Function,
		jobsData: jobData
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
						{JSON.stringify(this.props.jobsData, null, 4)}
					</code>
				</pre>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userId: state.user.userDetails.id,
	token: state.user.userDetails.token,
	jobsData: state.jobDetails.jobData
});

const mapDispatchToProps = (dispatch: Function) => ({
	getJobDetails(userId, tokenNo) {
		dispatch(getJobData(userId, tokenNo));
	}
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
