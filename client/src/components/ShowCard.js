import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <Card className="row justify-content-center mx-auto w-50 min-vw-50 p-2">
                <Card.Img variant="top" src={recipeData.image} alt={recipeData.image} />
                <Card.Body>
                    <Card.Title className="text-center">{recipeData.name}</Card.Title>
                    <Card.Text className="text-center">
                        {recipeData.rating}
                        {recipeData.description}
                    </Card.Text>
                    <div style={{ display: 'inline-flex' }}>
                        <Button
                            type=""
                            style={{
                                backgroundColor: '#7aada0',
                                border: '2px solid #d6d6d6',
                                padding: '5px',
                                marginLeft: '2px',
                            }}
                        >
                            Delete
                        </Button>
                        <Button
                            type=""
                            className=""
                            style={{
                                backgroundColor: '#7aada0',
                                border: '2px solid #d6d6d6',
                                padding: '5px',
                                marginLeft: '2px',
                            }}
                        >
                            Update
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
