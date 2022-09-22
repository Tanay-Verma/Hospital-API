const Doctor = require('../models/doctor')

const getDoctors = async (req,res)=>{
    const {id:doctorID} = req.query
    let doctor 
    if(doctorID){
        doctor = await Doctor.findOne({_id:doctorID})
    }
    else{
        doctor = await Doctor.find({})
    }
    if(!doctor) throw Error('no user found')
    res.json({
        success:true,
        data:{doctor},
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