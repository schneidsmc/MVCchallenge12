// gather all routes

// router
const router = require('express').Router();

// apiRoutes
const apiRoutes = require('./api');

// homeRoutes
const homeRoutes = require('./home-routes');

// dashboardRoutes
const dashboardRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
})

// export
module.exports = router;
