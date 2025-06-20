import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ccmjulytxwdusatcjzvi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjbWp1bHl0eHdkdXNhdGNqenZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MTUzMTEsImV4cCI6MjA2NTk5MTMxMX0.3tjm58wyxp01felGTEOfzQl8sBTGjvvG_wi1bnfibUc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
