const router = require('express').Router();
const { places, place, searchPlace } = require('../place/controller');
const { placeValidator, updateValidator, id } = require('../place/validator');
const validationResult = require('../validators');


router.get('/', places);
router.get('/:id', place);
router.get('/search', searchPlace);
module.exports = router;