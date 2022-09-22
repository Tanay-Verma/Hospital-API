const router = require('express').Router()
const {getDoctors, createDoctor, deleteAllDoctors} = require('../controllers/doctor')

router.route('/').get(getDoctors).post(createDoctor).patch().delete(deleteAllDoctors)


module.exports = router