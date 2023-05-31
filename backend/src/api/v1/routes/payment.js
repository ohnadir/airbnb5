const router = require('express').Router();
const { makePayment } = require("../payment/controller");

router.post('/process',  makePayment);

module.exports = router;