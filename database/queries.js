const db = require('./connection')

function getScheduleData() {
  return db('breakouts').select('*')
}

module.exports = {
  getScheduleData
}
