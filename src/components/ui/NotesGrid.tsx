import type { Note } from "../../types/supabase.types";
import NoteCard from "./NoteCard";

import "./NotesGrid.css";

interface NotesGridProps {
  notes: Note[];
  onDeleteNote: (id: string) => void;
  onUpdateNote: (id: string, updates: Partial<Note>) => void;
}

export default function NotesGrid({
  notes,
  onDeleteNote,
  onUpdateNote,
}: NotesGridProps) {
  return (
    <div className="notes-grid">
      {notes.map((note, index) => {
        return (
          <NoteCard
            onDelete={onDeleteNote}
            onUpdate={onUpdateNote}
            note={note}
            key={index}
          />
        );
      })}
    </div>
  );
}
