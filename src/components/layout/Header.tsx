import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import { handleApiError } from "../../utils/handleApiError";
import Button from "../ui/Button";

import "./Header.css";
import Spinner from "../ui/Spinner";

export default function Header() {
  const { signOut } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await signOut();
      toast.success("Signed Out Successfully!");
    } catch (error: unknown) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header>
      <div className="headerLeft">Menu</div>
      <div className="headerRight">
        <Button disabled={loading} onClick={handleSignOut}>
          {loading ? <Spinner size="2em" /> : "Sign Out"}
        </Button>
      </div>
    </header>
  );
}
