require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const recipeRoutes = require ('./routes/recipes')

// Express
const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// Routes
app.use('/api/recipes', recipeRoutes);

// Database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to DB'))
    .catch(console.error);


// Port

app.listen(process.env.PORT, () => console.log('Server started on port', process.env.PORT));
