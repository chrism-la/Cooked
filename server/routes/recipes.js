const express = require('express');
const { createRecipe, getRecipes, getRecipe, deleteRecipe, updateRecipe } = require('../controllers/recipeController');

const router = express.Router();

// GET all recipes
router.get('/', getRecipes);

// GET a single recipe
router.get('/:id', getRecipe);

// POST a new recipe
router.post('/new', createRecipe);

// DELETE a recipe
router.delete('/delete/:id', deleteRecipe);

// UPDATE a recipe
router.patch('/update/:id', updateRecipe);

module.exports = router;
