'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('partners', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('company').notNullable();
    table.string('address').notNullable();
    table.string('email').notNullable();
    table.bigInteger('number').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('partners');
};
