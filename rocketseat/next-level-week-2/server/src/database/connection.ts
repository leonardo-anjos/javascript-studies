import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true, // utilizar null quando n conseguir definir um conteudo padrao p o bd
});

export default db;
