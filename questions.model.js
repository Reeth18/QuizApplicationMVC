const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctOption: 0,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Mercury"],
    correctOption: 0,
  },
];

module.exports = {
  getAllQuestions: () => quizQuestions,
  addQuestion: (question) => quizQuestions.push(question),
  removeQuestion: (id) => {
    const index = quizQuestions.findIndex((q) => q.id === id);
    if (index !== -1) quizQuestions.splice(index, 1);
  },
};
