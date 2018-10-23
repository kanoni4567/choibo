import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class BlogHeader extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	renderUsername() {
		if (this.props.user) {
			return this.props.user.username;
		}
	}

	render() {
		// console.log(this.props);
		return (
			<header className="App-header">
				<Link to="/">
					<h3 className="App-title">Choiblog</h3>
					<h1>{this.renderUsername()}</h1>
					<p className="App-intro">Shanyu's home on the web</p>
				</Link>
			</header>
		);
	}
}

function mapStateToProps(state) {
	return { user: state.current_user.current_user };
}

export default connect(
	mapStateToProps,
	{ fetchUser }
)(BlogHeader);
