import ShowCard from '../components/ShowCard';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Show() {
    const location = useLocation();

    const recipeData = location.state?.recipeData || {};

    return (
        <>
            <Navbar />
            <ShowCard recipeData={recipeData} />
            <Footer />
        </>
    );
}
