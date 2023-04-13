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
};// List of all Drinks

// List of all Drink
exports.Drink_list = async function(req, res) {
    try{
    theDrink = await Drink.find();
    res.send(theDrink);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };



// VIEWS
// Handle a show all view
exports.Drink_view_all_Page = async function(req, res) {
    try{
    theDrink = await Drink.find();
    res.render('Drink', { title: 'Drinks Search Results', results: theDrink });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // Handle Costume create on POST.
exports.Drink_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Drink();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Drink_type":"goat", "cost":12, "size":"large"}
    document.drink_type = req.body.drink_type;
    document.drink_size = req.body.drink_size;
    document.drink_cost = req.body.drink_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};