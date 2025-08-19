const app = require('./app');  // import express app
const { prisma } = require('./prisma');
const cors = require('cors');


const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
async function testDB() {
    try {
        await prisma.$connect();
        console.log('✅ Connected to Postgres DB!');
    } catch (err) {
        console.error('❌ Failed to connect to DB:', err);
    }
}

testDB();
