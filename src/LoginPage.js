import React, { useState } from 'react';
import './LoginPage.css';

export default function LoginPage({ registeredUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === registeredUser.username && password === registeredUser.password) {
      setShowPopup(true);
      setError('');
      setTimeout(() => setShowPopup(false), 3000);
    } else {
      setError('Invalid credentials!');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
        {showPopup && (
          <div className="popup-success">
            ✅ Login Successful! Welcome, <strong>{username}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
