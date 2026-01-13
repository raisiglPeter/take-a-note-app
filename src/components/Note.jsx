export default function Note({ note }) {
  return (
    <div
      className={`bg-white rounded-lg p-4 max-h-100 overflow-hidden shadow-md transition-all duration-100 hover:`}
    >
      <h3 className="font-semibold text-gray-800 mb-2 text-sm line-clamp-2">
        {note.title}
      </h3>
      <p className="text-gray-600 text-xs leading-relaxed line-clamp-8">
        {note.description}
      </p>
    </div>
  );
}
