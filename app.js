require('dotenv').config()

// async errors
require('express-async-errors')

// express
const express = require('express')
const app = express()

// routes
const doctorRouter = require('./routes/doctor')

// error handling middlewares
const errorMiddleware = require('./middleware/error-handler')
const notFoundMiddleware = require('./middleware/not-found')

// connection to MondoDB
const connectDB = require('./db/connect')

app.use(express.json())

app.get('/api/v1',(req,res)=>{
    res.send('<h1>HELLO WORLD</h1>')
})

// doctor route
app.use('/api/v1/doctor',doctorRouter)

// middleware
app.use(errorMiddleware)
app.use(notFoundMiddleware)

const port = process.env.PORT || 3000

const start = async ()=>{
    try {
        // connect DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()