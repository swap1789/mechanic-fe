// import React from "react";
// import {connect} from "react-redux";
// import {bool, node} from "prop-types";
// // type Props = {
// // 	isLogged: Boolean,
// // 	component: *
// // };

// const PrivateRoute = ({component}) => (
// 	<Route // eslint-disable-line
// 		render={props => (props.isLogged ? <component {...props} /> : <Redirect to="/login" />) // eslint-disable-line
// 		}
// 	/>
// );

// PrivateRoute.propTypes = {
// 	isLogged: bool.isRequired,
// 	component: node.isRequired
// };

// const mapPropsToState = state => ({
// 	isLogged: state.setJWTToken.isLoggedIn
// });

// export default connect(mapPropsToState)(PrivateRoute);
