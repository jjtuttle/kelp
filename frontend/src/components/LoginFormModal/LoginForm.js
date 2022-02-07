import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';
import sideIllustrationImg from '../../images/yelp-signup-illustration.png' 
import whiteLogo from '../../logos/yelp-logo.png'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
     <div className="header">
          <div className="header-info">Kelp<img src={whiteLogo} className="white-logo"></img></div>
        </div>
      
      <div className="illustration-column">
        <div className="image">
          <img src={sideIllustrationImg} alt="illustration art" className="image" />
        </div>
      </div>
      <div className="modal-column">
        <form onSubmit={handleSubmit}>
          <div className="display-errors">
            <ul>
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>


          <h4>Log in to Kelp</h4>
          <p className="login-info">
            New to Yelp? [SIGN UP] By logging in, you agree to Kelp’s [TERMS OF SERVICE] and [PRIVACY POLICY].
          </p>
          <div className="third-party-logins">
            <div className="facebook">
              <button className="facebook-btn" onClick={(e) => e.preventDefault.default()}>Continue with Facebook</button>
            </div>
            <div className="google">
              <button className="google-btn">Continue with Google</button>
            </div>
            <div className="apple">
              <button className="apple-btn">Continue with Apple</button>
            </div>
          </div>
          <div className="or">
            <span>------ OR ------</span>
          </div>

          <div className="login-container">
            <div >
              <input className="user-input"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
                placeholder="Email"
              />
            </div>
            <div >
              <input className="password-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
              />
              <div className="forgot-password">
                <a href="http://localhost:3000/">Forgot password?</a>
              </div>
            </div>
            <div>
              <button className="login-btn"
                type="submit">Log In</button>
            </div>
            <div className="sign-up">
              <span>New to Kelp? [SIGN UP]</span>
            </div>
          </div>

          <div className="footer" style={{ 'backgroundColor': '#F0F0F0' }}>
            <div className="about-column">
              <span>About</span>
            </div>
            <div className="discover-column">
              <span>Discover</span>
            </div>
            <div className="kelp-business-column">
              <span>Kelp for Business</span>
            </div>
            <div className="language-column">
              <span>Language</span>
              <div className="country">
                <span>Countries</span>
              </div>
            </div>
            
          </div>
  <div className="copyright">
              <span>Copyright © 2004–2022 Kelp Inc. [KELP & LOGO], [LOGO] burst and related marks are registered trademarks of Kelp.</span>
            </div>

        </form>
      </div>

    </>
  );
}

export default LoginForm;