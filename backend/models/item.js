import db from "../database"

const Items = class {
    constructor(item) {
        if(item.id) {
            this.id = item.id
        }
        if(item.name) {
            this.name = item.name
        }
    }

    save() {
        const stmt = db.prepare('INSERT INTO items (name) VALUES (?)');

        stmt.run(this.name, function (err) {
            if (err) {
                throw new Error(err.message);
            } else {
                return { id: this.lastID }
            }
        });

        stmt.finalize();
    }

    select(condition = {}) {
        const query = 'SELECT * FROM items'
        if(condition?.name) {
            query +=' name'
        }
        db.all('SELECT * FROM items', [], (err, rows) => {
            
        });
    }
}

export default Items