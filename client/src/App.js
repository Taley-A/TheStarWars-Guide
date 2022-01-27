import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";
import PeoplePage from "./components/PeopleSection/PeoplePage";
import PlanetsPage from "./components/PlanetsSection/PlanetsPage";
import Search from "./components/SearchSection/Search";

const App = () => {
	return (
		<>
			<GlobalStyles />
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
					</Switch>
				</Container>
			</Router>
		</>
	);
};

const Container = styled.div`
	display: flex;
	background-color: black;
	height: 100vh;
	width: 100vw;
	border: none;
	margin-left: auto;
	margin-right: auto;
`;

export default App;
