import { Card, Row, Col } from 'react-bootstrap';

export default function RecipeCards({ filteredData }) {
    return (
        <div className="container">
            <Row>
                {filteredData.map((recipe, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
                        <Card>
                            <Card.Img variant="top" src={recipe.image} alt="recipes" />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
