const router = require('express').Router();
const { mapApi } = require("../map/controller");

router.get('/api',  mapApi);

module.exports = router;