import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.scss';


class Header extends Component {
	render() {
		return (
			<header>
				<Link to="/">Blog</Link>
				<Link to="/news">News</Link>
				<Link to="/admin">Admin</Link>
			</header>
		);
	}
}

export default Header;
