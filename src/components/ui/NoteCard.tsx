import type { Note } from "../../types/supabase.types";

import "./NoteCard.css";

interface NoteCardProps {
  note: Note;
  onDelete?: (id: string) => void;
  onUpdate?: (id: string, updates: Partial<Note>) => void;
}

export default function NoteCard({ note, onDelete, onUpdate }: NoteCardProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents triggering edit modal if card is clickable
    if (note.id && onDelete) {
      onDelete(note.id);
    }
  };

  return (
    <div className={`note-card theme-${note.theme || "default"}`}>
      {note.title && <h3 className="note-card-title">{note.title}</h3>}

      {/* Content Section (Text or Checklist) */}
      <div className="note-card-content">
        {note.type === "checklist" && note.metadata?.items ? (
          <ul className="note-checklist">
            {note.metadata.items.map((item) => (
              <li key={item.id} className={item.completed ? "completed" : ""}>
                <input type="checkbox" checked={item.completed} readOnly />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="note-text">{note.content}</p>
        )}
      </div>

      {/* Action Bar / Footer */}
      <div className="note-card-footer">
        {/* Standard card actions */}
        <button
          onClick={handleDelete}
          aria-label="Delete note"
          className="btn-delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
