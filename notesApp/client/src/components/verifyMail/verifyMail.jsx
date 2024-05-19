import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./verifyMail.css";

const VerifyMail = () => {
    const [successMsg, setSuccessMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const { id, token } = useParams();

    useEffect(() => {
        const verify = async () => {
            try {
                setSuccessMsg('');
                setErrMsg('');
                if (!id || !token) {
                    return;
                }
                const { data } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/user/${id}/verify/${token}`
                );
                if (data.error) {
                    setSuccessMsg('');
                    setErrMsg(data.error);
                } else {
                    setErrMsg('');
                    setSuccessMsg(data.message);
                }
            } catch (err) {
                console.log("Error occured while verifying mail: ", err);
                setSuccessMsg('');
                setErrMsg("An error occurred. Please try again later.");
            }
        };

        verify();
    }, [id, token]);
    return (
        <div className="verify-parent">
            {successMsg && (
                <div className="card">
                    <p className="text-success">
                        {successMsg}
                    </p>
                    <Link to="/login" className="btn">Login</Link>
                </div>
            )}

            {errMsg && (
                <div className="card">
                    <p className="text-danger m-0">{errMsg}</p>
                </div>
            )}
        </div>
    );
};

export default VerifyMail;
