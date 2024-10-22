// src/supabase.ts

import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase project URL and Key
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'your-supabase-url';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || 'your-supabase-key';

// Create a Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
