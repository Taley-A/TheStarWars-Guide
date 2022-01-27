import React, { useState, useEffect } from "react";
import styled from "styled-components";
import People from "./People";

const People = () => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("/get-people", { method: "GET" })
			.then((res) => res.json())
			.then((res) => {
				setPeople(res.data);
				console.log(res.data);
			});
	}, []);

	return (
		<Container>
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
		</Container>
	);
};
