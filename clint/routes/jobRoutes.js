const express = require('express');
const router = express.Router();
const JobsModel = require('../model/Jobs');

// Function to create JobsRoutes with io instance
const createJobsRoutes = (io) => {
    // Create task
    router.post('/add', async (req, res) => {
        const { jobTitle, branch, experience, description } = req.body;

        try {
            const newTask = await JobsModel.create({ jobTitle, branch, experience, description });

            // Emit the 'newTask' event to all connected clients
            io.emit('newTask', newTask.toJSON());

            // Send the new task in the response
            res.status(201).json(newTask); // 201 Created status code indicates successful creation
        } catch (err) {
            console.error('Error adding task:', err);
            res.status(500).json({ error: 'Failed to add task. Please try again.' });
        }
    });

    // Read all tasks
    router.get('/get', (req, res) => {
        JobsModel.find({})
            .then(result => res.json(result))
            .catch(err => {
                console.error('Error fetching data:', err);
                res.status(500).json({ error: 'Failed to fetch data. Please try again.' });
            });
    });

    // Update task
    router.put('/update/:id', async (req, res) => {
        const taskId = req.params.id;
        const { jobTitle, branch, experience, description } = req.body;

        try {
            // Update the existing task
            const updatedTask = await JobsModel.findByIdAndUpdate(
                taskId,
                { jobTitle, branch, experience, description },
                { new: true }
            );

            if (!updatedTask) {
                console.log('Task not found for update:', taskId);
                return res.status(404).json({ error: 'Task not found' });
            }

            // Emit the 'updatedTask' event to all connected clients
            io.emit('updatedTask', updatedTask);

            res.status(200).json(updatedTask);
        } catch (err) {
            console.error('Error updating task:', err);
            res.status(500).json({ error: 'Failed to update task. Please try again.' });
        }
    });

    // Delete task
    router.delete('/delete/:id', async (req, res) => {
        const taskId = req.params.id;

        try {
            const deletedTask = await JobsModel.findByIdAndDelete(taskId);

            // Emit the 'deletedTask' event to all connected clients
            io.emit('deletedTask', deletedTask);

            res.status(200).json(deletedTask);
        } catch (err) {
            console.error('Error deleting task:', err);
            res.status(500).json({ error: 'Failed to delete task. Please try again.' });
        }
    });

    return router;
};

module.exports = createJobsRoutes;
