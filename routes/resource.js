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
router.post('/Drink', Drink_controller.Drink_create_post);
// DELETE request to delete Drink.
router.delete('/Drink/:id', Drink_controller.Drink_delete);
// PUT request to update Drink.
router.put('/Drink/:id', Drink_controller.Drink_update_put);
// GET request for one Drink.
router.get('/Drink/:id', Drink_controller.Drink_detail);
// GET request for list of all Drink items.
router.get('/Drink', Drink_controller.Drink_list);
module.exports = router;