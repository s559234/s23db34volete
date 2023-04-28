var express = require('express');
const Drink_controlers= require('../controllers/Drink');
var router = express.Router();
/* GET Drinks */
router.get('/', Drink_controlers.Drink_view_all_Page );
module.exports = router;



// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
       return next();
    }
       req.session.returnTo = req.originalUrl;
       res.redirect("/login");
}
   

/* GET detail Drink page */
router.get('/detail',secured ,Drink_controlers.Drink_view_one_Page);

/* GET create Drink page */
router.get('/create', secured,Drink_controlers.Drink_create_Page);
/* GET create update page */
router.get('/update',secured, Drink_controlers.Drink_update_Page);

router.get('/delete',secured, Drink_controlers.Drink_delete_Page);