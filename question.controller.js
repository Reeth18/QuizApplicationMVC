const quizQuestionModel = require("../models/questions.model");

// Add Quiz Question
const addQuestion = (req, res) => {
  const { question, options, correctOption } = req.body;

  if (
    !question ||
    !options ||
    !correctOption ||
    !Array.isArray(options) ||
    options.length < 2
  ) {
    return res.status(400).json({ message: "Invalid question data" });
  }

  // Create a new quiz question
  const newQuestion = {
    id: quizQuestionModel.getAllQuestions().length + 1,
    question,
    options,
    correctOption,
  };

  quizQuestionModel.addQuestion(newQuestion);

  return res.status(201).json({
      message: "Quiz question added successfully",
      question: newQuestion,
    });
};

// Remove Quiz Question
const removeQuestion = (req, res) => {
  const questionId = parseInt(req.params.id);
  const existingQuestion = quizQuestionModel
    .getAllQuestions()
    .find((q) => q.id === questionId);

  if (!existingQuestion) {
    return res.status(404).json({ message: "Question not found" });
  }

  quizQuestionModel.removeQuestion(questionId);

  res.json({ message: "Quiz question removed successfully" });
};

module.exports = {
  addQuestion,
  removeQuestion,
};
