const Recipe = require('../models/Recipes')
const mongoose = require('mongoose')

// get all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipes.find({}).sort({createdAt: -1})

    res.status(200).json(recipes)
}

// get a single recipe
const getRecipe = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe'})
    }

    const recipe =await Recipe.findById(id)

    if (!Recipe) {
        return res.status(404).json({error: 'No such recipe'})
    }

    res.status(200).json(recipe)
}

// create new recipe
const createRecipe = async (req, res) => {
    const {text} = req.body

    // add doc to db
    try{
        const recipe = await Recipe.create({text})
        res.status(200).json(recipe)
    } catch (error) {
      res.status(400).json({error: error.message})  
    }
}

// delete a recipe
const deleteRecipe = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe'})
    }

    const recipe = await Recipe.findOneAndDelete({_id: id})

    if (!Recipe) {
        return res.status(404).json({error: 'No such recipe'})
    }

    res.status(200).json(Recipe)
}


// update a recipe
const updateRecipe = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such recipe'})
    }

    const workout = await Recipe.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!Recipe) {
        return res.status(404).json({error: 'No such recipe'})
    }

    res.status(200).json(Recipe)
}


module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
}