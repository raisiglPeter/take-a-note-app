import toast from "react-hot-toast";

export function handleApiError(error: unknown): void {
  console.error("[API error]:", error);

  // capture js errors and supabase errors into message
  let message: string;

  // normal error
  if (error instanceof Error) {
    message = error.message;
  } else if (
    // supabase error
    typeof error === "object" &&
    error !== null &&
    "message" in error
  ) {
    message = String((error as { message: unknown }).message);
  } else {
    // unknown error
    message = "Unexpected error.";
  }

  toast.error(message);
}
