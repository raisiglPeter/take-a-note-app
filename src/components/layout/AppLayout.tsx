import Header from "./Header";
import Main from "./Main";

import "./AppLayout.css";
import Spinner from "../ui/Spinner";

export default function AppLayout() {
  return (
    <div className="appLayout">
      <Header />
      <Spinner width="50px" height="50px" />
      <Main />
    </div>
  );
}
