const router = require('express').Router()
const {getDoctors, createDoctor,updateDoctor ,deleteAllDoctors} = require('../controllers/doctor')

router.route('/').get(getDoctors).post(createDoctor).patch(updateDoctor).delete(deleteAllDoctors)


module.exports = router