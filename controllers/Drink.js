var Drink = require('../models/Drink');
// List of all Drinks
exports.Drink_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Drink list');
};
// for a specific Drink.
exports.Drink_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Drink detail: ' + req.params.id);
};
// Handle Drink create on POST.
exports.Drink_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Drink create POST');
};
// Handle Drink delete form on DELETE.
exports.Drink_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Drink delete DELETE ' + req.params.id);
};
// Handle Drink update form on PUT.
exports.Drink_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Drink update PUT' + req.params.id);
};