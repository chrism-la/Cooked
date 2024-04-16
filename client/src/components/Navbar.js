import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <FontAwesomeIcon icon={faUtensils} />
                </Link>
            </div>
        </header>
    );
}
