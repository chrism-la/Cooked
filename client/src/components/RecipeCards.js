import '../scss/RecipeCards.scss';

export default function RecipeCards({ filteredData }) {
    return (
        <div className="recipe-container">
            {filteredData.map((recipe) => (
                <div className="recipe-cards">
                    <div className="img-card">
                        <img src={recipe.image} alt="Recipe Images"></img>
                    </div>
                    <h2>{recipe.name}</h2>
                </div>
            ))}
        </div>
    );
}
