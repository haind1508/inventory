const products =
`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name varchar(255) NOT NULL,
    image varchar(255) NULL DEFAULT NULL,
    unit tinyint NOT NULL DEFAULT 0,
    SKU varchar(255) NULL DEFAULT NULL,
    price double(12, 3) NOT NULL DEFAULT 0.000,
    expire int NULL DEFAULT NULL,
    remarks varchar(1000) NULL DEFAULT NULL,
    created_at timestamp(0) NULL DEFAULT NULL,
    updated_at timestamp(0) NULL DEFAULT NULL
)`

const items =
`CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT
)`

const migrations = [products, items]

export default migrations