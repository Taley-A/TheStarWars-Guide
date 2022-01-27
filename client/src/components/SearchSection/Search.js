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
		<>
			<Title>Search The Galaxy</Title>
			<SearchBox
				type="text"
				placeholder="Search for products here"
				value={searchValue}
				onChange={(ev) => setSearchValue(ev.target.value)}
			/>
			<SearchButton onClick={searchGalaxyClick}>Search</SearchButton>
		</>
	);
};

const Title = styled.h1`
	color: yellow;
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
	border-radius: 3px;
	width: 25%;
	height: 10%;
	cursor: pointer;
	border: none;
	background-color: yellow;
	color: black;

	&:active {
		background-color: red;
	}
`;

export default Search;
