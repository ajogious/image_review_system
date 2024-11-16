import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setAdminLoggedIn, isAdminLoggedIn }) {
  const [showModal, setShowModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: "", password: "" };

    if (!loginForm.username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }
    if (!loginForm.password.trim()) {
      newErrors.password = "Password is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // For simulation purposes, assuming the username "admin" and password "admin123"
      if (loginForm.username === "admin" && loginForm.password === "admin123") {
        setAdminLoggedIn(true);
        setShowModal(false);
      } else {
        setErrors({ username: "Invalid credentials", password: "" });
      }
      setLoginForm({ username: "", password: "" });
    }
  };

  return (
    <div className="header">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div>
            <Link className="navbar-brand" to="/">
              Logo
            </Link>
            <Link className="nav-home pe-3" to="/">
              Home
            </Link>
            {isAdminLoggedIn && (
              <Link className="nav-admin" to="/add-image">
                Add Image
              </Link>
            )}
          </div>
          {!isAdminLoggedIn ? (
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Login
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => setAdminLoggedIn(false)}
            >
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Overlay */}
      {showModal && <div className="modal-overlay"></div>}

      {/* Login Modal */}
      {showModal && (
        <div className="modal show d-block" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Admin Login</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.username ? "is-invalid" : ""
                      }`}
                      id="username"
                      value={loginForm.username}
                      onChange={(e) =>
                        setLoginForm({
                          ...loginForm,
                          username: e.target.value,
                        })
                      }
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username}</div>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className={`form-control ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      id="password"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm({
                          ...loginForm,
                          password: e.target.value,
                        })
                      }
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
