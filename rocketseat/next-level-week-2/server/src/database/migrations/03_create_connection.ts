import Knex from 'knex';

// alteracoes no banco -- commit
export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();

    // relacionamento da aula com o professor
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    // quando houver a conexao
    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable()
  });
}

// rollback
export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}
