import sequelize from './models/index';
import userRouter from './routes/userRoutes';

const express = require('express');
const cors = require('cors');

const server = express();

// Enable CORS (Cross-Origin Resource Sharing)
server.use(cors());
server.use(express.json());  // For parsing application/json

/**
 * Define router
 */
server.use('/users', userRouter);

sequelize.sync({ force: false }).then(() => {
});

export default server;
