const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  name: {
    type:String,
    required:true,
  },
  questions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true
  }]
});

const testModel = mongoose.model('Test',testSchema);

module.exports=testModel;