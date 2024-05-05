require('dotenv').config();
const express = require("express");
const cors = require("cors");
const dbConnection = require('./db/db');
const authRoutes = require('./routes/auth');
const morgan = require('morgan')

const app = express();
const PORT = process.env.PORT;

// DB Connection
dbConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan());

// Routes
app.use('/api/user', authRoutes);

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})