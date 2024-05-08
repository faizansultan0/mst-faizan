import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./verifyMail.css";

const VerifyMail = () => {
    const [successMsg, setSuccessMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [reqSent, setReqSent] = useState(false);
    const { id, token } = useParams();

    useEffect(() => {
        const verify = async () => {
            try {
                setSuccessMsg('');
                setErrMsg('');
                if (!id || !token || reqSent) {
                    return;
                }
                const { data } = await axios.get(
                    `${process.env.REACT_APP_SERVER_URL}/user/${id}/verify/${token}`
                );
                // console.log(data);
                if (data.error) {
                    setSuccessMsg('');
                    setErrMsg(data.error);
                } else {
                    setErrMsg('');
                    setSuccessMsg(data.message);
                    setReqSent(true);
                }
            } catch (err) {
                console.log("Error occured while verifying mail: ", err);
                setSuccessMsg('');
                setErrMsg("An error occurred. Please try again later.");
            }
        };

        verify();
    }, [id, token, reqSent]);
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
