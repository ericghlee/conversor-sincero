const express = require('express')
const hbs = require('hbs')
const app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))
app.use('/public/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/public/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/public/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', function(req, res) {
  res.render('index.hbs')
})

app.listen(3000, function() {
  console.log('App started! Listening on port 3000!')
})
