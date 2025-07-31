import NoteList from "../components/NoteList";

function Main({ notes, twoColumns = true }) {
  const pinnedNotes = notes.filter((note) => note.pinned);
  const unpinnedNotes = notes.filter((note) => !note.pinned);

  return (
    <main className="w-full p-2 bg-[var(--bg-mid)] grow overflow-y-auto mx-auto space-y-6">
      <NoteList
        title="Pinned Notes"
        emoji="📌"
        notes={pinnedNotes}
        twoColumns={twoColumns}
      />
      <NoteList
        title="Notes"
        emoji="📝"
        notes={unpinnedNotes}
        twoColumns={twoColumns}
      />
    </main>
  );
}

export default Main;
