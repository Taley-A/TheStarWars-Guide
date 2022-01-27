"use strict";

const fetch = require("cross-fetch");

const getPeople = async (req, res) => {
	try {
		fetch("https://swapi.dev/api/people/", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				res.status(200).json({ status: 200, data: data.results });
			});
	} catch (error) {
		console.log(error);
		res.status(400).json({ status: 400, message: "Caught an error" });
	}
};

const getPlanets = async (req, res) => {
	try {
		fetch("https://swapi.dev/api/planets/", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				res.status(200).json({ status: 200, data: data.results });
			});
	} catch (error) {
		console.log(error);
		res.status(400).json({ status: 400, message: "Caught an error" });
	}
};

const getStarships = async (req, res) => {
	try {
		fetch("https://swapi.dev/api/starships/", {
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => {
				res.status(200).json({ status: 200, data: data.results });
			});
	} catch (error) {
		console.log(error);
		res.status(400).json({ status: 400, message: "Caught an error" });
	}
};

// ------------------------------------

module.exports = { getPeople, getPlanets, getStarships };
