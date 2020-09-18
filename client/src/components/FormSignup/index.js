import React, { useState } from "react";
import axios from "axios";
import "./formSignup.css";

function FormSignup({ toggleForm }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        retypePassword: ""
    });

    function handleNameChange(e) {
        setFormData({ ...formData, name: e.target.value })
    };

    function handleEmailChange(e) {
        setFormData({ ...formData, email: e.target.value })
    };

    function handlePasswordChange(e) {
        setFormData({ ...formData, password: e.target.value })
    };

    function handleRetypePasswordChange(e) {
        setFormData({ ...formData, retypePassword: e.target.value })
    };

    return (
        <div className="jumbotron form-spacing">
            <form className="form">
                <h1 className="display-4 main-txt signup-login"><strong>Signup</strong></h1>
                <p className="lead main-txt">Create an account and apply today!</p>
                {/* Name input */}
                <label htmlFor="name">Name</label>
                <input
                    className="inputs"
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleNameChange}
                ></input>

                {/* Email input */}
                <label htmlFor="email">Email</label>
                <input
                    className="inputs"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleEmailChange}
                ></input>

                {/* Password input */}
                <label htmlFor="password">Password</label>
                <input
                    className="inputs"
                    type="password"
                    id="password"
                    name="password"
                    onChange={handlePasswordChange}
                ></input>

                {/* Password Confirmation input */}
                <label htmlFor="password">Retype Password</label>
                <input
                    className="inputs"
                    type="password"
                    id="retype-password"
                    name="retype-password"
                    onChange={handleRetypePasswordChange}
                ></input>

                {/* Submit button */}
                <button
                    className="submit-btn btn-submit"
                    type="submit"
                    // onClick={sendEmail}
                >Submit</button>
                <p className="lead signup-login-txt">Already have an account? <button className="text-button" onClick={toggleForm}>
                        Login Here
                    </button>
                </p>
            </form>
            <div className="row-overlay"></div>
        </div>
    )
}


export default FormSignup;