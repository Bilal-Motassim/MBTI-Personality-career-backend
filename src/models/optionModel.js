const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    nameEN: {
        type: String,
        required: true,
    },
    nameFR: {
        type: String,
        required: true,
    },
    nameAR: {
        type: String,
        required: true,
    }
});

const optionModel = mongoose.model('Option', optionSchema);

module.exports = optionModel;