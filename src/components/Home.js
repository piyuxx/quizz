
import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';


const Home = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [signedUp, setSignedUp] = useState(false);

    const handleShowLoginForm = () => {
        setShowLoginForm(true);
        setShowSignUpForm(false);
    };

    const handleShowSignUpForm = () => {
        setShowSignUpForm(true);
        setShowLoginForm(false);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // Handle login form submission
        console.log('Login form submitted');
        setLoggedIn(true);
    };

    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        // Handle sign up form submission
        console.log('Sign up form submitted');
        setSignedUp(true);
    };

    const handleCancel = () => {
        setShowLoginForm(false);
        setShowSignUpForm(false);
    };

    return (
        <Fragment>
            <Helmet><title>Home - Quiz App</title></Helmet>
            <div id="home">
                <section>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-cube-outline cube"></span>
                    </div>
                    <h1>Quiz App</h1>
                    <div className="play-button-container">
                        <ul>
                            <li><Link className="play-button" to="/play/instructions">Play</Link></li>
                        </ul>
                    </div>
                    <div className="auth-container">
                        <button onClick={handleShowLoginForm} className="auth-buttons" id="login-button">
                            Login
                        </button>
                        <button onClick={handleShowSignUpForm} className="auth-buttons" id="signup-button">
                            Sign up
                        </button>
                    </div>
                    {showLoginForm && !loggedIn && (
                        <form onSubmit={handleLoginSubmit}>
                            <h2>Login</h2>
                            <div>
                                <label htmlFor="login-email">Email</label>
                                <input type="email" id="login-email" name="login-email" required />
                            </div>
                            <div>
                                <label htmlFor="login-password">Password</label>
                                <input type="password" id="login-password" name="login-password" required />
                            </div>
                            <div>
                                <button type="submit">Login</button>
                                <button type="button" onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    )}
                    {showSignUpForm && !signedUp && (
                        <form onSubmit={handleSignUpSubmit}>
                            <h2>Sign up</h2>
                            <div>
                                <label htmlFor="signup-name">Name</label>
                                <input type="text" id="signup-name" name="signup-name" required />
                            </div>
                            <div>
                                <label htmlFor="signup-email">Email</label>
                                <input type="email" id="signup-email" name="signup-email" required />
                            </div>
                            <div>
                                <label htmlFor="signup-password">Password</label>
                                <input type="password" id="signup-password" name="signup-password" required />
                            </div>
                            <div>
                                <label htmlFor="signup-confirm-password">Confirm Password</label>
                                <input type="password" id="signup-confirm-password" name="signup-confirm-password" required />
                            </div>
                            <div>
                                <button type="submit">Sign up</button>
                                <button type="button" onClick={handleCancel}>Cancel</button>
                            </div>
                        </form>
                    )}
                    {loggedIn && (
                        <div className="success-message">
                            <p>Congratulations! You are now logged in.</p>
                            <p><Link to="/play/instructions">Click here to play the game.</Link></p>
                        </div>
                    )}
                    {signedUp && (
                        <div className="success-message">
                            <p>Congratulations! You are now signed up.</p>
                            <p><Link to="/play/instructions">Click here to play the game.</Link></p>
                        </div>
                    )}
                </section>
            </div>
        </Fragment>
    );
};

export default Home;