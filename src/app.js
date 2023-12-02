const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const userRouter = require('./router/users');
const serviceProvRouter = require('./router/serviceProviders');
const bookingRouter = require('./router/booking');
require('./db/connection');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(userRouter);
app.use(serviceProvRouter);
app.use(bookingRouter);

app.listen(port, ()=>{
    console.log(`Connected to Port ${port}`);
});