import { getUniqueTags } from "@/utils/tagUtils";

function SidebarDrawer({ data, children }) {
  const tags = getUniqueTags(data);

  return (
    <div className="drawer h-screen w-screen overflow-hidden">
      {/* Invisible toggle controller */}
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col h-full w-full relative">
        {children}
      </div>

      {/* The slide-out side tray */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
        <div className="bg-base-100 min-h-full w-72 p-4 border-r border-base-200 flex flex-col gap-2">
          <h2 className="text-xl font-bold px-2 py-1 text-primary">
            Take-A-Note
          </h2>
          <div className="divider my-1"></div>

          {/* VERTICAL SIDEBAR */}
          <div className="flex flex-col gap-2 w-full justify-start items-stretch">
            <div className="flex flex-col gap-2 w-full [&>input]:justify-start [&>input]:text-left [&>input]:px-4">
              <h4 className="font-bold">Tags</h4>
              <ul className="menu menu-md ld:menu-lg bg-base-200 rounded-box w-full">
                {tags.map((item, i) => (
                  <li key={i}>
                    <a>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="settings-section mt-auto">
            <ul className="menu menu-md ld:menu-lg bg-base-200 rounded-box w-full">
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarDrawer;
