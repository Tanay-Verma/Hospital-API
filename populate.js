require('dotenv').config()

const connectDB = require('./db/connect')
const Doctor = require('./models/doctor')

const jsonDoctors = require('./doctors.json')


const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Doctor.deleteMany()
        await Doctor.create(jsonDoctors)
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()