const router = require('express').Router();
const { places, place, searchPlace, putBookingDate } = require('../place/controller');
const { placeValidator, updateValidator, id } = require('../place/validator');
const validationResult = require('../validators');
const { isAuthenticatedUser } = require('../middlewares/auth')


// router.get('/', places);
router.get('/:id', place);
router.get('/', searchPlace);
router.put('/put/:id', isAuthenticatedUser, putBookingDate);
module.exports = router;