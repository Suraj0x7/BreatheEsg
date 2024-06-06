import { useState } from "react";
import Logo from "../../components/Logo/Logo";
import "../SignIn/Login.scss";
import { signupUser } from "../../Utils/Authentication";
import { Link, useNavigate } from "react-router-dom";

interface User {
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Signup() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleSignup = (e: any) => {
        e.preventDefault();

        if (email !== "" || password !== "" || confirmPassword !== "") {
            const obj: User = {
                email,
                password,
                confirmPassword,
            };

            console.log(obj);
            signupUser(obj, navigate);
        }
    };
    return (
        <div className="authpage">
            <div className="welcome-div">
                <div className="welcome-text">Welcome to</div>
                <div className="auth-logo">{<Logo />}</div>
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
                        <div className="heading">Sign Up</div>
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
                        <div className="input-div">
                            <div className="input-heading">
                                <span>Confirm Password</span>
                                <span className="required"> *</span>
                            </div>
                            <input
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="submit-div">
                        <button
                            onClick={(e) => {
                                handleSignup(e);
                            }}
                        >
                            Continue
                        </button>
                    </div>
                    <div className="signup-link">
                        <p>Already Have a Account ... ?</p>
                        <Link className="link" to={"/login"}>
                            {" "}
                            SignIn{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
