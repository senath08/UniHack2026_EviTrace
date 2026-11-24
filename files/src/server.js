const app = require('./app');
const initDb = require('./config/initDb');

const PORT = process.env.PORT || 4001;

async function startServer() {
	try {
		await initDb();
		app.listen(PORT, () => {
			console.log(`[${process.env.INSTITUTION_ID}] ${process.env.INSTITUTION_NAME} running on http://localhost:${PORT}`);
		});
	} catch (error) {
	console.error(`[${process.env.INSTITUTION_ID}] Failed to start server:`, error);
	process.exit(1);
	}
}

startServer();


