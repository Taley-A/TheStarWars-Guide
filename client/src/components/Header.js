import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FcGlobe } from "react-icons/fc";
import { IoRocketOutline } from "react-icons/io5";

import SWLogo from "../images/logo.png";

const Header = () => {
	return (
		<Container>
			<Logo src={SWLogo} />
			<PageLink exact to="/" tabIndex="0">
				<Label>
					<FiSearch /> Search
				</Label>
			</PageLink>

			<PageLink to="/people" tabIndex="0">
				<Label>
					<FiUser /> People
				</Label>
			</PageLink>

			<PageLink to="/planets" tabIndex="0">
				<Label>
					<FcGlobe /> Planets
				</Label>
			</PageLink>

			<PageLink to="/starships" tabIndex="0">
				<Label>
					<IoRocketOutline /> Starships
				</Label>
			</PageLink>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	width: 25%;
	flex-direction: column;
	align-items: left;
	padding: 20px 10px 20px 20px;
	border: 2px solid yellow; // dont forget to remove this
`;

const PageLink = styled(NavLink)`
	color: white;
	font-weight: bold;
	text-decoration: none;
	&.active {
		color: yellow;
		font-size: 1.5em;
	}
	&:hover {
		color: #e6e600;
	}
	padding: 20px;
	transition: color 200ms ease-out;
`;

const Label = styled.div``;

const Logo = styled.img`
	margin-bottom: 80px;
`;

export default Header;
