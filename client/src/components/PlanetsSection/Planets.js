import React from "react";
import styled from "styled-components";

const Planets = ({ name, rotation, terrain, population, climate }) => {
	return (
		<Container>
			<Wrapper>
				<Name>{name}</Name>
				<Rotation>Rotation: {rotation}</Rotation>
				<Terrain>Terrain: {terrain}</Terrain>
				<Population>Population: {population}</Population>
				<Climate>Climate: {climate}</Climate>
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
	margin-top: 5px;
	margin-bottom: 32px;
	text-align: center;
	text-decoration: underline;
`;
const Rotation = styled.div`
	margin-bottom: 16px;
`;
const Terrain = styled.div`
	margin-bottom: 16px;
`;
const Population = styled.div`
	margin-bottom: 16px;
`;
const Climate = styled.div`
	padding-bottom: 10px;
`;

export default Planets;
