const express = require('express');

// Controller functions
const { loginUser, signupUser } = require('../controllers/userController');

const router = express.Router();

router.post('/login', loginUser);

router.post('/signup', signupUser);

module.exports = router;
