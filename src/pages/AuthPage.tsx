import { useState } from "react";
import { AuthForm } from "../components/ui/AuthForm";

import "./AuthPage.css";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="authPage">
      <div className="authPage-left">
        <div className="authPage-left-tabs">
          <button
            type="button"
            className={`${isSignUp ? "" : "active"} tab-button-left`}
            onClick={() => setIsSignUp(false)}
          >
            Login
          </button>
          <button
            className={`${!isSignUp ? "" : "active"} tab-button-right`}
            type="button"
            onClick={() => setIsSignUp(true)}
          >
            Signup
          </button>
        </div>
        <AuthForm signup={isSignUp} />
      </div>

      <div className="authPage-right">
        <div className="authPage-right-text">
          <h3>Take-a-Note</h3>
        </div>
        <div className="authPage-right-lines">
          {Array.from({ length: 9 }).map((_, index) => {
            return <div key={index} className="authPage-right-line"></div>;
          })}
        </div>
      </div>
    </div>
  );
}
