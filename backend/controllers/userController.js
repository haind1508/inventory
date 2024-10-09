import User from '../models/user';

// Controller for handling user-related logic
const userController = {
    // Fetch all users
    getUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (err) {
            res.status(500).send('Error fetching users: ' + err.message);
        }
    },

    // Create a new user
    createUser: async (req, res) => {
        try {
            const { name, email } = req.body;
            const user = await User.create({ name, email });
            res.json(user);
        } catch (err) {
            res.status(500).send('Error creating user: ' + err.message);
        }
    }
};

export default userController;
