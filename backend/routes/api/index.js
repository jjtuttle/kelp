const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

const getLocations = require('./locations.js');
const getLocation = require('./locations.js');

// /api -> components via Router
router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/locations', getLocations);

router.use('/location', getLocation);






module.exports = router;