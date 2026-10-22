import toast from "react-hot-toast";
import { HttpError } from "../errors/httpErrors";

export function handleApiError(error: unknown): void {
  console.error("[API error]:", error);

  if (error instanceof HttpError) {
    toast.error(error.message);
    return;
  }

  if (error instanceof Error) {
    toast.error(error.message);
    return;
  }

  toast.error("An unexpected error occured. Please try again.");
}
