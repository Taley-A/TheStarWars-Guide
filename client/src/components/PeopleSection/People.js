import React from "react";
import styled from "styled-components";

const People = ({ name, height, mass, birthday }) => {
	return (
		<Container>
			<Wrapper>
				<Name>{name}</Name>
				<Birthday>Birthday: {birthday}</Birthday>
				<Height>Height: {height}</Height>
				<Mass>Weight: {mass}</Mass>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	color: yellow;
	border: 2px solid yellow;
	width: 16em;
	height: 10em;
	border-radius: 10px;
	padding: 24px;
`;

const Wrapper = styled.div`
	text-align: left;
`;

const Name = styled.div`
	font-size: 20px;
	margin: 10px;
	text-align: center;
	text-decoration: underline;
`;
const Birthday = styled.div``;
const Height = styled.div``;
const Mass = styled.div``;

export default People;
