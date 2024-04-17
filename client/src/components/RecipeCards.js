import '../scss/RecipeCards.scss';

export default function RecipeCards({ filteredData }) {
    return (
        <div className="recipe-cards">
            {filteredData.map((recipe) => (
                <div className="img-card">
                    <img src={recipe.image} alt="Recipe Images"></img>
                    <h2>{recipe.name}</h2>
                </div>
            ))}
        </div>
    );
}
