const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || 'postgres://localhost/DYF_db');

module.exports = client