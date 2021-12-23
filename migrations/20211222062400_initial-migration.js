exports.up = function(knex) {
  return knex.schema.createTable("names", (table) => {
    table.increments().index();
    table.text("first_name").notNullable();
    table.text("last_name").notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("names");
};
