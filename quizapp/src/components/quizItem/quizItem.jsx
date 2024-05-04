import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
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

    useEffect(() => {
        setSelected("");
    }, [question]);

    const clickHandle = (e) => {
        if (selected === e.target.value) {
            setSelected("");
        } else {
            setSelected(e.target.value);
        }
    };

    return (
        <div className="quiz-item card">
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
