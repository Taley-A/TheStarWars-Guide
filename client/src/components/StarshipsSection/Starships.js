import React from "react";
import styled from "styled-components";

const Starships = ({ name, manufacturer, cost, passengers }) => {
	return (
		<Container>
			<Wrapper>
				<Name>{name}</Name>
				<Manufacturer>Manufacturer: {manufacturer}</Manufacturer>
				<Cost>Cost: {cost}</Cost>
				<Passengers>Passengers: {passengers}</Passengers>
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
const Manufacturer = styled.div`
	margin-bottom: 16px;
`;
const Cost = styled.div`
	margin-bottom: 16px;
`;
const Passengers = styled.div`
	margin-bottom: 16px;
`;

export default Starships;
