const router = require('express').Router();

// api router will mount other routers for all our resources
router.use('/products', require('./product/routes'));

module.exports = router;