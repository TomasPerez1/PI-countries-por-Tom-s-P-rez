const { Router } = require('express');
const {Country, Activity } = require('../db.js')
const router = Router();
const countriesRoutes = require('./countriesRoutes/countriesRoutes.js')
const activitiesRoutes = require('./activitiesRoutes/activitiesRoutes.js')

router.use('/countries', countriesRoutes)
router.use('/activities', activitiesRoutes)

module.exports = router;
