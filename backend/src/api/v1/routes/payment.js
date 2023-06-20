const router = require('express').Router();
const { processPayment} = require("../payment/controller");

router.post('/process',  processPayment);

module.exports = router;