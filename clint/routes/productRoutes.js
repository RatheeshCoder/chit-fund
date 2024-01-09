// routes/product.js
const express = require('express');
const router = express.Router();
const ProductModel = require('../model/Product');

// Function to create ProductRoutes with io instance
const createProductRoutes = (io) => {
    // Create product
    router.post('/add', async (req, res) => {
        const { name, totalPrice, totalDays, monthlyPay, weeklyPay, dailyPay, moreDetails } = req.body;

        try {
            const newProduct = await ProductModel.create({
                name,
                totalPrice,
                totalDays,
                monthlyPay,
                weeklyPay,
                dailyPay,
                moreDetails,
            });

            // Emit the 'newProduct' event to all connected clients
            io.emit('newProduct', newProduct.toJSON());

            // Send the new product in the response
            res.status(201).json(newProduct); // 201 Created status code indicates successful creation
        } catch (err) {
            console.error('Error adding product:', err);
            res.status(500).json({ error: 'Failed to add product. Please try again.' });
        }
    });

    // Read all products
    router.get('/get', (req, res) => {
        ProductModel.find({})
            .then(result => res.json(result))
            .catch(err => {
                console.error('Error fetching products:', err);
                res.status(500).json({ error: 'Failed to fetch products. Please try again.' });
            });
    });

    // Update product
    router.put('/update/:id', async (req, res) => {
        const productId = req.params.id;
        const { name, totalPrice, totalDays, monthlyPay, weeklyPay, dailyPay, moreDetails } = req.body;

        try {
            // Update the existing product
            const updatedProduct = await ProductModel.findByIdAndUpdate(
                productId,
                { name, totalPrice, totalDays, monthlyPay, weeklyPay, dailyPay, moreDetails },
                { new: true }
            );

            if (!updatedProduct) {
                console.log('Product not found for update:', productId);
                return res.status(404).json({ error: 'Product not found' });
            }

            // Emit the 'updatedProduct' event to all connected clients
            io.emit('updatedProduct', updatedProduct);

            res.status(200).json(updatedProduct);
        } catch (err) {
            console.error('Error updating product:', err);
            res.status(500).json({ error: 'Failed to update product. Please try again.' });
        }
    });

    // Delete product
    router.delete('/delete/:id', async (req, res) => {
        const productId = req.params.id;

        try {
            const deletedProduct = await ProductModel.findByIdAndDelete(productId);

            // Emit the 'deletedProduct' event to all connected clients
            io.emit('deletedProduct', deletedProduct);

            res.status(200).json(deletedProduct);
        } catch (err) {
            console.error('Error deleting product:', err);
            res.status(500).json({ error: 'Failed to delete product. Please try again.' });
        }
    });

    return router;
};

module.exports = createProductRoutes;
