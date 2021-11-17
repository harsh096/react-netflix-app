import "./register.scss";
import { useState, useRef } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleGetStartedClick = () => {
    setEmail(emailRef.current.value);
  };

  const handleLoginClick = () => {
    setPassword(passwordRef.current.value);
  };

  //   console.log(email);
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="signInButton">Sign In</button>
        </div>
      </div>
      <div className="info">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {!email ? (
          <div className="inputContainer">
            <input
              className="input"
              type="text"
              placeholder="Email Address"
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="inputContainer">
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              ref={passwordRef}
            />
            <button className="loginButton" onClick={handleLoginClick}>
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
