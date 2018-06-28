const express = require('express')
const queries = require('../database/queries')
const router = express.Router()

router.get('/', (request,response) => {
  queries.getScheduleData().then(breakouts => {
    response.json({breakouts})
  })
})

module.exports = router
