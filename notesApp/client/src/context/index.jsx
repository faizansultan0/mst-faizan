import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [state, setState] = useState({
        user: {},
        token: "",
    });

    let navigate = useNavigate();

    useEffect(() => {
        // console.log(JSON.parse(window.localStorage.getItem('auth')))
        setState(JSON.parse(window.localStorage.getItem("auth")));
    }, []);

    const token = state && state.token ? state.token : "";
    axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Adding response interceptor
    useEffect(() => {
        axios.interceptors.response.use(
            (res) => {
                return res;
            },
            (err) => {
                let res = err.response;
                if (
                    res.status === 401 &&
                    res.config &&
                    !res.config._isRetryRequest
                ) {
                    setState({});
                    window.localStorage.removeItem("auth");
                    navigate("/signin");
                }

                return Promise.reject(err);
            }
        );
    });

    return (
        <UserContext.Provider value={[state, setState]}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };
