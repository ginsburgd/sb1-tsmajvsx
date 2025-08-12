require("dotenv").config();
const { neon } = require("@neondatabase/serverless");

async function verifyDatabase() {
  try {
    console.log("🔍 Checking database connection...");
    
    if (!process.env.DATABASE_URL) {
      console.error("❌ DATABASE_URL environment variable is not set");
      process.exit(1);
    }
    
    console.log("✅ DATABASE_URL found in environment");
    
    const sql = neon(process.env.DATABASE_URL);
    
    // Test basic connection
    console.log("🔗 Testing database connection...");
    const result = await sql`SELECT version()`;
    console.log("✅ Database connected successfully!");
    console.log("📊 PostgreSQL version:", result[0].version);
    
    // Test creating a simple table
    console.log("🏗️  Testing table creation...");
    await sql`
      CREATE TABLE IF NOT EXISTS test_table (
        id SERIAL PRIMARY KEY,
        name TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `;
    console.log("✅ Table creation successful!");
    
    // Test inserting data
    console.log("📝 Testing data insertion...");
    await sql`
      INSERT INTO test_table (name) 
      VALUES ('test-connection') 
      ON CONFLICT DO NOTHING
    `;
    console.log("✅ Data insertion successful!");
    
    // Test querying data
    console.log("🔍 Testing data query...");
    const testData = await sql`SELECT * FROM test_table LIMIT 5`;
    console.log("✅ Data query successful!");
    console.log("📋 Sample data:", testData);
    
    // Clean up test table
    console.log("🧹 Cleaning up test table...");
    await sql`DROP TABLE IF EXISTS test_table`;
    console.log("✅ Cleanup successful!");
    
    console.log("\n🎉 All database tests passed! Your Neon database is working correctly.");
    
  } catch (error) {
    console.error("❌ Database verification failed:");
    console.error("Error:", error.message);
    
    if (error.message.includes("password authentication failed")) {
      console.error("💡 Tip: Check your DATABASE_URL credentials");
    } else if (error.message.includes("does not exist")) {
      console.error("💡 Tip: Check your database name in the DATABASE_URL");
    } else if (error.message.includes("ENOTFOUND")) {
      console.error("💡 Tip: Check your database host in the DATABASE_URL");
    }
    
    process.exit(1);
  }
}

verifyDatabase();