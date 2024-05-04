import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import generatePDF from "react-to-pdf";
import { PieChart } from "@mui/x-charts";
import "./result.css";

const Result = ({ timeTaken, result, playAgainHandle }) => {
    const targetRef = useRef();

    const [stats, setStats] = useState({
        correct: 0,
        wrong: 0,
        skipped: 0,
        totalScores: 0,
        grade: "",
    });

    useEffect(() => {
        let correct = 0,
            wrong = 0,
            skipped = 0,
            totalScores = 0,
            grade = "";
        for (let i = 0; i < result.length; i++) {
            if (result[i] === 0) {
                skipped += 1;
            } else if (result[i] === 1) {
                correct += 1;
                totalScores += 1;
            } else {
                wrong += 1;
                totalScores -= 1;
            }
        }
        if (totalScores < 0) {
            totalScores = 0;
        }

        if (totalScores < 4) {
            grade = "F";
        } else if (totalScores < 7) {
            grade = "C";
        } else if (totalScores < 9) {
            grade = "B";
        } else {
            grade = "A";
        }

        setStats({
            correct,
            wrong,
            skipped,
            totalScores,
            grade,
        });
    }, [result]);

    return (
        <div className="result">
            <div className="top-part">
                <Container>
                    <div className="buttons-row">
                        <button
                            className="btn"
                            onClick={() =>
                                generatePDF(targetRef, {
                                    filename: "quizResult.pdf",
                                })
                            }
                        >
                            Download PDF
                        </button>
                        <button className="btn" onClick={playAgainHandle}>
                            Play Again
                        </button>
                    </div>
                </Container>
            </div>

            <div className="bottom-part" ref={targetRef}>
                <Container>
                    <h1 className="result-heading mb-3">Quiz Result</h1>
                    <div className="result-parent">
                        <Row>
                            <Col md={5}>
                                <div className="left-part">
                                    <h2 className="sm-heading">Your Result</h2>
                                    <div className="card">
                                        <div className="r-row mb-2">
                                            <span className="text">
                                                Total Questions
                                            </span>
                                            <span className="number">
                                                {result.length}
                                            </span>
                                        </div>
                                        <div className="r-row mb-2">
                                            <span className="text">
                                                Total Time
                                            </span>
                                            <span className="number">
                                                {timeTaken}
                                            </span>
                                        </div>
                                        <div className="r-row mb-2">
                                            <span className="text">
                                                Correct Answers
                                            </span>
                                            <span className="number">
                                                {stats.correct}
                                            </span>
                                        </div>
                                        <div className="r-row mb-2">
                                            <span className="text">
                                                Wrong Answers
                                            </span>
                                            <span className="number">
                                                {stats.wrong}
                                            </span>
                                        </div>
                                        <div className="r-row mb-2">
                                            <span className="text">
                                                Skipped Questions
                                            </span>
                                            <span className="number">
                                                {stats.skipped}
                                            </span>
                                        </div>
                                        <div className="r-row mb-2">
                                            <span className="text">
                                                Total Scores
                                            </span>
                                            <span className="number">
                                                {stats.totalScores}
                                            </span>
                                        </div>
                                        <div className="r-row mb-2">
                                            <span className="text">Grade</span>
                                            <span className="number">
                                                {stats.grade}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="right-part">
                                    <div className="chart-parent">
                                        <PieChart
                                            colors={[
                                                "orange",
                                                "rgb(114, 204, 255)",
                                                "rgb(218, 0, 255)",
                                            ]}
                                            width={400}
                                            height={200}
                                            series={[
                                                {
                                                    data: [
                                                        {
                                                            id: 0,
                                                            value: stats.correct,
                                                            label: "Correct",
                                                        },
                                                        {
                                                            id: 1,
                                                            value: stats.wrong,
                                                            label: "Wrong",
                                                        },
                                                        {
                                                            id: 2,
                                                            value: stats.skipped,
                                                            label: "Skipped",
                                                        },
                                                    ],
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Result;
