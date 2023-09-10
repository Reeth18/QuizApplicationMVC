const express = require ('express');
const questionRouter = express.Router();

const {
    addQuestion,
    removeQuestion,
} = require ('../controllers/question.controller');

questionRouter.post ('/add-question', addQuestion);
questionRouter.post ('/remove-question', removeQuestion);

module.exports = questionRouter;