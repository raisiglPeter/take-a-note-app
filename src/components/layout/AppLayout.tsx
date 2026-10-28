import Header from "./Header";
import Main from "./Main";

import "./AppLayout.css";
import Spinner from "../ui/Spinner";

export default function AppLayout() {
  return (
    <div className="appLayout">
      <Header />
      <Main />
    </div>
  );
}
