import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { loginUser, signUpUser } from "../../services/authService";
import { getAuthSchema, type AuthFormData } from "../../types/authFormData";
import { handleApiError } from "../../utils/handleApiError";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import { Input } from "./Input";

import "./AuthForm.css";

type AuthFormProps = {
  signup?: boolean;
};

export function AuthForm({ signup = false }: AuthFormProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(getAuthSchema(signup)),
  });

  const onSubmit: SubmitHandler<AuthFormData> = async (data) => {
    setLoading(true);
    try {
      if (signup) {
        await signUpUser(
          data.email,
          data.password,
          data.firstName!,
          data.lastName!,
        );
        toast.success("Check your email for confirmation!");
      } else {
        await loginUser(data.email, data.password);
        toast.success("Logged In!");
      }
    } catch (err: unknown) {
      const errorCode =
        typeof err === "object" && err !== null && "code" in err
          ? err.code
          : undefined;
      const errorMessage = err instanceof Error ? err.message : "";
      if (
        !signup &&
        (errorCode === "invalid_credentials" ||
          /invalid login credentials/i.test(errorMessage))
      ) {
        setError("password", {
          type: "server",
          message: "Email or password is incorrect.",
        });
      }
      handleApiError(err);
    } finally {
      setLoading(false);
    }
  };

  const onError = () => {
    toast.error("Please fix the highlighted form errors before submitting.");
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
      className="auth-form"
    >
      {signup && (
        <>
          <Input
            type="text"
            placeholder="First name"
            error={errors.firstName?.message}
            {...register("firstName")}
          />

          <Input
            type="text"
            placeholder="Last name"
            error={errors.lastName?.message}
            {...register("lastName")}
          />
        </>
      )}

      <Input
        type="email"
        placeholder="Email"
        error={errors.email?.message}
        {...register("email")}
      />

      <Input
        type="password"
        placeholder="Password"
        error={errors.password?.message}
        {...register("password")}
      />

      <div className="signUpButtons">
        <Button type="submit" disabled={loading} variant="primary" width="full">
          {loading ? <Spinner size="2em" /> : signup ? "Sign Up" : "Log In"}
        </Button>
      </div>
    </form>
  );
}
