import { supabase } from "../lib/supabaseClient";
import { handleApiError } from "../utils/handleApiError";
import type { Note } from "../types/supabase.types";

export const notesService = {
  async fetchNotes(): Promise<Note[]> {
    const { data, error } = await supabase
      .from("notes")
      .select("*")
      .order("updated_at", { ascending: false });

    if (error) {
      handleApiError(new Error(error.message));
      throw error;
    }

    return data || [];
  },

  async createNote(
    note: Omit<Note, "id" | "created_at" | "updated_at">,
  ): Promise<Note> {
    const { data, error } = await supabase
      .from("notes")
      .insert(note)
      .select()
      .single();

    if (error) {
      handleApiError(new Error(error.message));
      throw error;
    }

    return data;
  },

  async updateNote(id: string, updates: Partial<Note>): Promise<Note> {
    const { data, error } = await supabase
      .from("notes")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      handleApiError(new Error(error.message));
      throw error;
    }

    return data;
  },

  async deleteNote(id: string): Promise<void> {
    const { error } = await supabase.from("notes").delete().eq("id", id);

    if (error) {
      handleApiError(new Error(error.message));
      throw error;
    }
  },
};
