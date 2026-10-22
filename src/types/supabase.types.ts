export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface NoteMetadata {
  isPinned?: boolean;
  tags?: string[];
  items?: ChecklistItem[];
  imageUrls?: string[];
}

export interface Note {
  id?: string;
  user_id?: string;
  title: string;
  content: string;
  type: "text" | "checklist";
  theme: string;
  metadata: NoteMetadata;
  created_at?: string;
  updated_at?: string;
}

export interface ProgressCategory {
  id?: string;
  user_id?: string;
  name: string; // e.g., Personal Project, Work, Reading, Drank Water etc
  unit_label: string; // e.g., "30 mins"
  target_blocks: number; // e.g., 4 squares
  color?: string;
  created_at?: string;
}

export interface ProgressEntry {
  id?: string;
  user_id?: string;
  category_id: string; // Links to ProgressCategory
  entry_date: string; // YYYY-MM-DD
  completed_blocks: number; // e.g., 2 out of 4 squares checked
  created_at?: string;
}
