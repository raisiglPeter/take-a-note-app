import OpenSidebar from "@/components/OpenSidebar";
import Search from "./Search";
import Avatar from "./Avatar";

function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-base-200 px-4 gap-4">
      <div className="navbar-start w-auto shrink-0">
        <OpenSidebar />
      </div>
      <div className="navbar-center hidden md:flex md:flex-1 max-w-2xl mx-auto w-full">
        <div className="w-full">
          <Search />
        </div>
      </div>
      <div className="navbar-start w-auto shrink-0">
        <Avatar
          imageUrl={
            "https://img.daisyui.com/images/profile/demo/distracted2@192.webp"
          }
          maskType={"squircle"}
        />
      </div>
    </div>
  );
}

export default NavBar;
