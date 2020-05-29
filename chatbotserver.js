const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
require("dotenv").config();

app.use(express.json());

const watsonRoutes = require("./routes/api/ibmwatson");
app.use("/api/ibmwatson", watsonRoutes);

app.listen(port, () => {
    console.log("Server is listening on port: ", port);
});