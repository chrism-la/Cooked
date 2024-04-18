const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: false,
        },
        ingredients: {
            type: String,
            required: true,
        },
        directions: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Recipe', recipeSchema);
