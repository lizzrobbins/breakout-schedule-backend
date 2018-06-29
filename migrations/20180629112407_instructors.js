// instructor - text


exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructors', (table) => {
    table.increments()
    table.text('instructor')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instructors')
};
