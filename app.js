//Express.js
//returns module.exports from the express library into the variable

//En el proyecto, se va a usar Jade, entonces se debe ejecutar el comando: sudo npm jade install --save
var express = require('express');

var app = express();

app.set('views', './views'); // corresponde al folder donde se van a guardar las views
app.set('view engine', 'jade'); //Para usar el view engine de jade

//Create a route handler for the home path
app.get('/', function(req, res){
	//res.send('Hello world!') //send = write + end
	res.render('index', {
		title: ' My page ' 
	});
});


app.listen(3000);
console.log('Server listening at localhost:3000');