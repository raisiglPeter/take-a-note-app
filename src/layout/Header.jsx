import Search from "../components/Search";
import OpenSidebar from "../components/OpenSidebar";

export default function Header() {
  return (
    <header className="min-h-12 flex justify-between items-center p-4 bg-amber-500">
      <OpenSidebar />
      <Search />
    </header>
  );
}
