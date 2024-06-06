import { useState } from "react";
import "./Login.scss";
import { loginUser } from "../../Utils/Authentication";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../../components/Logo/Logo";
interface User {
    email: string;
    password: string;
}
function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (e: any) => {
        e.preventDefault();
        if (email !== "" || password !== "") {
            const obj: User = {
                email,
                password,
            };

            console.log(obj);
            loginUser(obj, navigate, dispatch);
        }
    };
    return (
        <div className="authpage">
            <div className="welcome-div">
                <div className="welcome-text">Welcome to</div>
                <div className="auth-logo">
                    <Logo />
                </div>
                <div className="tagline">
                    We help you track your organisations metrics as per the ESG
                    Guidelines
                </div>
                <div className="get-in-touch">
                    <span>Sounds Interesting?</span>
                    <a href="/">Get in touch!</a>
                </div>
            </div>
            <div className="auth-div">
                <img
                    className="globeImage"
                    src="/images/globe-logo.png"
                    alt=""
                />
                <div className="auth-box">
                    <div className="heading-div">
                        <div className="heading">Login</div>
                        <div className="subtext">
                            Enter your registered Email ID to continue
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-div">
                            <div className="input-heading">
                                <span>Email</span>
                                <span className="required"> *</span>
                            </div>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Your Email ID"
                            />
                        </div>
                        <div className="input-div">
                            <div className="input-heading">
                                <span>Password</span>
                                <span className="required"> *</span>
                            </div>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="external-auth-container">
                        <div className="external-auth-div">
                            <img
                                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                                alt=""
                            />
                            <span className="external-auth-text">
                                Sign up with Google
                            </span>
                        </div>
                        <div className="external-auth-div">
                            <img src="/images/x-logo.png" alt="" />
                            <span className="external-auth-text">
                                Sign up with X
                            </span>
                        </div>
                    </div>
                    <div className="submit-div">
                        <div className="contact-us">
                            <span>Having trouble logging in? </span>
                            <a href="/" className="contact-us-anchor">
                                Contact Us
                            </a>
                        </div>
                        <button
                            onClick={(e) => {
                                handleLogin(e);
                            }}
                        >
                            Continue
                        </button>
                    </div>
                    <div className="signup-link">
                        <p>Don't Have a Account ... ?</p>
                        <Link className="link" to={"/signup"}>
                            {" "}
                            Signup{" "}
                        </Link>
                    </div>
                </div>
            </div>

            {/* {status === "loading" && <Loading />} */}
        </div>
    );
}

export default SignIn;
