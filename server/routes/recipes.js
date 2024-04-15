const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipes');

// ROUTE HANDLERS

// GET all recipes
router.get('/', async (req, res) => {
    const recipes = await Recipe.find();
    res.json(recipes);
});

// GET a single recipe
router.get('/:id', async (req, res) => {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
});

// POST a new recipe
router.post('/new', (req, res) => {
    const recipe = new Recipe({
        text: req.body.text,
    });

    recipe.save();

    res.json(recipe);
});

// DELETE a recipe
router.delete('/delete/:id', async (req, res) => {
    const result = await Recipe.findByIdAndDelete(req.params.id);
    res.json(result);
});

// UPDATE a recipe
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'UPDATE a recipe' });
});

module.exports = router;
