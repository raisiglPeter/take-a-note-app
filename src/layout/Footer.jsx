import Button from "../components/Button";
import Search from "../components/Search";

export default function Footer() {
  return (
    <footer className="flex justify-center p-4 gap-4">
      <Button>+</Button>
      <Search></Search>
    </footer>
  );
}
