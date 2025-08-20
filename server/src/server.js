const app = require('./app');  // import express app
const { prisma } = require('./prisma');
const cors = require('cors');
const allowedOrigins = [
  'https://ecommerce-git-main-kartikeys-projects-2fe7d9d3.vercel.app',
  'https://ecommerce-two-ebon-61.vercel.app',
  'https://ecommerce-kwk40ufw9-kartikeys-projects-2fe7d9d3.vercel.app'
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
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
