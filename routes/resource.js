var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Drink_controller = require('../controllers/Drink');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Drink ROUTES ///
// POST request for creating a Drink.
router.post('/Drinks', Drink_controller.Drink_create_post);
// DELETE request to delete Drink.
router.delete('/Drinks/:id', Drink_controller.Drink_delete);
// PUT request to update Drink.
router.put('/Drinks/:id', Drink_controller.Drink_update_put);
// GET request for one Drink.
router.get('/Drinks/:id', Drink_controller.Drink_detail);
// GET request for list of all Drink items.
router.get('/Drinks', Drink_controller.Drink_list);
module.exports = router;
