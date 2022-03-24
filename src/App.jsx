import { useState } from "react";
import "./App.css";

/**
 * Challenge: Connect the form to local state
 *
 * 1. Create a state object to store the 4 values we need to save.
 * 2. Create a single handleChange function that can
 *    manage the state of all the inputs and set it up
 *    correctly
 * 3. When the user clicks "Sign up", check if the
 *    password & confirmation match each other. If
 *    so, log "Successfully signed up" to the console.
 *    If not, log "passwords to not match" to the console.
 * 4. Also when submitting the form, if the person checked
 *    the "newsletter" checkbox, log "Thanks for signing
 *    up for our newsletter!" to the console.
 */
export default function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSubscribed: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const { password, confirmPassword, isSubscribed } = formData;
    password === confirmPassword
      ? console.log("Successfully signed up")
      : console.error("Passwords does not match");
    isSubscribed &&
      password === confirmPassword &&
      console.log("Thanks for signing up for our newsletter!");
  }
  function handleChange(event) {
    const { name, type, checked, value } = event.target;
    // estas propiedades las desestructuramos del event.target porque nos interesa conocer
    // qué objeto ha hecho click y que valor o check tiene almacenado
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="form--input"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="form--input"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <div className="form--marketing">
          <input
            id="okayToEmail"
            type="checkbox"
            name="isSubscribed"
            onChange={handleChange}
            checked={formData.isSubscribed}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">Sign up</button>
      </form>
    </div>
  );
}
