// @flow

import React, {Component} from "react";
import {connect} from "react-redux";
import styled from "styled-components";
// $FlowFixMe
import {Button} from "element-react";
import {logoutUser} from "./actionCreators";

const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 20px;
padding: 20px;
background-color: #20a0ff;
color: #fff;
	button {
		color: #fff;
		&:hover {
			color: #ffffff;
		}
	}
`;
class Header extends Component {
	props: {
		username: string,
		userLoggedOut: Function,
		logoutUser: Function
	};
	logout = () => {
		this.props.userLoggedOut();
		this.props.logoutUser();
	};
	render() {
		return (
			<HeaderWrapper>
				<div className="username">
					<span>Hello {this.props.username}</span>
				</div>
				<div className="logo">
					MECHANICS
				</div>
				<div className="header-links">
					<Button type="text" onClick={this.logout}>Logout</Button>
				</div>
			</HeaderWrapper>
		);
	}
}

const mapStateToProps = state => ({
	username: state.user.userDetails.name
});

const mapDispatchToProps = (dispatch: Function) => ({
	userLoggedOut() {
		dispatch(logoutUser({}));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
