const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', async (req, res) => {
	try {
		const dbCheck = await db.query('SELECT current_database(), NOW()');
		res.json({
			status: 'OK',
			institutionId: process.env.INSTITUTION_ID,
			institutionName: process.env.INSTITUTION_NAME,
			role: process.env.INSTITUTION_ROLE,
			port: process.env.PORT,
			database: dbCheck.rows[0].current_database,
			dbConnected: true,
			});
		} catch (err) {
			res.status(500).json({ status: 'ERROR', dbConnected: false, error: err.message });
		}
});

module.exports = app;


