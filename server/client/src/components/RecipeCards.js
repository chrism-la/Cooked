import '../scss/RecipeCards.scss';
import { useNavigate } from 'react-router-dom';

export default function RecipeCards({ filteredData }) {
    const navigate = useNavigate();

    const handleCardClick = (recipeData) => {
        navigate('/show', { state: { recipeData } });
    };
    return (
        <div className="recipe-container">
            {filteredData.map((recipe) => (
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
    );
}