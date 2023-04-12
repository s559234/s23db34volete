var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){console.log("Connection to DB succeeded")});

var resourceRouter = require('./routes/resource');
var Drink = require("./models/Drink");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var drinksRouter = require('./routes/Drinks');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
//var resourceRouter = require('./routes/resource');
//var resourceRouter = require('./routes/resource');

// We can seed the collection if needed on server start



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Drinks', drinksRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
app.use('/Drinks',Drink);

async function recreateDB(){
  // Delete everything
  await Drink.deleteMany();
  
  let instance1 = new
  Drink({ _id: new mongoose.Types.ObjectId(), drink_type: "Coke", drink_size: "large", drink_cost: 300 }, );
  instance1.save().then( function(err,doc) {
    if(err) return console.error(err);
    console.log("First object saved")
    });
  let instance2 = new
    Drink( { _id: new mongoose.Types.ObjectId(), drink_type: "Pepsi", drink_size: "med", drink_cost: 150 },);
    instance2.save().then( function(err,doc) {
      if(err) return console.error(err);
      console.log("Second object saved")
      });
  let instance3 = new
      Drink({ _id: new mongoose.Types.ObjectId(), drink_type: "Fanta", drink_size: "small", drink_cost: 100 });
      instance3.save().then( function(err,doc) {
        if(err) return console.error(err);
        console.log("Third object saved")
        });
  (async () => {
    let output1,output2,output3;
    try {
      output1 = await instance1.save();
      output2= await instance2.save();
      output3 = await instance3.save();
      console.log(output1,output2,output3);
    } catch (error) {
      console.error(error);
    }
  })();
  
}
 
let reseed = true;
if (reseed) { recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

