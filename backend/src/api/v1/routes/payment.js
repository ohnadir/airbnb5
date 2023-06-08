const router = require('express').Router();
const { makePayment, paymentApi } = require("../payment/controller");

router.post('/process',  makePayment);
router.get('/api', paymentApi)

module.exports = router;