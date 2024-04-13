const express = require('express');
const { addOption, deleteOption, modOption } = require('../controllers/optionController');

const optionRouter = express.Router();

optionRouter.post("/:questionid", addOption);
optionRouter.put("/:optionid", deleteOption);
optionRouter.delete("/:optionid", modOption);


module.exports = optionRouter;