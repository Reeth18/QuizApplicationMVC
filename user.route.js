const express = require("express");
const userRouter = express.Router();
const {
  studentSignup,
  studentLogin,
  adminSignup,
  adminLogin,
} = require("../controllers/user.controller");

userRouter.post ('/studentsignup', studentSignup);
userRouter.post ('/studentlogin', studentLogin);
userRouter.post ('/adminsignup', adminSignup);
userRouter.post ('/adminlogin', adminLogin);


module.exports = userRouter;