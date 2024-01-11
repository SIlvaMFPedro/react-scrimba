import navlogo from '../images/airbnb-logo.png';
import './Navbar.css';

function Navbar(props) {
    return (
        <nav className={props.darkMode ? "dark": ""}>
            <img src={navlogo} className="nav--logo" alt=""/>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar;