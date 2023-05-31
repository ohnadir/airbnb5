const router = require('express').Router();
const { newBooking, bookings, emailBooking } = require('../booking/controller');

router.post('/', newBooking);
router.get('/', bookings);
router.get('/:email', emailBooking);
module.exports = router;