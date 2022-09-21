const Doctor = require('../models/doctor')

const getAllDoctors = async (req,res)=>{
    res.json({
        name:"Viraj Pathak",
        speciality:"ENT"
    })
}

const createDoctor = async (req,res)=>{
    const doctor = await Doctor.create(req.body)
    
    res.json({doctor})
}

const deleteAllDoctors = async(req,res)=>{
    await Doctor.deleteMany()
    res.json({success:true})
}

module.exports = {
    getAllDoctors,
    createDoctor,
    deleteAllDoctors
}