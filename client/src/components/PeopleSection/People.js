import React from "react";
import styled from "styled-components";

const People = ({ name, height, mass, birthday }) => {
	const pages = 9;

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
	background-color: black;
	border: 2px solid yellow;
	width: 20em;
	height: 14em;
	border-radius: 10px;
	padding: 24px;
`;

const Wrapper = styled.div`
	text-align: left;
`;

const Name = styled.div`
	font-size: 20px;
	margin: 10px 10px 32px;
	text-align: center;
	text-decoration: underline;
`;
const Birthday = styled.div`
	margin-bottom: 16px;
`;
const Height = styled.div`
	margin-bottom: 16px;
`;
const Mass = styled.div`
	margin-bottom: 16px;
`;

export default People;
