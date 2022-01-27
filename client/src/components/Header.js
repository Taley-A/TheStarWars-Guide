import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Header = () => {
	return (
		<Container>
			<PageLink exact to="/" tabIndex="0">
				<Label>
					<FiSearch /> Search
				</Label>
			</PageLink>
		</Container>
	);
};

export default Header;
