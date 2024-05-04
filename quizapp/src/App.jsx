import { useEffect, useState } from "react";
import questions from "./data/questions";
import QuizItem from "./components/quizItem/quizItem";
import StartCard from "./components/startCard/startCard";
import Result from "./components/result/result";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material";
import "./App.css";

function App() {
    const [cIndex, setCIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [result, setResult] = useState(Array(questions.length).fill(null));
    const [qStarted, setQStarted] = useState(false);
    const [qEnded, setQEnded] = useState(false);
    const [startTime, setStartTime] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [dOpened, setDOpened] = useState(false);

    // Timer Handles
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
        const interval = setInterval(() => {
            if (!qEnded) setCurrentTime(Date.now());
        }, 100);

        return () => clearInterval(interval);
    }, [startTime, qEnded]);

    // Qestions Handles
    const nextHandle = (selected) => {
        const nextResult = result.slice();
        if (selected === questions[cIndex].correctOption) {
            nextResult[cIndex] = 1;
        } else {
            nextResult[cIndex] = -1;
        }
        setResult(nextResult);
        if (cIndex === questions.length - 1) {
            setCompleted(true);
            return;
        }
        setCIndex(cIndex + 1);
    };

    const prevHandle = () => {
        setCIndex(cIndex - 1);
    };

    const skipHandle = () => {
        const nextResult = result.slice();
        nextResult[cIndex] = 0;
        setResult(nextResult);
        if (cIndex === questions.length - 1) {
            setCompleted(true);
            return;
        }
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
        setCompleted(false);
        const nextResult = Array(questions.length).fill(null);
        setResult(nextResult);
        setDOpened(false);
    };

    const formatTime = (time) => {
        let sec = Math.floor(time / 1000);
        let min = Math.floor(sec / 60);
        return `${min} : ${sec % 60}`;
    };

    const handleClose = () => {
        setDOpened(true);
    };

    const onDClose = () => {
        setDOpened(false);
    };

    // If user tries to reload or close tab during or after quiz
    
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (qStarted || qEnded) {
                event.preventDefault();
                event.returnValue = ""; // For older browsers
                return (event.returnValue =
                    "Are you sure you want to leave? All your progress will be lost.");
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <div className="app">
            <div className="app-parent">
                {/* Close Button */}
                {(qStarted || qEnded) && (
                    <div className="close-btn-div">
                        <button className="close-btn btn" onClick={handleClose}>
                            X
                        </button>
                    </div>
                )}

                {/* Close Dialog */}
                <Dialog
                    open={dOpened}
                    // onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            If you quit this quiz, your marked data would be
                            lost in this case
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={playAgainHandle}>Quit</Button>
                        <Button onClick={onDClose} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Timer */}
                {startTime && !endTime && (
                    <div className="btn mb-3 time-btn">
                        Time : {formatTime(currentTime - startTime)}
                    </div>
                )}

                {/* Start Card */}
                {!qStarted && <StartCard startHandle={startHandle} />}

                {/* Quiz Questions */}
                {qStarted && !qEnded && (
                    <QuizItem
                        question={questions[cIndex]}
                        questionNo={cIndex + 1}
                        nextHandle={nextHandle}
                        prevHandle={prevHandle}
                        skipHandle={skipHandle}
                        submitHandle={submitHandle}
                        isCompleted={completed}
                    />
                )}

                {/* Result Card */}
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
