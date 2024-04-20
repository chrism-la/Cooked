import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export const RecipeContext = React.createContext();

export default function Recipes() {
    const [recipes, setRecipes] = useState(null);
    const navigate = useNavigate();

    const handleCardClick = (recipeData) => {
        navigate('/show', { state: { recipeData } });
    };

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('http://localhost:4000/api/recipes');
            const data = await response.json();

            if (response.ok) {
                setRecipes(data);
            }
        };
        fetchRecipes();
    }, []);

    return (
        <>
            <RecipeContext.Provider value={recipes}>
                <Navbar />
                <Searchbar />
                <div className="recipe-container">
                    {recipes &&
                        recipes.map((recipe) => (
                            <div className="recipe-cards" key={recipe._id}>
                                <div className="img-card" onClick={() => handleCardClick(recipe)}>
                                    <img src={recipe.image} alt="Recipe Images"></img>
                                </div>
                                <h2>{recipe.name}</h2>
                                <h2>{recipe.rating}</h2>
                                <h2>{recipe.ingredients}</h2>
                                <h2>{recipe.directions}</h2>
                            </div>
                        ))}
                </div>
            </RecipeContext.Provider>
            <Footer/>
        </>
    );
}
