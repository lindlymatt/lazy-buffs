'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('drivers', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('contact').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drivers');
};
