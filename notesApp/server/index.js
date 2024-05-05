require('dotenv').config();
const express = require("express");
const cors = require("cors");
const dbConnection = require('./db/db')

const app = express();
const PORT = process.env.PORT;

// DB Connection
dbConnection();

// Middlewares
app.use(cors());
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})