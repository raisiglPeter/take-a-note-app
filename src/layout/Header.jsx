import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPalette } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Search from "../components/Search";

export default function Header() {
  return (
    <header className="h-12 flex justify-center items-center p-4">
      <Search />
    </header>
  );
}
