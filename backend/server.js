import sequelize from './models/index';
// import User from './models/user';
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

// server.post('/users', async (req, res) => {
//     try {
//         const { name, email } = req.body;
//         const user = await User.create({ name, email });
//         res.json(user);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to create user' });
//     }
// });

// server.get('/users', async (req, res) => {
//     const users = await User.findAll();
//     res.json(users);
// });

sequelize.sync({ force: false }).then(() => {
});

export default server;
