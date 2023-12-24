const express = require('express');
const router = express.Router();
const branchesModel = require('../model/Branchs');

// Function to create branchsRoutes with io instance
const createBranchesRoutes = (io) => {
    // Create branch
    router.post('/add', async (req, res) => {
        const { location, address, googleMap, } = req.body;

        try {
            const newBranch = await branchesModel.create({ location, address, googleMap, });

            // Emit the 'newBranch' event to all connected clients
            io.emit('newBranch', newBranch.toJSON());

            // Send the new branch in the response
            res.status(201).json(newBranch); // 201 Created status code indicates successful creation
        } catch (err) {
            console.error('Error adding branch:', err);
            res.status(500).json({ error: 'Failed to add branch. Please try again.' });
        }
    });

    // Read all branches
    router.get('/get', (req, res) => {
        branchesModel.find({})
            .then(result => res.json(result))
            .catch(err => {
                console.error('Error fetching data:', err);
                res.status(500).json({ error: 'Failed to fetch data. Please try again.' });
            });
    });

    // Update branch
    router.put('/update/:id', async (req, res) => {
        const branchId = req.params.id;
        const { location, address, googleMap, } = req.body;

        try {
            // Update the existing branch
            const updatedBranch = await branchesModel.findByIdAndUpdate(
                branchId,
                { location, address, googleMap, },
                { new: true }
            );

            if (!updatedBranch) {
                console.log('Branch not found for update:', branchId);
                return res.status(404).json({ error: 'Branch not found' });
            }

            // Emit the 'updatedBranch' event to all connected clients
            io.emit('updatedBranch', updatedBranch);

            res.status(200).json(updatedBranch);
        } catch (err) {
            console.error('Error updating branch:', err);
            res.status(500).json({ error: 'Failed to update branch. Please try again.' });
        }
    });

    // Delete branch
    router.delete('/delete/:id', async (req, res) => {
        const branchId = req.params.id;

        try {
            const deletedBranch = await branchesModel.findByIdAndDelete(branchId);

            // Emit the 'deletedBranch' event to all connected clients
            io.emit('deletedBranch', deletedBranch);

            res.status(200).json(deletedBranch);
        } catch (err) {
            console.error('Error deleting branch:', err);
            res.status(500).json({ error: 'Failed to delete branch. Please try again.' });
        }
    });

    return router;
};

module.exports = createBranchesRoutes;
