import './startCard.css';

const StartCard = ({startHandle}) => {
    return (
        <div className="start-card card">
            <h1 className="start-heading">Quiz</h1>
            <button className="btn start-btn" onClick={startHandle}>Start</button>
        </div>
    );
};

export default StartCard;
