import navgrid from '../images/photo-grid.png';
import './Hero.css';

function Hero(props) {
    return (
        <section className={props.darkMode ? "dark": ""}>
            <div className="hero">
                <img src={navgrid} className="hero--photo" alt=""/>
                <h1 className="hero--header">Online experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </section>
    );
}

export default Hero;