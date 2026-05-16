import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPalette } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Search from "../components/Search";

export default function Header({ onMenuToggle, onThemeToggle }) {
  return (
    <header className="h-fit flex justify-between items-center p-4 bg-blue-light text-text-dark">
      <Button onClick={onMenuToggle}>
        <FontAwesomeIcon icon={faList} className="text-xl" />
      </Button>
      <Search />
      <Button onClick={onThemeToggle}>
        <FontAwesomeIcon icon={faPalette} className="text-xl" />
      </Button>
    </header>
  );
}
