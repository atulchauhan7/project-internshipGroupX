const express = require('express');
const router = express.Router();

const collegeController = require('../controller/collegeController')
const internController = require('../controller/internController')



router.post('/colleges', collegeController.createCollege)

router.get('/collegeDetails',collegeController.collegeDetails)

router.post('/interns',internController.createIntern)

module.exports =router;