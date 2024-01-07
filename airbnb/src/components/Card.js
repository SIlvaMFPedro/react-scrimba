import star from '../images/star.png';
import katiezaferes from '../images/katie-zaferes.png';
import weddingphoto from '../images/wedding-photography.png';
import mountainbike from '../images/mountain-bike.png';

import './Card.css';

function Card(props) {
    let cardImg;
    if (props.image === "katie-zaferes.png"){
        cardImg = katiezaferes;
    }
    else if (props.image === "wedding-photography.png"){
        cardImg = weddingphoto;
    }
    else{
        cardImg = mountainbike;
    }

    let badgeText;
    if (props.openSpots === 0){
        badgeText = "SOLD OUT";
    }
    else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img 
                src={cardImg}
                className="card--photo"
                alt="Main card image."
            />
            <div className="card--stats">
                <img 
                    src={star} 
                    className="star--image"
                    alt="Star icon."
                />
                <span>{props.rating} </span>
                <span className="gray"> ({props.reviewCount}) * </span>
                <span className="gray"> {props.country} </span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">From <span className="bold">${props.price}</span> per person</p>
        </div>
    );
}

export default Card;