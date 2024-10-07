const { app, BrowserWindow } = require('electron');
const path = require('path');
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const { ipcMain } = require('electron');

// Create Express app
const expressApp = express();
const port = 5000;  // Backend API port

// Enable CORS (Cross-Origin Resource Sharing)
expressApp.use(cors());
expressApp.use(express.json());

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
expressApp.get('/api/items', (req, res) => {
    db.all('SELECT * FROM items', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ items: rows });
        }
    });
});

// API endpoint to add an item
expressApp.post('/api/items', (req, res) => {
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
expressApp.listen(port, () => {
    console.log(`Express server is running at http://localhost:${port}`);
});

// Now we start the Electron app
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // Load Vue app served by Vite
    win.loadURL('http://localhost:5173');  // Vite dev server URL

    // Uncomment for debugging
    win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
