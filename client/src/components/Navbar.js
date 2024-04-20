import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUser } from '@fortawesome/free-solid-svg-icons';
import '../scss/Navbar.scss';

export default function Navbar() {
    return (
        <>
            <div className="blog-banner">
                <div>
                    <p>
                        JOIN OUR BLOG. <a href="/">SIGN UP </a>
                    </p>
                </div>
            </div>
            <header>
                <div className="container">
                    <Link className="title-card" to="/">
                        <h1 className="title">Cook</h1>
                        <h2>BOOK</h2>
                        <FontAwesomeIcon className="utensil-logo" icon={faUtensils} />
                    </Link>
                </div>
                <nav>
                    <Link className="nav-link" to="/">
                        HOME
                    </Link>
                    <Link className="nav-link" to="/recipes">
                        RECIPES
                    </Link>
                    <Link className="nav-link" to="/">
                        ABOUT US
                    </Link>
                </nav>
                <div className="login-container">
                    <FontAwesomeIcon className="user-logo" icon={faUser} />
                    <Link className="login" to="/login">
                        LOGIN
                    </Link>
                </div>
            </header>
        </>
    );
}
