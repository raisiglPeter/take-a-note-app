export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface Note {
  id?: string;
  user_id?: string;
  title: string;
  content: string;
  type: "text" | "checklist";
  theme: string;
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  metadata: {
    isPinned?: boolean;
    tags?: string[];
    items?: ChecklistItem[];
    imageUrls?: string[];
  };
  created_at?: string;
  updated_at?: string;
}
