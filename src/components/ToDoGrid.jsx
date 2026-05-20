import {
  Responsive as ResponsiveGridLayout,
  useContainerWidth,
} from "react-grid-layout";
import Card from "./Card";

function ToDoGrid({ data = [] }) {
  const { width, containerRef, mounted } = useContainerWidth();

  // 1. DYNAMIC LAYOUT GENERATION
  // We ignore the x/y in the JSON and calculate them based on index
  const generateLayout = (cols) => {
    return data.map((note, index) => ({
      i: note.id,
      x: index % cols, // Cycles 0, 1, 2, 3 (for 4 columns)
      y: 0, // Increments row every 'cols' items
      w: 1,
      h: note.type === "image" ? 3 : 2, // Bigger height for images
    }));
  };

  const layouts = {
    lg: generateLayout(4), // 4 columns on desktop
    md: generateLayout(3),
    sm: generateLayout(2),
    xs: generateLayout(1),
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto p-4">
      {mounted && (
        <ResponsiveGridLayout
          layouts={layouts}
          width={width}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 4, md: 3, sm: 2, xs: 1, xxs: 1 }}
          rowHeight={100}
          margin={[16, 16]}
          draggableHandle=".drag-handle"
          verticalCompact={true}
          compactType="vertical"
          preventCollision={false}
        >
          {data.map((note) => (
            <div key={note.id} className="cursor-default">
              <Card content={note} />
            </div>
          ))}
        </ResponsiveGridLayout>
      )}
    </div>
  );
}

export default ToDoGrid;
