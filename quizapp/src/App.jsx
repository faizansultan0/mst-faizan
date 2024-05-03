import { useEffect, useState } from "react";
import questions from "./data/questions";
import QuizItem from "./components/quizItem/quizItem";
import StartCard from "./components/startCard/startCard";
import Result from "./components/result/result";
import "./App.css";

function App() {
    const [cIndex, setCIndex] = useState(0);
    const [result, setResult] = useState(Array(questions.length).fill(null));
    const [qStarted, setQStarted] = useState(false);
    const [qEnded, setQEnded] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const startTimer = () => {
        setStartTime(Date.now());
    };

    const endTimer = () => {
        setEndTime(Date.now());
    };

    const startHandle = () => {
        setQStarted(true);
        startTimer();
    };

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(Date.now());
        }, 100);
    }, [startTime]);

    const nextHandle = (selected) => {
        const nextResult = result.slice();
        if (selected === questions[cIndex].correctOption) {
            nextResult[cIndex] = 1;
        } else {
            nextResult[cIndex] = -1;
        }
        setResult(nextResult);
        setCIndex(cIndex + 1);
    };

    const prevHandle = () => {
        setCIndex(cIndex - 1);
    };

    const skipHandle = () => {
        const nextResult = result.slice();
        nextResult[cIndex] = 0;
        setResult(nextResult);
        setCIndex(cIndex + 1);
    };

    const submitHandle = () => {
        endTimer();
        setQEnded(true);
    };

    const playAgainHandle = () => {
        setStartTime(null);
        setCurrentTime(null);
        setEndTime(null);
        setCIndex(0);
        setQEnded(false);
        setQStarted(false);
        const nextResult = Array(questions.length).fill(null);
        setResult(nextResult);
    }

    const formatTime = (time) => {
        let sec = Math.floor(time / 1000);
        let min = Math.floor(sec / 60);
        return `${min} : ${sec % 60}`;
    };

    return (
        <div className="app">
            <div className="app-parent">
                {startTime && !endTime && (
                    <div className="btn mb-3 time-btn">
                        Time : {formatTime(currentTime - startTime)}
                    </div>
                )}
                {!qStarted && <StartCard startHandle={startHandle} />}
                {qStarted && !qEnded && (
                    <QuizItem
                        question={questions[cIndex]}
                        questionNo={cIndex + 1}
                        lastQuestion={questions.length}
                        nextHandle={nextHandle}
                        prevHandle={prevHandle}
                        skipHandle={skipHandle}
                        submitHandle={submitHandle}
                    />
                )}
                {qEnded && endTime && startTime && (
                    <Result
                        timeTaken={formatTime(endTime - startTime)}
                        result={result}
                        playAgainHandle={playAgainHandle}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
