const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketio = require('socket.io');
const JobsRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');
const branchsRoutes = require('./routes/branchsRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://ratheesh:ratheesh@cluster0.fjqeoph.mongodb.net/new-database?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const io = socketio(server);

io.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Use the routes
const jobsRouter = JobsRoutes(io);
const branchsRouter = branchsRoutes(io);
app.use('/jobs', jobsRouter);
app.use('/branches', branchsRouter);
app.use('/users', userRoutes);

module.exports = app; 
