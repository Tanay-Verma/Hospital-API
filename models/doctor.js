const mongoose = require('mongoose')
const {isEmail} = require('validator')

const isMobilePhone = (num)=>{
    return num.length === 10 ? true:false 
}

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        trim:true,
    },
    city:{
        type:String,
        enum:{
            values:['delhi', 'noida', 'faridabad'],
            message:'{VALUE} is not supported'
        },
        required:[true,'City is required'],
        trim:true,
        lowercase:true,
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique:true,
        required: [true,'Email address is required'],
        validate: [isEmail, 'Please fill a valid email address'],
    },
    phoneNumber:{
        type:String,
        trim:true,
        required:[true,'Phone number is required'],
        validate:[isMobilePhone,'Please fill a valid mobile phone number']
    },
    speciality:{
        type:String,
        trim:true,
        lowercase:true,
        required:[true,'Speciality is required'],
        enum:{
            values:['orthopedic', 'gynecology', 'dermatology', 'ent'],
            message:'{VALUE} is not supported'
        }
    }
})

const Doctor = mongoose.model('Doctor',doctorSchema)

Doctor.init().then(()=>{
})

module.exports = Doctor