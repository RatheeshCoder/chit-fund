const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    googleMap: {
        type: String,
        required: true,
    },

});

const BranchModel = mongoose.model('Branch', branchSchema);

module.exports = BranchModel;
