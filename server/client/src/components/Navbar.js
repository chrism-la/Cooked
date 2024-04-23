import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faUser } from '@fortawesome/free-solid-svg-icons';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import '../scss/Navbar.scss';

export default function Navbar() {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <>
            <div className="blog-banner">
                <div>
                    <p>
                        JOIN OUR BLOG. <a href="/signup">SIGN UP </a>
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
                {!user && (
                    <div className="login-container">
                        <FontAwesomeIcon className="user-logo" icon={faUser} />
                        <Link className="login" to="/login">
                            LOGIN
                        </Link>
                    </div>
                )}
                {user && (
                    <div className="login-container">
                        <span>{user.email}</span>
                        <div>
                            <button className="login logout" onClick={handleClick}>
                                Log Out
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
