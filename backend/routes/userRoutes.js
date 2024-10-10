import UserController from '../controllers/UserController';
const express = require('express');
const router = express.Router();

// Route for displaying all users
router.get('/', UserController.getUsers);

// Route for creating a new user (POST)
router.post('/', UserController.createUser);

const UserRouter = router;

export default UserRouter;
