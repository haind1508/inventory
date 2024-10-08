import server from "../server";
import db from "../database";

server.get('/api/items', (req, res) => {
    db.all('SELECT * FROM items', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ items: rows });
        }
    });
});

// API endpoint to add an item
server.post('/api/items', (req, res) => {
    const { name } = req.body;
    const stmt = db.prepare('INSERT INTO items (name) VALUES (?)');
    stmt.run(name, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ id: this.lastID, name });
        }
    });
    stmt.finalize();
});

const items = {}

export default items