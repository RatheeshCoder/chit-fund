const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketio = require('socket.io');
const JobsRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/userRoutes');
const branchsRoutes = require('./routes/branchsRoutes');
const productRoutes = require('./routes/productRoutes'); 
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
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
const productsRouter = productRoutes(io); 

app.use('/jobs', jobsRouter);
app.use('/branches', branchsRouter);
app.use('/products', productsRouter); 
app.use('/users', userRoutes);



module.exports = app;
