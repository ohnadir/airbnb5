const router = require('express').Router();

const { Register, Login, LoadUser } = require('../user/controller');
const { userValidator, updateValidator } = require('../user/validators');
const validationResult = require('../validators');

router.post('/signup',  Register);
router.post('/login', Login);
router.get('/me/:token', LoadUser);

module.exports = router