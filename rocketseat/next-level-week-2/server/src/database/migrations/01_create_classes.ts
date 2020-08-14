import Knex from 'knex';

// alteracoes no banco -- commit
export async function up(knex: Knex) {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();

    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    // relacionamento da aula com o professor
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// rollback
export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}

