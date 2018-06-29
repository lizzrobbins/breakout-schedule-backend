// instructor - text


exports.seed = function(knex, Promise) {
  return knex('instructors').del()
    .then(function () {
      return knex('instructors').insert([
        {
          'instructor': 'Nmuta'
        },
        {
          'instructor': 'Brooks'
        },
        {
          'instructor': 'Dan'
        },
        {
          'instructor': 'Chad'
        },
        {
          'instructor': 'Peter'
        }
      ]);
    });
};
