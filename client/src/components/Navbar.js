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
                    <h1 className="title">Cook</h1>
                    <h2>Book</h2>
                </Link>
            </div>
            <div className="container2">
                <div>
                    <Link className="login" to="/">
                        LogIn
                    </Link>
                </div>
                <div>
                    <Link className="signup" to="/">
                        SignUp
                    </Link>
                </div>
                <FontAwesomeIcon icon={faUser} />
            </div>
        </header>
    );
}
