const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Express

const app = express();

app.use(express.json());
app.use(cors());

// Database

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to DB'))
    .catch(console.error);

// Routes

const recipesRoutes = require('./routes/recipes');

app.use('/recipes', recipesRoutes);

// Port

app.listen(process.env.PORT, () => console.log('Server started on port', process.env.PORT));
