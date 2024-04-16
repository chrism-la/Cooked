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
                        JOIN OUR BLOG. <a href="/">SIGN UP</a>
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
                <div className="container2">
                    <Link className="home" to="/">
                        HOME
                    </Link>
                    <Link className="recipes" to="/">
                        RECIPES
                    </Link>
                    <Link className="news" to="/">
                        NEWS
                    </Link>
                    <Link className="about Us" to="/">
                        ABOUT US
                    </Link>
                </div>
                <div className="container3">
                    <FontAwesomeIcon className="user-logo" icon={faUser} />
                    <Link className="login" to="/">
                        LOGIN
                    </Link>
                </div>
            </header>
        </>
    );
}
