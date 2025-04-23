import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Show popup
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {/* Left Side - Login Form */}
        <div className="login-left"><br /><br />
          <div className="avatar">
            <svg width="40" height="40" fill="#00ffff" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path d="M8 9a5 5 0 0 0-5 5v0.5a0.5 0.5 0 0 0 0.5 0.5h9a0.5 0.5 0 0 0 0.5-0.5V14a5 5 0 0 0-5-5z"/>
            </svg>
          </div>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <div className="form-footer">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot your password?</a>
            </div>
          </form>
        </div>
        {/* Right Side - Welcome Section */}
        <div className="login-right">
          <nav className="nav-bar">
            <a href="#">About</a>
            <a href="#">Download</a>
            <a href="#">Pricing</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
            <button className="sign-in">Sign In</button>
            <div className="menu-icon">&#9776;</div>
          </nav>
          <div className="welcome-message">
            <h1>Welcome.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac neque eu risus volutpat iaculis.</p>
            <p>Not a member? <a href="#">Sign up now</a></p>
          </div>
        </div>
        {/* Success Popup */}
        {showPopup && (
          <div className="popup-success">
            ✅ Login Successful! Welcome, <strong>{username}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
