import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogHeader extends Component {
	render() {
		return (
			<header className="App-header">
				<Link to="/">
					<h3 className="App-title">Choiblog</h3>
					<p className="App-intro">Shanyu's home on the web</p>
				</Link>
			</header>
		);
	}
}

export default BlogHeader;
