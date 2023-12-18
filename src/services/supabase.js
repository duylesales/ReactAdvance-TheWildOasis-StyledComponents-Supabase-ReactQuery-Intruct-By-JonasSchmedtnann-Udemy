import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://fcwfmjjedcgvsozktqma.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjd2ZtamplZGNndnNvemt0cW1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MjU4ODcsImV4cCI6MjAxODMwMTg4N30.9s902BBtVibNS43O9XqY2_K-wPFVTrmmN0LHd_MDQ4Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
