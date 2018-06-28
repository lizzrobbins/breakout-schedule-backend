const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const schedule = require('./routes/schedule')

app.set('view engine', 'hbs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', schedule)

app.listen(port, () => {
  console.log('hi there!')
})
