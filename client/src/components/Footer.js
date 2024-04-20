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
                    <li><a href="">Home</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Our Team</a></li>
                </ul>
            </div>
        </div>
        <div className="footerBottom">
            <p>Copyright &copy;2022 Designed by <span>JCJEZ</span></p>
        </div>
    </footer>
);
}
    
