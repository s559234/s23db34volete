var express = require('express');
const Drink_controlers= require('../controllers/Drink');
var router = express.Router();
/* GET Drinks */
router.get('/', Drink_controlers.Drink_view_all_Page );
module.exports = router;

/* GET detail Drink page */
router.get('/detail', Drink_controlers.Drink_view_one_Page);

/* GET create Drink page */
router.get('/create', Drink_controlers.Drink_create_Page);


/* GET create update page */
router.get('/update', Drink_controlers.Drink_update_Page);

router.get('/delete', Drink_controlers.Drink_delete_Page);