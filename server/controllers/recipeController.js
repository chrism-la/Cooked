const Recipe = require('../models/Recipes');
const mongoose = require('mongoose');

// get all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).sort({ createdAt: -1 });

    res.status(200).json(recipes);
};

// get a single recipe
const getRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such recipe' });
    }

    const recipe = await Recipe.findById(id);

    if (!recipe) {
        return res.status(404).json({ error: 'No such recipe' });
    }

    res.status(200).json(recipe);
};

// create new recipe
const createRecipe = async (req, res) => {
    const { text } = req.body;

    // add doc to db
    try {
        const recipe = await Recipe.create({ text });
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such recipe' });
    }

    const recipe = await Recipe.findOneAndDelete({ _id: id });

    if (!recipe) {
        return res.status(404).json({ error: 'No such recipe' });
    }

    res.status(200).json(recipe);
};

// update a recipe
const updateRecipe = async (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid Recipe ID' });
    }

    try {
        const recipe = await Recipe.findByIdAndUpdate(id, { text: text }, { new: true });

        if (!recipe) {
            return res.status(404).json({ error: 'No such recipe' });
        }

        res.status(200).json(recipe);
    } catch (error) {
        console.error('Error updating recipe:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe,
};
