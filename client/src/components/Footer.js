import '../scss/Footer.scss';


export default function Footer() {
    return (
        <footer>
        <div className="footerContainer">
            <div className="socialIcons">
                <a href=""><i className="fab fa-facebook"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-twitter"></i></a>
                <a href=""><i className="fab fa-google-plus"></i></a>
                <a href=""><i className="fab fa-youtube"></i></a>
            </div>
            <div className="footerNav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/recipes">Recipes</a></li>
                    <li><a href="/">About Us</a></li>
                </ul>
            </div>
        </div>
    </footer>
);
}
    
