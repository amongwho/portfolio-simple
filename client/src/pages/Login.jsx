import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import style from "./Login.module.css";
import { BtnToLandingPage } from "../components/ui/btnToLandingPage.jsx";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("token", data.token);
        navigate("/notes");
      } else {
        const data = await res.json();
        alert(data.msg || "Login failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: signUpEmail, password: signUpPassword }),
      });
      if (res.ok) {
        alert("Account created successfully! Please log in.");
        setShowSignUp(false);
        setSignUpEmail("");
        setSignUpPassword("");
      } else {
        const data = await res.json();
        alert(data.message || "Sign up failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  const closeModal = () => {
    setShowSignUp(false);
    setSignUpEmail("");
    setSignUpPassword("");
  };

  return (
    <>
      <BtnToLandingPage />
      <section className={style.sectionSignIn}>
        <form onSubmit={handleSubmit} className={style.signInForm}>
          <h1>SIGN IN</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input type="submit" value="Login" />
          <input
            type="button"
            onClick={() => setShowSignUp(true)}
            value="Create an Account"
          />
        </form>
      </section>

      {showSignUp && (
        <div className={style.modalBackdrop}>
          <div
            className={style.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h1>SIGN UP</h1>
            <button className={style.closeBtn} onClick={closeModal}>
              ×
            </button>
            <form onSubmit={handleSignUp} className={style.signUpForm}>
              <label htmlFor="signUpEmail">Email</label>
              <input
                type="email"
                name="signUpEmail"
                id="signUpEmail"
                value={signUpEmail}
                onChange={(e) => setSignUpEmail(e.target.value)}
                required
              />

              <label htmlFor="signUpPassword">Password</label>
              <input
                type="password"
                name="signUpPassword"
                id="signUpPassword"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                required
              />

              <input type="submit" value="Sign Up" />
              <input type="button" onClick={closeModal} value="Back to Login" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
