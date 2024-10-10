import sequelize from './models/index';
import UserRoutes from './routes/UserRoutes';
import ProductRoutes from './routes/ProductRoutes';

const express = require('express');
const cors = require('cors');

const server = express();

// Enable CORS (Cross-Origin Resource Sharing)
server.use(cors());
server.use(express.json());  // For parsing application/json

/**
 * Define router
 */
server.use('/users', UserRoutes);
server.use('/products', ProductRoutes);

sequelize.sync({ force: false }).then(() => {
});

export default server;
