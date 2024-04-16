require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipes');

// Express Settings
const app = express();

app.use(cors());
app.use(express.json());

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/recipes', recipeRoutes);

// Database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to DB'))
    .catch(console.error);

// Port

app.listen(process.env.PORT, () => console.log('Server started on port', process.env.PORT));
