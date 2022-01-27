import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import PeoplePage from "./components/PeopleSection/PeoplePage";
import PlanetsPage from "./components/PlanetsSection/PlanetsPage";
import StarshipsPage from "./components/StarshipsSection/StarshipsPage";
import Search from "./components/SearchSection/Search";

import galaxy from "./images/Galaxy.png";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Background src={galaxy} />
			<Router>
				<Container>
					<Header />
					<Switch>
						<Route exact path="/">
							<Search />
						</Route>
						<Route exact path="/people">
							<PeoplePage />
						</Route>
						<Route exact path="/planets">
							<PlanetsPage />
						</Route>
						<Route exact path="/starships">
							<StarshipsPage />
						</Route>
					</Switch>
				</Container>
			</Router>
		</>
	);
};

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	border: none;
	margin-left: auto;
	margin-right: auto;
`;

const Background = styled.img`
	height: auto;
	left: 0;
	margin: 0;
	min-height: 100%;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: -1;
`;

export default App;
