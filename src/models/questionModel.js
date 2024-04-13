const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    number: {
        type: Number,
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
    },
    options: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Option",
      required: true
    }]
});

const questionModel = mongoose.model('Question', questionSchema);

module.exports = questionModel;