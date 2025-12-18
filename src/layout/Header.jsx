import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPalette } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";

export default function Header({ onMenuToggle, onThemeToggle }) {
  return (
    <header className="h-fit flex justify-between items-center p-4 bg-blue-light text-text-dark">
      <Button onClick={onMenuToggle}>
        <FontAwesomeIcon icon={faList} className="text-xl" />
      </Button>

      <p className="font-bold text-lg select-none">Take-A-Note</p>

      <Button onClick={onThemeToggle}>
        <FontAwesomeIcon icon={faPalette} className="text-xl" />
      </Button>
    </header>
  );
}
