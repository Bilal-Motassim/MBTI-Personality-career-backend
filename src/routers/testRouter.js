const express = require('express');
const { addTest, deleteTest, renameTest, getTestAndAllQuestionsOprions } = require('../controllers/testController');

const testRouter = express.Router();


testRouter.get("/", getTestAndAllQuestionsOprions);
testRouter.post("/", addTest);
testRouter.put("/:id", renameTest);
testRouter.delete("/:id", deleteTest);



module.exports = testRouter;