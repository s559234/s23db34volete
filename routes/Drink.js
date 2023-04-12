var express = require('express');
const Drink_controlers= require('../controllers/Drink');
var router = express.Router();
/* GET costumes */
router.get('/', Drink_controlers.Drink_view_all_Page );
module.exports = router;