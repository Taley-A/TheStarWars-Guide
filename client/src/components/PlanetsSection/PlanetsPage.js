import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Planets from "./Planets";

const PlanetsPage = () => {
	const [planets, setPlanets] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		fetch(`/get-planets/${page}`, { method: "GET" })
			.then((res) => res.json())
			.then((res) => {
				setPlanets(res.data);
				console.log(res.data);
			});
	}, [page]);

	return (
		<Container>
			<Wrapper>
				<PlanetBox>
					{planets.map((planet) => {
						return (
							<Planets
								key={Math.floor(Math.random() * 1000000)}
								name={planet.name}
								rotation={planet.rotation_period}
								terrain={planet.terrain}
								population={planet.population}
								climate={planet.climate}
							/>
						);
					})}
				</PlanetBox>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	padding: 50px;
	width: 100vw;
`;
const Wrapper = styled.div`
	margin: 50px;
	margin-top: 0;
`;

const PlanetBox = styled.div`
	display: grid;
	justify-items: center;
	grid-gap: 50px;
	grid-column-gap: -60px;
	grid-template-columns: repeat(3, 1fr);
`;

export default PlanetsPage;
