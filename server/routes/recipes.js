const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipes');

// ROUTE HANDLERS
router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

// GET a single recipe
router.get('/:id', (req, res) => {
    res.json({ mssg: 'GET a single recipe' });
});

// POST a new recipe
router.post('/', (req, res) => {
    res.json({ mssg: 'POST a new recipe' });
});

// DELETE a recipe
router.delete('/:id', (req, res) => {
    res.json({ mssg: 'DELETE a recipe' });
});

// UPDATE a recipe
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a recipe' });
});

module.exports = router;
