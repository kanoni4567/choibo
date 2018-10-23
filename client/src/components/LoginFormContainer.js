import React, { Component } from 'react';
// import Formdata from 'form-data';
import axios from 'axios';
import Input from './Input';
import Button from './Button';

class LoginFormContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loginuser: {
				username: '',
				password: ''
			}
		};

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
		// this.handleUsername = this.handleUsername.bind(this);
		// this.handlePassword = this.handlePassword.bind(this);
	}

	handleFormSubmit(e) {
		e.preventDefault();
		let userData = this.state.loginuser;
		// let formData = new Formdata();
		// formData.set('username', userData.username);
		// formData.set('password', userData.password);
		axios
			.post('/api/login', {
				username: userData.username,
				password: userData.password
			})
			.then(res => {
				// console.log(res.data);
			})
			.catch(err => {
				console.log('log in server error');
				console.log(err);
			});
		// console.log(userData);
	}

	handleInput(e) {
		let value = e.target.value;
		let name = e.target.name;
		this.setState(
			prevState => {
				return {
					loginuser: {
						...prevState.loginuser,
						[name]: value
					}
				};
			}
			// () => console.log(this.state.loginuser)
		);
	}

	// handleUsername(e) {
	// 	let value = e.target.value;
	// 	this.setState(prevState => ({
	// 		loginuser: {
	// 			...prevState.loginuser,
	// 			username: value
	// 		}
	// 	}));
	// }

	// handlePassword(e) {
	// 	let value = e.target.value;
	// 	this.setState(prevState => ({
	// 		loginuser: {
	// 			...prevState.loginuser,
	// 			password: value
	// 		}
	// 	}));
	// }

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<Input
					type={'text'}
					name={'username'}
					value={this.state.loginuser.username}
					placeholder={'Enter username'}
					handleChange={this.handleInput}
				/>
				<Input
					type={'password'}
					name={'password'}
					value={this.state.loginuser.password}
					placeholder={'Enter password'}
					handleChange={this.handleInput}
				/>
				<Button
					action={this.handleFormSubmit}
					type={'primary'}
					title={'Submit'}
				/>
			</form>
		);
	}
}

export default LoginFormContainer;
