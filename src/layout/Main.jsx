import NotesGrid from "../components/NotesGrid";

function Main({ notes }) {
  // const pinnedNotes = notes.filter((note) => note.pinned);
  // const unpinnedNotes = notes.filter((note) => !note.pinned);

  return (
    <main className="w-full p-2 bg-[var(--bg-mid)] grow overflow-y-auto mx-auto space-y-6">
      <NotesGrid initialNotes={notes} />
    </main>
  );
}

export default Main;
