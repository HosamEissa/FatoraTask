const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

require("./src/database/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome Home");
});

app.listen(PORT, () => {
	console.log("Server is up on port " + PORT);
});
