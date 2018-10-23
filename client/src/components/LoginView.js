import React, { Component } from 'react';
import BlogHeader from './BlogHeader.js';
import LoginFormContainer from './LoginFormContainer';

class LoginView extends Component {
	render() {
		return (
			<div>
				<BlogHeader />
				<LoginFormContainer />
			</div>
		);
	}
}

export default LoginView;
