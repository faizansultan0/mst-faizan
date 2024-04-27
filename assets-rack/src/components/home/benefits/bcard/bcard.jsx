import Lottie from "react-lottie-player";
import BLottie from "../../../../assets/json/bcardPlayer.json";
import "./bcard.css";

const BCard = ({ icon, alternate, heading, para }) => {
    return (
        <div className="bcard">
            <div className="bimg-parent">
                <img src={icon} alt={alternate} className="bimg" />
            </div>
            <Lottie animationData={BLottie} play className="blottie" />
            <h3 className="bcard-heading">{heading}</h3>
            <p className="bcard-para">{para}</p>
        </div>
    );
};

export default BCard;
