import userController from '../controllers/userController';
const express = require('express');
const router = express.Router();

// Route for displaying all users
router.get('/', userController.getUsers);

// Route for creating a new user (POST)
router.post('/', userController.createUser);

const userRouter = router;

export default userRouter;
