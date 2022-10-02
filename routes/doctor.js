const router = require('express').Router()
const {getDoctors, createDoctor,updateDoctor ,deleteDoctors} = require('../controllers/doctor')

router.route('/').get(getDoctors).post(createDoctor).patch(updateDoctor).delete(deleteDoctors)


module.exports = router