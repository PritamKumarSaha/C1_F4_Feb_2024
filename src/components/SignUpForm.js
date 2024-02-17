import { useState } from "react";

const SignUpForm = () => {
  console.log("App render");
  // useState value to handle inputs.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // useState value to handle validation error.
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  // function to handle email input.
  const handleEmailInput = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(emailRegex.test(inputValue));
  };

  // function to handle password input.
  const handlePasswordInput = (e) => {
    const inputValue = e.target.value.trim();
    setPassword(inputValue);
    setValidPassword(inputValue.length >= 8);
  };

  // function to handle Confirm password input.
  const handleConfirmPasswordInput = (e) => {
    const inputValue = e.target.value.trim();
    setConfirmPassword(inputValue);
    setValidConfirmPassword(password === inputValue);
  };

  // submit event function to handle form submittion.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validEmail && validConfirmPassword && validPassword) {
      alert("Form submitted successfully!");
    } else alert("Form cannot be submitted!");
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      {/* Email input section */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          style={{ borderColor: validEmail ? "green" : "red" }}
          onChange={handleEmailInput}
          type="email"
          id="email"
          name="email"
          value={email}
        />
        {!validEmail && <p className="error-msg">Invalid email format</p>}
      </div>
      {/* Password input section */}
      <div>
        <label htmlFor="password">Password:</label>
        <input
          style={{ borderColor: validPassword ? "green" : "red" }}
          onChange={handlePasswordInput}
          type="password"
          id="password"
          name="password"
          value={password}
        />
        {!validPassword && (
          <p className="error-msg">Password must be at least 8 charactors</p>
        )}
      </div>

      {/* confirm password input section */}
      <div>
        <label htmlFor="cpwd">Confirm Password:</label>
        <input
          style={{ borderColor: validConfirmPassword ? "green" : "red" }}
          onChange={handleConfirmPasswordInput}
          type="password"
          id="cpwd"
          name="cpwd"
          value={confirmPassword}
        />
        {!validConfirmPassword && (
          <p className="error-msg">Passwords do no match</p>
        )}
      </div>
      <button className="signup-btn">Sign Up</button>
    </form>
  );
};

export default SignUpForm;