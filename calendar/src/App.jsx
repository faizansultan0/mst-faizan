import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const monthsDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthStartDay = [0, 3, 4, 0, 2, 5, 1, 3, 6, 1, 4, 1];
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [cmonth, setCmonth] = useState(months[currentMonth]);
    const [tdate] = useState(new Date().getDate());
    const [datesInCMonth, setDatesInCMonth] = useState([]);

    const leftClickHandle = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const rightClickHandle = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    useEffect(() => {
        const newDates = [];
        let j = 0;
        for (
            let i = 0;
            i < monthsDays[currentMonth] + monthStartDay[currentMonth];
            i++
        ) {
            if (i < monthStartDay[currentMonth]) {
                newDates.push(" ");
            } else {
                newDates.push(++j);
            }
        }
        setDatesInCMonth(newDates);
        setCmonth(months[currentMonth]);
        // eslint-disable-next-line
    }, [currentMonth]);

    return (
        <div className="App">
            <div className="App-header">
                <div className="calendar">
                    <div className="c-head">
                        <button
                            className="left-btn btn"
                            onClick={leftClickHandle}
                        >
                            {"<"}
                        </button>
                        <p className="month">{cmonth} 2024</p>
                        <button
                            className="right-btn btn"
                            onClick={rightClickHandle}
                        >
                            {">"}
                        </button>
                    </div>
                    <div className="citems">
                        <span className="citem head">M</span>
                        <span className="citem head">T</span>
                        <span className="citem head">W</span>
                        <span className="citem head">T</span>
                        <span className="citem head">F</span>
                        <span className="citem head">S</span>
                        <span className="citem head">S</span>
                        <br />
                        <br />
                        {datesInCMonth.map((d, i) => (
                            <>
                                <span
                                    className={`citem ${
                                        tdate === d &&
                                        cmonth === months[new Date().getMonth()] ?
                                        'highlighted': ''
                                    }`}
                                    key={i}
                                >
                                    {d}
                                </span>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
