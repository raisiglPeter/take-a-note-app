import Search from "../components/Search";
import OpenSidebar from "../components/OpenSidebar";
import NavBar from "@/components/NavBar";

export default function Header() {
  return (
    // <header className="min-h-12 flex justify-between items-center p-4 bg-amber-500">
    //   <OpenSidebar />
    //   <div className="lg:hidden">
    //     <Search />
    //   </div>
    // </header>
    <header>
      <NavBar />
    </header>
  );
}
