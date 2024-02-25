const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000

// create application/json parser
app.use(bodyParser.json())

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port,()=>console.log(`server is running ${port}`));