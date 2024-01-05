import katiezaferes from '../images/katie-zaferes.png';
import star from "../images/star.png";
import './Card.css';

function Card() {
    return (
        <div className="card">
            <img src={katiezaferes} className="card--photo"/>
            <div className="card--stats">
                <img src={star} className="star--image"/>
                <span>5.0 </span>
                <span className="gray"> (6) * </span>
                <span className="gray"> USA </span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p>From <span className="bold">$136</span> per person</p>
        </div>
    );
}

export default Card;