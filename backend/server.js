const express = require('express');
const colors = require('colors')
const dotenv= require('dotenv').config();

const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 3000; // if PORT was not found

const connectDB = require('./config/db')

// connect to DB
connectDB()
const app = express()

// Adding middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/dogs', require('./routes/dogRoutes'))
app.use(errorHandler)


app.listen(port,() => console.log(`Server started on port ${port}`))