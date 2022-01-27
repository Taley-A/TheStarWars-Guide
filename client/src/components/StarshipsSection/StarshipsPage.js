import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Starships from "./Starships";
import milleniumF from "../../images/MilleniumF.png";
import { CircularProgress } from "@mui/material";

const StarshipsPage = () => {
	const [starships, setStarships] = useState([]);
	const [page, setPage] = useState(1);
	const [status, setStatus] = useState("");

	useEffect(() => {
		setStatus("loading");
		fetch(`/get-starships/${page}`, { method: "GET" })
			.then((res) => res.json())
			.then((res) => {
				setStarships(res.data);
				setStatus("ready");
				console.log(res.data);
			});
	}, [page]);

	return (
		<Container>
			<Top>
				<MilleniumPic src={milleniumF} />
			</Top>
			{status === "loading" ? (
				<LoadBox>
					<CircularProgress size={100} />
				</LoadBox>
			) : (
				<Wrapper>
					<StarshipsBox>
						{starships.map((starship) => {
							return (
								<Starships
									key={Math.floor(Math.random() * 1000000)}
									name={starship.name}
									manufacturer={starship.manufacturer}
									passengers={starship.passengers}
									cost={starship.cost_in_credits}
								/>
							);
						})}
					</StarshipsBox>
				</Wrapper>
			)}
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
	margin-bottom: 4em;
`;

const MilleniumPic = styled.img`
	width: 40em;
	height: 20em;
`;

const StarshipsBox = styled.div`
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
export default StarshipsPage;
