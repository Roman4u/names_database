
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("names").del()
    .then(function () {
      // Inserts seed entries
      return knex("names").insert([
        {first_name: "Andy", last_name: "Park"},
        {first_name: "Yusuke", last_name: "Yamada"},
        {first_name: "Yan", last_name: "Fan"},
        {first_name: "Jay", last_name: "Montojo"},
        {first_name: "Felipe", last_name: "Curry"},
        {first_name: "Wesley", last_name: "Lee"}
      ]);
    });
};
