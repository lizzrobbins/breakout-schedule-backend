// breakout - text
// instructor - text
// room - text
// time - time?

exports.seed = function(knex, Promise) {
  return knex('breakouts').del()
    .then(function () {
      return knex('breakouts').insert([
        {
          'breakout': 'Intro to JS',
          'instructor': 'Mann',
          'room': 'CR1',
          'time': '11:00:00'
        },
        {
          'breakout': 'Intro to Express',
          'instructor': 'Casey',
          'room': 'CR2',
          'time': '13:00:00'
        },
        {
          'breakout': 'Sorting Algorithms',
          'instructor': 'Sean',
          'room': 'CR3',
          'time': '09:00:00'
        }
      ]);
    });
};
