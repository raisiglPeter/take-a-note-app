// components/NoteList.jsx
import Card from "../ui/Card";

function NoteList({ title, emoji, notes, twoColumns = true }) {
  if (!notes || notes.length === 0) return null;

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-sm font-semibold text-muted mb-2 px-1">
        {emoji} {title}
      </h2>
      <div
        className={`w-full ${
          twoColumns ? "columns-2 md:columns-3 lg:columns-4" : "columns-1"
        } gap-2`}
      >
        {notes.map((note) => (
          <Card
            key={note.id}
            title={note.title}
            description={note.description}
          />
        ))}
      </div>
    </section>
  );
}

export default NoteList;
