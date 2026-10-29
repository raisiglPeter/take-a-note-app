import { useEffect, useState } from "react";
import { AuthForm } from "../components/ui/AuthForm";
import TextLines from "../components/ui/TextLines";
import ButtonSwitch from "../components/ui/ButtonSwitch";

import "./AuthPage.css";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [numOfLines, setNumOfLines] = useState(9);

  useEffect(() => {
    const updateLines = () => {
      // If width is under a tablet/mobile breakpoint (e.g., 768px)
      if (window.innerWidth <= 820) {
        setNumOfLines(3);
      } else {
        setNumOfLines(9); // Your desktop count
      }
    };

    updateLines(); // Check on initial load
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

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
          <h3>Take-a-Note</h3>
          <TextLines numOfLines={numOfLines} />
        </div>
      </div>
    </div>
  );
}
