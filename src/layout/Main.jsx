import Card from "../ui/Card";

function Main({ notes, twoColumns = true }) {
  const pinnedNotes = notes.filter((note) => note.pinned);
  const unpinnedNotes = notes.filter((note) => !note.pinned);

  return (
    <main className="w-full  p-2 bg-[var(--bg-mid)] grow overflow-y-auto mx-auto space-y-6">
      {/* Pinned Section */}
      {pinnedNotes.length > 0 && (
        <section className="max-w-5xl mx-auto">
          <h2 className="text-sm font-semibold text-muted mb-2 px-1">
            📌 Pinned Notes
          </h2>
          <div
            className={`w-full ${
              twoColumns ? "columns-2 md:columns-3 lg:columns-4" : "columns-1"
            } gap-2`}
          >
            {pinnedNotes.map((note) => (
              <div key={note.id} className="break-inside-avoid mb-2">
                <Card title={note.title} description={note.description} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Unpinned Section */}
      <section className="max-w-5xl mx-auto">
        <h2 className="text-sm font-semibold text-muted mb-2 px-1">📝 Notes</h2>
        <div
          className={`w-full ${
            twoColumns ? "columns-2 md:columns-3 lg:columns-4" : "columns-1"
          } gap-2`}
        >
          {unpinnedNotes.map((note) => (
            <div key={note.id} className="break-inside-avoid mb-2">
              <Card title={note.title} description={note.description} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
