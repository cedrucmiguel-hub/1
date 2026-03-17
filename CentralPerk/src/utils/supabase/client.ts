import { createClient } from '@supabase/supabase-js';
import { publicAnonKey, supabaseUrl } from '/utils/supabase/info';

if (!supabaseUrl || !publicAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Set VITE_SUPABASE_URL and either VITE_SUPABASE_PUBLISHABLE_KEY or VITE_SUPABASE_ANON_KEY in CentralPerk/.env.',
  );
}

export const supabase = createClient(supabaseUrl, publicAnonKey);
