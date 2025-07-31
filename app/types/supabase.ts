// app/types/supabase.ts

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      recipes: {
        Row: {
          id: string;
          title: string;
          html: string;
          image_url: string;
          created_at: string;
          user_id: string;
        };
        Insert: {
          title: string;
          html: string;
          image_url: string;
          user_id: string;
        };
        Update: {
          title?: string;
          html?: string;
          image_url?: string;
          user_id?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
