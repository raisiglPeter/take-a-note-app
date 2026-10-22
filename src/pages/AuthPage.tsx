// src/pages/AuthPage.tsx
import { useState, type FormEvent } from "react";
import toast from "react-hot-toast";
import { handleApiError } from "../utils/handleApiError";
import { supabase } from "../lib/supabaseClient";

import "./AuthPage.css";
import Button from "../components/ui/Button";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;

        toast.success("Check your email for confirmation!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;

        toast.success("Successfully logged in!");
      }
    } catch (error: unknown) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="authPage">
      <div className="authPage-left">
        <form onSubmit={handleSubmit}>
          <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="signUpButtons">
            {/* Primary Submit Button */}
            <Button type="submit" disabled={loading}>
              {loading
                ? "Processing..."
                : isSignUp
                  ? "Create Account"
                  : "Log In"}
            </Button>

            {/* Switch Mode Button */}
            <Button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
              }}
              disabled={loading}
            >
              {isSignUp ? "Switch to Log In" : "Switch to Sign Up"}
            </Button>
          </div>
        </form>
      </div>

      <div className="authPage-right">
        <h3>Take-a-Note</h3>
        <p>Your privacy-focused markdown notes & daily progress tracker.</p>
      </div>
    </div>
  );
}
