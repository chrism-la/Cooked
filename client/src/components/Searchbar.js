import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import RecipeCards from './RecipeCards';
import '../scss/Searchbar.scss';

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
            <div className="search-box">
                <div className="search-container">
                    <Form onSubmit={handleSearch}>
                        <Form.Control className="search-input" type="text" placeholder="Search Recipes.." value={search} onChange={(e) => setSearch(e.target.value)} />

                        <Button className="search-button" type="submit">
                            Search
                        </Button>
                    </Form>
                </div>
            </div>
            <RecipeCards filteredData={filteredData} />
        </>
    );
}
