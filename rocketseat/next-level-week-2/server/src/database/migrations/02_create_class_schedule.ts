import Knex from 'knex';

// alteracoes no banco -- commit
export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable(); // dia da aula
    table.integer('from').notNullable(); // horario de inicio da aula
    table.integer('to').notNullable(); // horario de fim da aula

    // relacionamento da aula com o professor
    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

// rollback
export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}

