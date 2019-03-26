var express= require('express');
var mongodb=require('mongodb');
var assert=require('assert');   
var bodyParser= require('body-parser');


var app = express();

var routes= require('./routes');
app.set('view engine','ejs');
//middlewear za bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

// da bi mogli da koristimo pathing za css
app.use('/public', express.static(__dirname + '/public'));
// da bi mogli da koristimo pathing za css
app.use(express.static(__dirname + '/public'));

app.get('/',routes.home);
app.get('/login',routes.login);
app.get('/zak',routes.zak);
app.get('/zak/data',routes.date);
app.post('/dodaj',routes.dodaj);
app.get('/kalendar',routes.kalendar);
app.get('*',routes.err);
app.delete('/izbrisi/:id',routes.del);










app.listen((process.env.PORT || 5000),()=>{
console.log("startovan server");
});