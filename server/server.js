const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Express
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3001, () => console.log('Server started on port 3001'));

// Database
mongoose
    .connect('mongodb://127.0.0.1:27017/cooked')
    .then(() => console.log('Connected to DB'))
    .catch(console.error);
