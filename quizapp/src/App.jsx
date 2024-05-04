import { useEffect, useState, useRef } from "react";
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
import nextAudio from "./assets/audio/next.mp3";
import "./App.css";

function App() {
    const [cIndex, setCIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [result, setResult] = useState(Array(questions.length).fill(null));
    const [qStarted, setQStarted] = useState(false);
    const [qEnded, setQEnded] = useState(false);
    const [currentTime, setCurrentTime] = useState(null);
    const [stopTimer, setStopTimer] = useState(false);
    const [dOpened, setDOpened] = useState(false);
    const [sec, setSec] = useState(0);
    const audioRef = useRef();

    // Timer Handles
    const startHandle = () => {
        setQStarted(true);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!qEnded && !stopTimer) {
                setSec(prevSec => prevSec + 1)
                setCurrentTime(`${Math.floor(sec / 60)} : ${sec % 60}`);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [qEnded, stopTimer, sec]);

    // Qestions Handles
    const nextHandle = (selected) => {
        audioRef.currentTime = 0;
        audioRef.current.play();
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
        setQEnded(true);
    };

    const playAgainHandle = () => {
        setSec(0);
        setStopTimer(false);
        setCurrentTime('0 : 00');
        setCIndex(0);
        setQEnded(false);
        setQStarted(false);
        setCompleted(false);
        const nextResult = Array(questions.length).fill(null);
        setResult(nextResult);
        setDOpened(false);
    };

    const handleClose = () => {
        setStopTimer(true);
        setDOpened(true);
    };

    const onDClose = () => {
        setStopTimer(false);
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
    }, [qStarted, qEnded]);

    return (
        <div className="app">
            <div className="app-parent">
                <audio ref={audioRef} src={nextAudio} />
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
                {qStarted && !qEnded && (
                    <div className="btn mb-3 time-btn">
                        Time : {currentTime}
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
                {qEnded && currentTime && (
                    <Result
                        timeTaken={currentTime}
                        result={result}
                        playAgainHandle={playAgainHandle}
                    />
                )}
            </div>
        </div>
    );
}

export default App;
