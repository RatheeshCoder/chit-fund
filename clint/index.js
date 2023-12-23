// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/user');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb+srv://ratheesh:ratheesh@cluster0.fjqeoph.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

    app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(User => {
            if (User) {
                if (password === User.password) {
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



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
