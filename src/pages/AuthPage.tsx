// src/pages/AuthPage.tsx
import { useState, type SyntheticEvent } from "react";
import toast from "react-hot-toast";
import { handleApiError } from "../utils/handleApiError";
import { supabase } from "../lib/supabaseClient";

import "./AuthPage.css";
import Button from "../components/ui/Button";
import Spinner from "../components/ui/Spinner";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      toast.success("Successfully logged in!");
    } catch (error: unknown) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      toast.success("Check your email for confirmation!");
    } catch (error) {
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

          {loading ? (
            <Spinner />
          ) : (
            <div className="signUpButtons">
              <Button type="submit" disabled={loading}>
                {loading ? "Processing..." : "Log In"}
              </Button>
              <Button
                type="button"
                onClick={handleSignUp}
                disabled={loading}
                variant="secondary"
              >
                {loading ? "Processing..." : "Sign Up"}
              </Button>
            </div>
          )}
        </form>
      </div>

      <div className="authPage-right">
        <div className="authPage-right-text">
          <h3>Take-a-Note</h3>
          <p>Take some notes.</p>
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
