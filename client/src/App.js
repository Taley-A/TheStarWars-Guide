import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header";

const App = () => {
	return (
		<>
			<Router>
				<GlobalStyles />
				<Container>
					<Header />
					<Switch>
						<Route></Route>
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
