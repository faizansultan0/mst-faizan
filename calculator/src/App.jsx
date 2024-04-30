import { useState } from "react";
import "./App.css";

function App() {
    const [expression, setExpression] = useState("0");
    const [result, setResult] = useState(0);

    const evaluate = () => {
        try {
            // setResult(eval(expression));
            const operators = {
                "+": (a, b) => a + b,
                "-": (a, b) => a - b,
                "*": (a, b) => a * b,
                "/": (a, b) => a / b,
            };

            const precedence = {
                "+": 1,
                "-": 1,
                "*": 2,
                "/": 2,
            };

            const operatorStk = [];
            const operandStk = [];

            let currentNumber = "";

            for (let i = 0; i < expression.length; i++) {
                const char = expression[i];

                if (!isNaN(parseInt(char))) {
                    console.log(typeof parseInt(char));
                    currentNumber += char;
                }
                if (
                    char === "+" ||
                    char === "-" ||
                    char === "*" ||
                    char === "/"
                ) {
                    if (currentNumber !== "") {
                        operandStk.push(parseInt(currentNumber));
                        currentNumber = "";
                    }
                    while (
                        operatorStk.length > 0 &&
                        precedence[char] <= precedence[operatorStk.length - 1]
                    ) {
                        const operator = operatorStk.pop();
                        const b = operandStk.pop();
                        const a = operandStk.pop();
                        operandStk.push(operators[operator](a, b));
                    }
                    operatorStk.push(char);
                }
            }

            if (currentNumber !== "") {
                operandStk.push(parseInt(currentNumber));
                currentNumber = "";
            }

            while (operatorStk.length > 0) {
                const operator = operatorStk.pop();
                const b = operandStk.pop();
                const a = operandStk.pop();
                operandStk.push(operators[operator](a, b));
            }

            setResult(operandStk.pop());
        } catch (e) {
            alert("Wrong Input");
            setExpression("0");
        }
    };

    return (
        <div className="App">
            <div className="App-header">
                <div className="calculator">
                    <div className="expression">{expression}</div>
                    <div className="result">{result}</div>
                    <div className="bottom-part">
                        <div className="button-row">
                            {/* 7 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "7");
                                    } else {
                                        setExpression("7");
                                    }
                                }}
                            >
                                7
                            </button>

                            {/* 8 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "8");
                                    } else {
                                        setExpression("8");
                                    }
                                }}
                            >
                                8
                            </button>

                            {/* 9 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "9");
                                    } else {
                                        setExpression("9");
                                    }
                                }}
                            >
                                9
                            </button>

                            {/* - Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "-");
                                    } else {
                                        setExpression("-");
                                    }
                                }}
                            >
                                -
                            </button>
                        </div>

                        <div className="button-row">
                            {/* 4 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "4");
                                    } else {
                                        setExpression("4");
                                    }
                                }}
                            >
                                4
                            </button>

                            {/* 5 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "5");
                                    } else {
                                        setExpression("5");
                                    }
                                }}
                            >
                                5
                            </button>

                            {/* 6 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "6");
                                    } else {
                                        setExpression("6");
                                    }
                                }}
                            >
                                6
                            </button>

                            {/* + Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "+");
                                    } else {
                                        setExpression("+");
                                    }
                                }}
                            >
                                +
                            </button>
                        </div>

                        <div className="button-row">
                            {/* 1 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "1");
                                    } else {
                                        setExpression("1");
                                    }
                                }}
                            >
                                1
                            </button>

                            {/* 2 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "2");
                                    } else {
                                        setExpression("2");
                                    }
                                }}
                            >
                                2
                            </button>

                            {/* 3 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "3");
                                    } else {
                                        setExpression("3");
                                    }
                                }}
                            >
                                3
                            </button>

                            {/* * Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "*");
                                    } else {
                                        setExpression("*");
                                    }
                                }}
                            >
                                *
                            </button>
                        </div>

                        <div className="button-row">
                            {/* C Button */}
                            <button
                                className="button green"
                                onClick={() => {
                                    setExpression("0");
                                    setResult("0");
                                }}
                            >
                                c
                            </button>

                            {/* 0 Button */}
                            <button
                                className="button"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "0");
                                    } else {
                                        setExpression("0");
                                    }
                                }}
                            >
                                0
                            </button>

                            {/* / Button */}
                            <button
                                className="button green"
                                onClick={() => {
                                    if (expression !== "0") {
                                        setExpression(expression + "/");
                                    } else {
                                        setExpression("/");
                                    }
                                }}
                            >
                                /
                            </button>

                            {/* = Button */}

                            <button
                                className="button"
                                onClick={() => evaluate()}
                            >
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
