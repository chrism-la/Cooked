import Card from 'react-bootstrap/Card';
import '../scss/ShowCard.scss';

export default function ShowCard({ recipeData }) {
    return (
        <>
            <div className="blog-banner">
                <div>
                    <p>
                        JOIN OUR BLOG. <a href="/">SIGN UP </a>
                    </p>
                </div>
            </div>
            <div className="img-card"></div>
            <Card>
                <Card.Img variant="top" src={recipeData.image} alt={recipeData.image} />
                <Card.Body>
                    <Card.Title className="text-center">{recipeData.name}</Card.Title>
                    <Card.Text className="text-center">
                        {recipeData.rating}
                        {recipeData.ingredients}
                        {recipeData.directions}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}
