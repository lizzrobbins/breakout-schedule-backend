const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')

app.get('/', (request, response) => {
  response.send('testing testing 123')
})

app.listen(port, () => {
  console.log('hi there!')
})
