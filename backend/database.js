import database from './migrations'
const sqlite3 = require('sqlite3').verbose();

// Set up SQLite3 database connection
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Could not open database:', err);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Migration
db.serialize(() => {
    database.forEach(item => {
        db.run(item);
    })
});

export default db