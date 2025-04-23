import React, { useState } from 'react';
import './LoginPage.css';

export default function RegisterPage({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    onRegister({ username, password });
    setRegistered(true);
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
          </form>
          {registered && <div className="popup-success">✅ Registered Successfully!</div>}
        </div>
      </div>
    </div>
  );
}
