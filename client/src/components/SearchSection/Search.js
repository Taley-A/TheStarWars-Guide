import React, { useState } from "react";
import styled from "styled-components";

const Search = () => {
	// useState for the value inside of search bar
	const [searchValue, setSearchValue] = useState("lu");
	const [searchResult, setSearchResult] = useState([]);

	const searchGalaxyClick = (ev) => {
		ev.preventDefault();

		fetch(`/search?searchquery=${searchValue}`, { method: "GET" })
			.then((res) => res.json())
			.then((res) => {
				setSearchResult(res.data);
				console.log(res.data);
			});
	};

	return (
		<Container>
			<Title>Search The Galaxy</Title>
			<Wrapper>
				<SearchBox
					type="text"
					placeholder="Search for products here"
					value={searchValue}
					onChange={(ev) => setSearchValue(ev.target.value)}
				/>
				<SearchButton onClick={searchGalaxyClick}>Search</SearchButton>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	text-align: center;
	width: 100vw;
	height: 100vh;
	padding: 50px;
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
	height: 10%;
	margin-right: 5px;
	border: none;
	background-color: white;
	padding: 3px;
	border-radius: 3px;
`;

const SearchButton = styled.button`
	font-size: 30px;
	padding: 3px;
	border-radius: 5px;
	width: 10%;
	height: 10%;
	cursor: pointer;
	border: none;
	background-color: yellow;
	color: black;
	margin-left: 2em;

	&:hover {
		color: yellow;
		background-color: black;
		transition: all 0.5s ease-in;
		transform: scale(1.4);
		cursor: pointer;
	}
	&:active {
		background-color: red;
	}
`;

export default Search;
