import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGoogle, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../scss/Footer.scss';

export default function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="socialIcons">
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                    <a href="/">
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
                <div className="footerNav">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/recipes">Recipes</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
