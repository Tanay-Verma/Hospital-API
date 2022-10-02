const Doctor = require('../models/doctor')

const getDoctors = async (req,res)=>{
    const {id:doctorID, name, city, phoneNumber, email, speciality, fields} = req.query
    
    let queryObj = {}
    // to get doctor by ID
    if(doctorID){
        queryObj._id = doctorID
    }
    // to get doctor(s) by name
    if(name){
        queryObj.name = name
    }
    // to get doctor(s) by city
    if(city){
        queryObj.city = city
    }
    // to get doctor by phone number
    if(phoneNumber){
        queryObj.phoneNumber = phoneNumber
    }
    // to get doctor by email ID
    if(email){
        queryObj.email = email
    }
    // to get doctor(s) by their speciality
    if(speciality){
        queryObj.speciality = speciality
    }

    let doctor =  Doctor.find(queryObj)
    // filtering to only get specified fields in the data
    if(fields){
        const fieldsString = fields.split(',').join(' ')
        doctor = doctor.select(fieldsString)
    }
    
    const data = await doctor

    // if the no data is found
    if(data.length === 0) throw Error('no user found')
    
    // response to successful request
    res.json({
        success:true,
        data,
        nbHits:data.length
    })
}

const createDoctor = async (req,res)=>{
    const doctor = await Doctor.create(req.body)
    res.json({doctor})
}

const updateDoctor = async (req,res)=>{
    const {id:doctorID} = req.query
    // find the doctor by id and update their data with the data coming from request body
    const doctor = await Doctor.findOneAndUpdate({_id:doctorID},req.body,{
        new:true,
        runValidators:true
    })
    // error if no doctor with the provided id is found
    if(!doctor) return res.status(404).json({
        success:false,
        msg:`No doctor with id: ${doctorID}`
    })

    res.status(200).json({
        success:true,
        data:doctor
    })
}

const deleteDoctors = async(req,res)=>{
    const {id:doctorID} = req.query
    const doctor = await Doctor.findOneAndDelete({_id:doctorID})
    doctor ? res.json({
        success:true,
        data:doctor
    }) : res.status(404).json({
        success:false,
        msg:`No doctor with id: ${doctorID}`
    })
}

// const deleteAllDoctors = async(req,res)=>{
//     await Doctor.deleteMany()
//     res.json({success:true})
// }

module.exports = {
    getDoctors,
    createDoctor,
    updateDoctor,
    deleteDoctors
}