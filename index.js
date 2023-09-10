const express = require ('express');
const morgan = require ('morgan');
const dotenv = require('dotenv').config();
const app = express();

app.use(express.json());
app.use(morgan());

// Connect the Database
const main = require ('./dbConnection');
main().
    then(() => {
        console.log(`Database Connected Successfully`);
    })
    .catch((err) => {
        console.log(err.message);
    })

// Create the entry points api
const userRouter = require ('./routes/user.route');
app.use ('/auth', userRouter);

const questionRouter = require ('./routes/question.route');
app.use ('/questions', questionRouter);

// Start the server
const portNo = process.env.portNo;
app.use(portNo, () => {
    console.log(`Server is running on Port No. ${portNo}`);
})



