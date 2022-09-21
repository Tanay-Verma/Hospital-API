const router = require('express').Router()
const {getAllDoctors, createDoctor, deleteAllDoctors} = require('../controllers/doctor')

router.route('/').get(getAllDoctors).post(createDoctor).patch().delete(deleteAllDoctors)

module.exports = router