'use strict';

const Knex = require('knex');

const createTable = async (config) => {
  // Connect to the database
  config.host = `/cloudsql/${config.connectionName}`;
  const knex = Knex({client: 'pg', connection: config});

  // Create the "names" table
  try {
    await knex.schema.createTable('names', (table) => {
      table.increments('id');
      table.string('name')
    });

    console.log(`Successfully created 'names' table.`);
    return knex.destroy();
  } catch (err) {
    console.error(`Failed to create 'names' table:`, err);
    if (knex) {
      knex.destroy();
    }
  }
};

require('yargs')
  .command(
    '* <user> <password> <database> <connectionName>',
    'Create a "names" table',
    {},
    createTable
  )
  .help().argv;'use strict';
