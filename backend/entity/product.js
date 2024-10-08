import server from "../server";
import db from "../database";

server.get('/api/products', (req, res) => {
    db.all('SELECT * FROM products', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ products: rows });
        }
    });
});

server.post('/api/products', (req, res) => {
    const { name } = req.body;
    const stmt = db.prepare('INSERT INTO products (name) VALUES (?)');
    stmt.run(name, function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ id: this.lastID, name });
        }
    });
    stmt.finalize();
});

const products = {}

export default products