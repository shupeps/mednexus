import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qakxwgevdymugizbiddi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFha3h3Z2V2ZHltdWdpemJpZGRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MTU4NzQsImV4cCI6MjA3MTM5MTg3NH0.19AlRODPBIu6rKV19a6hIeKAp6m_JQym6ZaSF4zoHjo';

export const supabase = createClient(supabaseUrl, supabaseKey);


