const router = require('express').Router();
const { newBooking, bookings, booking, emailBooking } = require('../booking/controller');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.post('/', isAuthenticatedUser, newBooking);
router.get('/', authorizeRoles, bookings);
router.get('/:id', isAuthenticatedUser, booking);
router.get('/email/:email', isAuthenticatedUser, emailBooking);
module.exports = router;