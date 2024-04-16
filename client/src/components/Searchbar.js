import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import RecipeCards from './RecipeCards';

export default function Searchbar() {
    const [jsonData, setJsonData] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/recipes');
            const data = await response.json();
            setJsonData(data);
            const filtered = jsonData.filter((recipe) => recipe.name.toLowerCase() === search.toLowerCase());
            setFilteredData(filtered);
        } catch (error) {
            console.log(error);
        }

        setSearch('');
    };

    return (
        <>
            <Form onSubmit={handleSearch}>
                <Row className="row">
                    <Col xs="" style={{ paddingLeft: '30px' }}>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" style={{ backgroundColor: 'lightblue', borderColor: '#7adda0' }}>
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>

            <RecipeCards filteredData={filteredData} />
        </>
    );
}
