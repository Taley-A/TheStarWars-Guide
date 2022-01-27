"use strict";

const path = require("path");
const express = require("express");
const morgan = require("morgan");

const {
	getPeople,
	getPlanets,
	getStarships,
	searchPerson,
} = require("./handlers");

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
	res.status(200).json({
		status: 200,
		message: "Welcome to Taley's assessment.",
	});
});

// Search person
app.get("/search", searchPerson);

// Get all characters
app.get("/get-people/:id", getPeople);

// Get all planets
app.get("/get-planets/:id", getPlanets);

// Get all starships
app.get("/get-starships", getStarships);

// This is our catch all endpoint.
app.get("*", (req, res) => {
	res.status(404).json({
		status: 404,
		message: "This is obviously not what you are looking for.",
	});
});

app.listen(PORT, function () {
	console.info("🌍 Listening on port " + PORT);
});
