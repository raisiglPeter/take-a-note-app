import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";
import { notesService } from "../../services/notesService";
import type { Note } from "../../types/supabase.types";
import NotesGrid from "./NotesGrid";
import "./NotesContainer.css";
import Spinner from "./Spinner";

export default function NotesContainer() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const notesQueryKey = ["notes", user?.id] as const;

  const {
    data: notes = [],
    isPending,
    isError,
  } = useQuery({
    queryKey: notesQueryKey,
    queryFn: notesService.fetchNotes,
    enabled: Boolean(user),
  });

  const deleteNoteMutation = useMutation({
    mutationFn: notesService.deleteNote,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: notesQueryKey }),
  });

  const updateNoteMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Note> }) =>
      notesService.updateNote(id, updates),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: notesQueryKey }),
  });

  const handleDeleteNote = (id: string): void => {
    deleteNoteMutation.mutate(id);
  };

  const handleUpdateNote = (id: string, updates: Partial<Note>): void => {
    updateNoteMutation.mutate({ id, updates });
  };

  if (isPending) {
    return <Spinner message="Loading..." />;
  }

  if (isError) {
    return <div className="notes-loading">Unable to load notes.</div>;
  }

  return (
    <section className="notes-container">
      <NotesGrid
        notes={notes}
        onDeleteNote={handleDeleteNote}
        onUpdateNote={handleUpdateNote}
      />
    </section>
  );
}
