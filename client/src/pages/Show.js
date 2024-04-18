import ShowCard from '../components/ShowCard';
import { useLocation } from 'react-router-dom';

export default function Show() {
    const location = useLocation();

    const recipeData = location.state?.recipeData || {};

    return <ShowCard recipeData={recipeData} />;
}
