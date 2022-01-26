"use strict";

const path = require("path");
const express = require("express");
const morgan = require("morgan");

// const {
// } = require("./handlers");

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));

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
