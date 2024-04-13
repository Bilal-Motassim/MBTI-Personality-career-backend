const express = require('express');
const { addQuestion, modQuestion, deleteQuestion } = require('../controllers/questionConroller');

const questionRouter = express.Router();



questionRouter.post("/:testid", addQuestion);
questionRouter.put("/:questionid", modQuestion);
questionRouter.delete("/:questionid", deleteQuestion);



module.exports = questionRouter;