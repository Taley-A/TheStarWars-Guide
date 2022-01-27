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
const Rotation = styled.div``;
const Terrain = styled.div``;
const Population = styled.div``;
const Climate = styled.div``;

export default Planets;
