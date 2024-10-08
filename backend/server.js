const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const server = express();
const port = 5000;  // Backend server will run on this port

// Enable CORS (Cross-Origin Resource Sharing)
server.use(cors());
server.use(express.json());  // For parsing application/json

// Set up SQLite3 database connection
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Could not open database:', err);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Create a table if it doesn't exist
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');
});

// API endpoint to get all items
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

// Start the Express server
// server.listen(port, () => {
//     console.log(`Express server is running at http://localhost:${port}`);
// });

export default server;
