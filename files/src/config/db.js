const { Pool } = require('pg');

const pool = new Pool ({
	connectionString: process.env.DATABASE_URL,
});

pool.on('error', (err) => {
	console.error(`[${process.env.INSTITUTION_ID}] Unexpected PostgreSQL error:`, err);
})

module.exports = {
	query: (text, params) => pool.query(text, params),
	pool,
};
