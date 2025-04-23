import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // custom CSS styles

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login logic here
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="login-container row w-100">
        <div className="col-md-6 login-left d-flex flex-column align-items-center justify-content-center p-4">
          <div className="avatar bg-light text-dark">👤</div>
          <input type="text" className="form-control mb-3" placeholder="User ID" />
          <input type="password" className="form-control mb-3" placeholder="Password" />
          <button className="btn btn-custom mb-3" onClick={handleLogin}>
            Login
          </button>
          <div className="form-footer d-flex justify-content-between w-100">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <div className="col-md-6 login-right p-4">
          <div className="nav-bar d-flex">
            <a href="#">Home</a>
            <a href="#">About</a>
            <button className="sign-in">Sign Up</button>
          </div>
          <div className="welcome-message mt-5">
            <h1>Welcome Back!</h1>
            <p>Login to continue exploring awesome features</p>
          </div>
        </div>
      </div>

      {showPopup && <div className="popup-success">Login Successful!</div>}
    </div>
  );
}
