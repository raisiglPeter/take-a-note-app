import { useState } from "react";
import { AuthForm } from "../components/ui/AuthForm";
import TextLines from "../components/ui/TextLines";
import ButtonSwitch from "../components/ui/ButtonSwitch";

import "./AuthPage.css";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="authPage">
      <div className="authPage-left">
        <ButtonSwitch
          leftLabel="Login"
          rightLabel="Signup"
          isRightActive={isSignUp}
          onToggle={(val) => setIsSignUp(val)}
        />
        <AuthForm signup={isSignUp} />
      </div>

      <div className="authPage-right">
        <div className="authPage-right-text">
          <h3 className="authPage-right-heading">Take-a-Note</h3>
          <TextLines />
        </div>
      </div>
    </div>
  );
}
