import { supabase } from "../lib/supabaseClient";
import type { ProgressCategory, ProgressEntry } from "../types/supabase.types";

export const progressService = {
  async fetchCategories(): Promise<ProgressCategory[]> {
    const { data, error } = await supabase
      .from("progress_categories")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) throw new Error(error.message);
    return data || [];
  },

  async createCategory(
    category: Omit<ProgressCategory, "id" | "created_at">,
  ): Promise<ProgressCategory> {
    const { data, error } = await supabase
      .from("progress_categories")
      .insert(category)
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },

  async fetchEntriesForDate(dateStr: string): Promise<ProgressEntry[]> {
    const { data, error } = await supabase
      .from("progress_entries")
      .select("*")
      .eq("entry_date", dateStr);

    if (error) throw new Error(error.message);

    return data || [];
  },

  async insertEntry(
    categoryId: string,
    dateStr: string,
    completedBlocks: number,
  ): Promise<ProgressEntry> {
    const { data, error } = await supabase
      .from("progress_entries")
      .upsert(
        {
          category_id: categoryId,
          entry_date: dateStr,
          completed_blocks: completedBlocks,
        },
        {
          onConflict: "category_id, entry_date",
        },
      )
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },
};
