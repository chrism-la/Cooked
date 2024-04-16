import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUser } from '@fortawesome/free-solid-svg-icons';
import '../scss/Navbar.scss';

export default function Navbar() {
    return (
        <header>
            <div className="container">
                <Link className="logo" to="/">
                    <FontAwesomeIcon icon={faUtensils} />
                    <h1 className="title">CookBook</h1>
                </Link>
            </div>
            <div className="container 2">
                <Link to="/">LogIn</Link>
                <Link to="/">SignUp</Link>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
}
