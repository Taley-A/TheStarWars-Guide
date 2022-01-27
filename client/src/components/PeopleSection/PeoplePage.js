import React, { useState, useEffect } from "react";
import styled from "styled-components";
import People from "./People";

const PeoplePage = () => {
	const [people, setPeople] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		fetch(`/get-people/${page}`, { method: "GET" })
			.then((res) => res.json())
			.then((res) => {
				setPeople(res.data);
				console.log(res.data);
			});
	}, [page]);

	return (
		<Container>
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

const PeopleBox = styled.div`
	display: grid;
	justify-items: center;
	grid-gap: 50px;
	grid-column-gap: -60px;
	grid-template-columns: repeat(3, 1fr);
`;

export default PeoplePage;
