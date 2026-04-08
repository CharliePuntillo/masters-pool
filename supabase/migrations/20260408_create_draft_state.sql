-- Draft state table: single row holds the entire shared state
CREATE TABLE IF NOT EXISTS draft_state (
    id int PRIMARY KEY DEFAULT 1 CHECK (id = 1),
    state jsonb NOT NULL DEFAULT '{}',
    updated_at timestamptz NOT NULL DEFAULT now()
);

-- Insert initial empty row
INSERT INTO draft_state (id, state) VALUES (1, '{}')
ON CONFLICT (id) DO NOTHING;

-- Allow anonymous read/write (family app, no auth needed)
ALTER TABLE draft_state ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all access" ON draft_state FOR ALL USING (true) WITH CHECK (true);
