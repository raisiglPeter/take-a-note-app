export default function Note({
  note,
  isDragging,
  isHovered,
  onDragStart,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
}) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, note)}
      onDragEnd={onDragEnd}
      onDragEnter={(e) => onDragEnter(e, note)}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, note)}
      className={`bg-white max-h-60 max-w-60 mx-auto rounded-lg p-4 shadow-sm transition-all duration-100 active:cursor-grab  ${
        isDragging
          ? "opacity-30 -translate-y-3 scale-105 border-2 border-transparent"
          : isHovered
          ? "border-2 border-blue-400 shadow-lg scale-102"
          : "border border-gray-200 hover:shadow-md hover:scale-102"
      }`}
    >
      <h3 className="font-semibold text-gray-800 mb-2 text-sm">{note.title}</h3>
      <p className="text-gray-600 text-xs leading-relaxed">
        {note.description}
      </p>
    </div>
  );
}
