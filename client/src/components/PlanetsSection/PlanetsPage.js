import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Planets from "./Planets";
import planetpic from "../../images/planets.png";
import Pagination from "../Pagination";
import { CircularProgress } from "@mui/material";

const PlanetsPage = () => {
	const [planets, setPlanets] = useState([]);
	const [page, setPage] = useState(1);
	const [status, setStatus] = useState("");
	const totalPages = 6;

	useEffect(() => {
		setStatus("loading");
		fetch(`/get-planets/${page}`, { method: "GET" })
			.then((res) => res.json())
			.then((res) => {
				setPlanets(res.data);
				setStatus("ready");
				console.log(res.data);
			});
	}, [page]);

	return (
		<Container>
			<Top>
				<PlanetPic src={planetpic} />
			</Top>
			{status === "loading" ? (
				<LoadBox>
					<CircularProgress size={100} />
				</LoadBox>
			) : (
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
			)}
			<Pagination />
		</Container>
	);
};

const Container = styled.div`
	padding: 30px;
	padding-top: 10px;
	width: 100vw;
	overflow: scroll;
	overflow-x: hidden;
`;
const Wrapper = styled.div`
	margin: 50px;
	margin-top: 0;
`;

const Top = styled.div`
	display: flex;
	justify-content: center;
`;

const PlanetPic = styled.img`
	height: 30em;
	width: 50em;
	margin-bottom: 60px;
`;

const PlanetBox = styled.div`
	display: grid;
	justify-items: center;
	grid-gap: 50px;
	grid-column-gap: -60px;
	grid-template-columns: repeat(2, 1fr);
`;

const LoadBox = styled.div`
	display: flex;
	justify-content: center;
	margin: 5em;
`;

export default PlanetsPage;
