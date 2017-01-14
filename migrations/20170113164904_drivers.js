'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('drivers', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('email').notNullable().unique();
    table.bigInteger('number').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('drivers');
};
