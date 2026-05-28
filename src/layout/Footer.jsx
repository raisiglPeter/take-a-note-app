import Button from "@/components/Button";
import Search from "@/components/Search";

export default function Footer() {
  return (
    /* - absolute bottom-4 left-4 right-4: Floats the bar 1rem off the bottom/edges.
      - z-30: Keeps it safely elevated above your scrolling grid items.
      - rounded-2xl & shadow-xl: Gives it that modern "floating card" material aesthetic.
      - bg-base-100/80 backdrop-blur-md: Makes it semi-translucent so content blurs beneath it.
    */
    <footer className="absolute bottom-4 left-4 right-4 z-30 flex justify-center items-center p-3 gap-3 h-16 bg-base-100/80 backdrop-blur-md rounded-2xl shadow-xl border border-base-200/50 md:hidden">
      <Button className="btn-circle btn-primary shadow-md shrink-0 text-xl font-bold">
        +
      </Button>
      <div className="flex-1 w-full">
        <Search />
      </div>
    </footer>
  );
}
