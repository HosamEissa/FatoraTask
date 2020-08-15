const express = require("express");
const app = express();
const categoryRouter = require("./src/routes/Category");
const providerRouter = require("./src/routes/Provider");
const productRouter = require("./src/routes/Product");

const PORT = process.env.PORT || 3000;

require("./src/database/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/categories", categoryRouter);
app.use("/api/providers", providerRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res) => {
	res.send("Welcome Home");
});

app.listen(PORT, () => {
	console.log("Server is up on port " + PORT);
});
