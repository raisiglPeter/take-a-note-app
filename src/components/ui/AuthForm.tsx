import { useState, type SyntheticEvent } from "react";
import toast from "react-hot-toast";
import { handleApiError } from "../../utils/handleApiError";
import { loginUser, signUpUser } from "../../services/authService";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";

import "./AuthForm.css";

type AuthFormProps = {
  signup?: boolean;
};

export function AuthForm({ signup = false }: AuthFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (signup) {
        await signUpUser(email, password, firstName, lastName);
        toast.success("Check your email for confirmation!");
      } else {
        await loginUser(email, password);
        toast.success("Logged In!");
      }
    } catch (error: unknown) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      {signup && (
        <>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </>
      )}

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
        <Button type="submit" disabled={loading}>
          {loading ? <Spinner size="2em" /> : signup ? "Sign Up" : "Log In"}
        </Button>
      </div>
    </form>
  );
}
