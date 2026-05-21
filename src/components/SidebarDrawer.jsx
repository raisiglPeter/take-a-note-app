import TagList from "@/components/TagList";
import { getUniqueTags } from "../utils/tagUtils.js";

function SidebarDrawer({ data, children }) {
  const tags = getUniqueTags(data);

  return (
    <div className="drawer h-screen w-full overflow-hidden">
      {/* Invisible toggle controller */}
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col h-full w-full relative">
        {children}
      </div>

      {/* The slide-out side sheet tray */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
        <div className="bg-base-100 min-h-full w-72 p-4 border-r border-base-200 flex flex-col gap-2">
          <h2 className="text-xl font-bold px-2 py-1 text-primary">
            Thinkboard
          </h2>
          <div className="divider my-1"></div>

          {/* VERTICAL SIDEBAR */}
          <div className="flex flex-col gap-2 w-full justify-start items-stretch">
            <input
              className="btn justify-start text-left px-4"
              type="radio"
              name="sidebar-tags"
              aria-label="All Notes"
              defaultChecked
            />
            <div className="flex flex-col gap-2 w-full [&>input]:justify-start [&>input]:text-left [&>input]:px-4">
              <TagList tags={tags} groupName="sidebar-tags" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarDrawer;
