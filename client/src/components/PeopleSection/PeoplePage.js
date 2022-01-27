import React, { useState, useEffect } from "react";
import styled from "styled-components";
import People from "./People";
import troopers from "../../images/stormT.png";
import { CircularProgress } from "@mui/material";
import Pagination from "../Pagination";

const PeoplePage = () => {
	const [people, setPeople] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [status, setStatus] = useState("loading");
	const totalPages = 9;

	useEffect(() => {
		setStatus("loading");
		fetch(`/get-people/${pageNumber}`, { method: "GET" })
			.then((res) => res.json())
			.then((res) => {
				setPeople(res.data);
				setStatus("ready");
				console.log(res.data);
			});
	}, [pageNumber]);

	return (
		<Container>
			<Top>
				<StormT src={troopers} />
			</Top>
			{status === "loading" ? (
				<LoadBox>
					<CircularProgress size={100} />
				</LoadBox>
			) : (
				<Wrapper>
					<PeopleBox>
						{people.map((person) => {
							return (
								<People
									key={Math.floor(Math.random() * 1000000)}
									name={person.name}
									height={person.height}
									mass={person.mass}
									birthday={person.birth_year}
								/>
							);
						})}
					</PeopleBox>
				</Wrapper>
			)}
			<Pagination
				totalPages={totalPages}
				pageNumber={pageNumber}
				setPageNumber={setPageNumber}
			/>
		</Container>
	);
};

const Container = styled.div`
	padding: 50px;
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

const StormT = styled.img`
	width: 50em;
	height: 30em;
`;

const PeopleBox = styled.div`
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

export default PeoplePage;
