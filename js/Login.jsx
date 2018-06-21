// @flow
import React, {Component} from "react";
import {connect} from "react-redux";
import type {RouterHistory} from "react-router-dom";
// $FlowFixMe
import {Input, Button} from "element-react";
import styled from "styled-components";
import {setJWTToken} from "./actionCreators";
import {loginConfig} from "./handleServiceCalls";

const FormWrapper = styled.div`
display: flex;
padding: 30px;
width: 50%;
height: 70%;
margin: auto;
flex-direction: column;
top: 0;
right: 0;
bottom: 0;
left: 0;
position: fixed;
background: #ffffff;
	h3 {
		text-align: center;
		font-size: 30px;
	}
	label {
		display: flex;
		justify-content: flex-start;
		width: 100%;
		margin-bottom: 5px;
	}
	input, button {
		border-radius: 0;
		margin-bottom: 25px;
	}
`;

class Login extends Component {
	state = {
		name: "",
		password: ""
	};

	props: {
		history: RouterHistory,
		handleUserToken: Function
	};

	handleName = (value: string) => {
		this.setState({
			name: value
		});
	};

	handlePassword = (value: string) => {
		this.setState({
			password: value
		});
	};

	submitLogin = () => {
		const {name, password} = this.state;
		const payload = {
			username: name,
			password
		};
		loginConfig("post", "auth/signin", payload).then(response => {
			this.props.handleUserToken(response); // get the JWT token and logged in mechanic details
			this.props.history.push("/dashboard");
		});
	};

	render() {
		return (
			<FormWrapper key="loginform">
				<h3>Mobile Mechanic World</h3>
				<label htmlFor="name" className="username">Username: </label>
				<Input
					key="mechanicUserName"
					placeholder="Enter your user name"
					value={this.state.name}
					onChange={this.handleName}
				/>
				<label htmlFor="password" className="password">Password: </label>
				<Input
					type="password"
					key="mechanicPassword"
					placeholder="Enter your password here"
					value={this.state.password}
					onChange={this.handlePassword}
				/>
				<Button type="primary" onClick={this.submitLogin}>Login</Button>
			</FormWrapper>
		);
	}
}
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Function) => ({
	handleUserToken(response) {
		dispatch(setJWTToken(response));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
