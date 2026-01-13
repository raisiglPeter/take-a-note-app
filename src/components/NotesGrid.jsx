import Note from "./Note.jsx";

export default function NotesGrid({ initialNotes }) {
  const notes = [...initialNotes];
  return (
    <div className="max-w-4/5 mx-auto grid gap-4 grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] auto-rows-min">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}
