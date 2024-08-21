import "./plancard.css";

const PlanCard = ({ tlgtext, arstext, price1, price2 }) => {
    return (
        <div className="slider-parent">
            <div className="scard">
                <div className="tpart">
                    <span className="tsm-text">UPTO</span>
                    <span className="tlg-text">{tlgtext}</span>
                    <span className="tsm-text">ASSETS</span>
                </div>
                <div className="bpart">
                    <span className="subs-text">Subscription Plan</span>
                    <span className="ars-text">ARS-{arstext}</span>
                    <div className="price-row">
                        <span className="price-lg">${price1}</span>
                        <span className="price-sm">/ Year</span>
                    </div>
                    <div className="or-div">
                        <span className="or-span">or</span>
                    </div>
                    <span className="subs-text">Buy Asset Tags Worth</span>
                    <div className="price-row">
                        <span className="price-lg">${price2}</span>
                        <span className="price-sm">/ Year</span>
                    </div>
                    <div className="button-div">
                        <button className="button">Buy Tags</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;
