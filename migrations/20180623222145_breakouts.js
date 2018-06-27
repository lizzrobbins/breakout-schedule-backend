// breakout - text
// instructor - text
// room - text
// time - time?


exports.up = function(knex, Promise) {
  return knex.schema.createTable('breakouts', (table) => {
    table.increments()
    table.text('breakout')
    table.text('instructor')
    table.text('room')
    table.time('time')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('breakouts')
};
