import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./reviewCard.css";

const ReviewCard = ({ image, name, date, review }) => {
    return (
        <div className="review-card-parent">
            <div className="review-card">
                <div className="img-div">
                    <img src={image} alt={name} className="img" />
                </div>
                <h5 className="name">{name}</h5>
                <span className="date d-block">{date}</span>
                <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                    <FontAwesomeIcon icon={faStar} className="star" />
                </div>
                <p className="review-para">{review}</p>
                <div className="arrow-div">
                    <Link to='/' className="arrow-parent">
                        <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
