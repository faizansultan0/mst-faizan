import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const UserRoute = ({children}) => {
    const [ok, setOK] = useState(false);
    const [state] = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        const getCurrentUser = async () => {
            try {
                const { data } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/user/current-user`
                );
                if (data.ok) {
                    setOK(true);
                } else {
                    navigate('/signin');
                }

            } catch (err) {
                console.log('Get Current User Error: ', err);
            }
        }

        if (state && state.token) getCurrentUser();
    }, [state])

    state === null && setTimeout(() => {
        navigate('/signin')
        toast.error('Session Expired');
    }, 1000)

    return (ok ? (
        <>
            {children}
        </>
    ) : (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner role='status' className='text-success' animation="border" />
            </div>
    ))
}

export default UserRoute;