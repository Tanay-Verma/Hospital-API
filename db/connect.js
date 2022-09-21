const mongoose = require('mongoose')

const connectDB = (url)=>{
    return mongoose.connect(url,{
        // useCreateIndex:true,
        autoIndex:true
    })
}

module.exports = connectDB