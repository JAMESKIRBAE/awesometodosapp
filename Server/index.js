require("dotenv").config();
const express = require("express");
const{connectToMongoDB}= require("./database");

const app = express();
app.use(express.json());

// import our todos router
const router = require("./routes");

// use /api to prefix our endpoints
app.use("/api", router);

const port = process.env.PORT || 5000;

const startServer = async () => {
    await connectToMongoDB();
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
};
startServer();