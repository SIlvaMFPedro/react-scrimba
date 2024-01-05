import navlogo from '../images/airbnb-logo.png';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
            <img src={navlogo} className="nav--logo"/>
        </nav>
    )
}

export default Navbar;