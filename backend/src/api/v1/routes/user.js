const router = require('express').Router();
const { Register, Login, LoadUser, update, users, user, putUserInfo, changePassword } = require('../user/controller');
const { userValidator } = require('../user/validators');
const validationResult = require('../validators');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.post('/signup', Register);
router.post('/login', Login);
router.patch('/update/:id', isAuthenticatedUser, update );
router.get('/me/:token', LoadUser);
router.get('/', authorizeRoles, users);
router.get('/:id', authorizeRoles, user);
router.patch('/change/:id', isAuthenticatedUser,  changePassword);
router.put('/info/:id', isAuthenticatedUser, putUserInfo);

module.exports = router