const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Express
const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () => console.log('Server started on port', process.env.PORT));

// Database
mongoose
    .connect('mongodb://127.0.0.1:27017/cooked')
    .then(() => console.log('Connected to DB'))
    .catch(console.error);
