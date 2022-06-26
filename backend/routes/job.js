const JobRoute = require('express').Router()
const JobController = require('../controllers/jobsController')
const {authentication} = require('../middleware/auth')

JobRoute.get('/',authentication,JobController.getAllJob);
JobRoute.get('/info/:id',authentication,JobController.getJobInformationById);

module.exports = JobRoute