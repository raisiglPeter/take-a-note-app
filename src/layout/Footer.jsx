import Button from "../components/Button";
import Search from "../components/Search";

export default function Footer() {
  return (
    <footer className="fixed left-0 w-full bottom-0 flex justify-center items-center p-4 gap-4 h-16 bg-base-100 md:hidden ">
      <Button>+</Button>
      <Search />
    </footer>
  );
}
