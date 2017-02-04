const express = require('express')
const hbs = require('hbs')

const app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.render('index.hbs')
})

app.listen(3000, function() {
  console.log('App started! Listening on port 3000!')
})
