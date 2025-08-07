import { useState } from "react";

import Note from "./Note.jsx";

export default function NotesGrid({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);
  const [draggedNote, setDraggedNote] = useState(null);
  const [hoveredNote, setHoveredNote] = useState(null);

  const handleDragStart = (e, note) => {
    setDraggedNote(note);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.outerHTML);
    e.dataTransfer.setDragImage(e.target, 0, 0);
  };

  const handleDragEnd = (e) => {
    console.log(e);
    setDraggedNote(null);
    setHoveredNote(null);
  };

  const handleDragEnter = (e, note) => {
    if (draggedNote && draggedNote.id !== note.id) {
      setHoveredNote(note.id);
    }
  };

  const handleDragLeave = (e) => {
    // Only clear hover if we're leaving the note completely
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setHoveredNote(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, targetNote) => {
    e.preventDefault();
    setHoveredNote(null);

    if (!draggedNote || draggedNote.id === targetNote.id) return;

    const draggedIndex = notes.findIndex((note) => note.id === draggedNote.id);
    const targetIndex = notes.findIndex((note) => note.id === targetNote.id);

    const newNotes = [...notes];
    const [removed] = newNotes.splice(draggedIndex, 1);
    newNotes.splice(targetIndex, 0, removed);

    setNotes(newNotes);
  };

  return (
    <div className="max-w-4/5 mx-auto grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-min">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          isDragging={draggedNote && draggedNote.id === note.id}
          isHovered={hoveredNote === note.id}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
}
