import ItemService from './service/items';
import db from './database';
const express = require('express');
const cors = require('cors');

const server = express();

// Enable CORS (Cross-Origin Resource Sharing)
server.use(cors());
server.use(express.json());  // For parsing application/json


/**
 * Define router
 */

/**
 * Items
 */
server.post('/items', (req, res) => {
    new ItemService(req, res).store().then((r) => {
        res.json(r);
    }).catch((err) => {
        res.status(500).json({ error: err.message });
    })
});

server.get('/items', (req, res) => {
    db.all('SELECT * FROM items', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ items: rows });
        }
    });
});

export default server;
