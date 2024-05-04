import { useEffect, useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import selectAudio from '../../assets/audio/select.mp3';
import "./quizItem.css";

const QuizItem = ({
    question,
    questionNo,
    nextHandle,
    prevHandle,
    skipHandle,
    submitHandle,
    isCompleted,
}) => {
    const [selected, setSelected] = useState("");
    const audioRef = useRef(null);

    useEffect(() => {
        setSelected("");
    }, [question]);

    const clickHandle = async (e) => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        if (selected === e.target.value) {
            setSelected("");
        } else {
            setSelected(e.target.value);
        }
    };

    return (
        <div className="quiz-item card">
            <audio ref={audioRef} src={selectAudio} />
            {isCompleted ? (
                <button className="sm-btn submit" onClick={submitHandle}>
                    Submit
                </button>
            ) : (
                <>
                    <h1 className="question-no">Question No.{questionNo}</h1>
                    <h2 className="question-heading">{question.question}</h2>
                    <form className="q-form mb-sm-4 mb-2">
                        <Row>
                            {question.options.map((option, i) => (
                                <Col sm={6} className="mb-2" key={option}>
                                    <div className="option-item">
                                        <input
                                            className={`btn ${
                                                selected === option
                                                    ? "selected-btn"
                                                    : ""
                                            }`}
                                            type="button"
                                            value={option}
                                            onClick={clickHandle}
                                        />
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </form>

                    <div className="buttons-div">
                        <button
                            className="sm-btn prev-btn"
                            disabled={questionNo === 1}
                            onClick={prevHandle}
                        >
                            Previous
                        </button>

                        <button
                            className="sm-btn skip-btn"
                            onClick={skipHandle}
                        >
                            Skip
                        </button>

                        <button
                            className="sm-btn next-btn"
                            disabled={!selected}
                            onClick={() => nextHandle(selected)}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default QuizItem;
