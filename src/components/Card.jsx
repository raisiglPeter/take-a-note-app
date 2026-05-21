import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faImage,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Card({ content }) {
  return (
    <div className="card card-xs bg-base-100 shadow-sm border border-base-300 h-full w-full group overflow-hidden transition-all duration-200 hover:shadow-lg hover:border hover:border-gray-300">
      {/* 2. Title */}
      <div className="drag-handle p-2 cursor-move flex justify-start items-center bg-gray-100">
        <h2
          className={`text-sm font-bold truncate pr-2 ${content.title || "italic"}`}
        >
          {content.title || "Untitled"}
        </h2>
      </div>

      <div className="card-body p-0">
        {/* 3. Main Content Area */}
        <div className="text-[12px] opacity-80 flex-1 p-2">
          {content.type === "checklist" ? (
            <ul className="space-y-1">
              {content.metadata.items?.slice(0, 4).map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    readOnly
                    className="checkbox checkbox-xs border-base-content/30"
                  />
                  <span
                    className={`truncate ${item.completed ? "line-through opacity-40" : ""}`}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="line-clamp-4 leading-relaxed">{content.content}</p>
          )}
        </div>

        {/* 1. Optional Image metadata.imageUrl */}
        {content.metadata.imageUrl && content.metadata.imageAlt && (
          <figure className="h-16 overflow-hidden">
            <img
              src={content.metadata.imageUrl}
              alt={content.metadata.imageAlt || "Note image"}
              className="w-full object-cover"
            />
          </figure>
        )}

        {/* 4. Keep Action Bar: Using your custom Button component */}
        <div className="card-actions justify-between items-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-1">
            <Button className="btn-ghost btn-xs btn-circle">
              <FontAwesomeIcon
                icon={faPalette}
                className="text-[12px] text-base-content/60"
              />
            </Button>
            <Button className="btn-ghost btn-xs btn-circle">
              <FontAwesomeIcon
                icon={faImage}
                className="text-[12px] text-base-content/60"
              />
            </Button>
            <Button className="btn-ghost btn-xs btn-circle">
              <FontAwesomeIcon
                icon={faRotateLeft}
                className="text-[12px] text-base-content/60"
              />
            </Button>
          </div>

          <Button className="btn-ghost btn-xs text-[11px] font-bold text-base-content/50 uppercase tracking-tight">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
