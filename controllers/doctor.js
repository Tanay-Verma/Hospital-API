const Doctor = require('../models/doctor')

const getDoctors = async (req,res)=>{
    const {id:doctorID, name, city, phoneNumber, email, speciality, fields} = req.query

    let queryObj = {}
    if(doctorID){
        queryObj._id = doctorID
    }
    if(name){
        queryObj.name = name
    }
    if(city){
        queryObj.city = city
    }
    if(phoneNumber){
        queryObj.phoneNumber = phoneNumber
    }
    if(email){
        queryObj.email = email
    }
    if(speciality){
        queryObj.speciality = speciality
    }

    let doctor =  Doctor.find(queryObj)

    if(fields){
        const fieldsString = fields.split(',').join(' ')
        doctor = doctor.select(fieldsString)
    }
    if(doctor.length === 0) throw Error('no user found')

    const data = await doctor
    res.json({
        success:true,
        data,
        nbHits:doctor.length
    })
}

const createDoctor = async (req,res)=>{
    const doctor = await Doctor.create(req.body)
    res.json({doctor})
}

const updateDoctor = async (req,res)=>{
    
}

const deleteAllDoctors = async(req,res)=>{
    await Doctor.deleteMany()
    res.json({success:true})
}

module.exports = {
    getDoctors,
    createDoctor,
    deleteAllDoctors
}