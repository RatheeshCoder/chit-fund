const express = require('express');
const router = express.Router();
const UserModel = require('../model/user');

// Login route
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                // In a real-world scenario, use bcrypt for secure password comparison
                if (password === user.password) {
                    res.status(200).json({ message: 'Success' });
                } else {
                    res.status(401).json({ error: 'Password is incorrect' });
                }
            } else {
                res.status(404).json({ error: 'User does not exist' });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
