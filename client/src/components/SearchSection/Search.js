import React, { useState } from "react";
import styled from "styled-components";
import People from "../PeopleSection/People";
import { CircularProgress } from "@mui/material";

const Search = () => {
	// useState for the value inside of search bar
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);
	const [status, setStatus] = useState("");

	const searchGalaxyClick = (ev) => {
		ev.preventDefault();
		setStatus("loading");
		fetch(`/search?searchquery=${searchValue}`, { method: "GET" })
			.then((res) => res.json())
			.then((res) => {
				setSearchResult(res.data);
				setStatus("ready");
				console.log(res.data);
			});
	};

	return (
		<Container>
			<Title>Search The Galaxy</Title>
			<Wrapper>
				<SearchBox
					type="text"
					placeholder="Search anyone here..."
					value={searchValue}
					onChange={(ev) => setSearchValue(ev.target.value)}
				/>
				<SearchButton onClick={searchGalaxyClick}>Search</SearchButton>
			</Wrapper>
			{status === "loading" ? (
				<LoadBox>
					<CircularProgress size={100} />
				</LoadBox>
			) : (
				<Results>
					<PeopleBox>
						{searchResult.map((person) => {
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
				</Results>
			)}
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
	width: 100vw;
	height: 100vh;
	padding: 50px;
	overflow: scroll;
	overflow-x: hidden;
`;
const Wrapper = styled.div``;

const Title = styled.h1`
	color: yellow;
	font-size: 6em;
	margin-bottom: 1em;
	font-family: "Rampart One", cursive; ;
`;

const SearchBox = styled.input`
	font-size: 30px;
	width: 25%;
	height: 10vh;
	margin-right: 5px;
	border: none;
	border-radius: 20px;
	background-color: white;
	padding: 3px;
	border-radius: 3px;
`;

const SearchButton = styled.button`
	font-size: 30px;
	padding: 3px;
	border-radius: 20px;
	width: 10%;
	height: 10vh;
	cursor: pointer;
	border: none;
	background-color: yellow;
	color: black;
	margin-left: 2em;

	&:hover {
		color: yellow;
		background-color: black;
		transition: all 0.3s ease-in-out;
		transform: scale(1.4);
		cursor: pointer;
	}
	&:active {
		background-color: red;
	}
`;

const LoadBox = styled.div`
	display: flex;
	justify-content: center;
	margin: 5em;
`;

const Results = styled.div`
	margin: 5em;
`;

const PeopleBox = styled.div`
	display: grid;
	justify-items: center;
	grid-gap: 50px;
	grid-column-gap: -60px;
	grid-template-columns: repeat(2, 1fr);
`;

export default Search;
