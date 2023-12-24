const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const JobsModel = mongoose.model('Job', jobSchema);

module.exports = JobsModel;
