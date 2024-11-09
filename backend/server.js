const { MongoClient } = require('mongodb');

async function main(){
    const uri = "mongodb+srv://libAdmin:"+ "process.env.db_pw" + "@libraries.thfcp.mongodb.net/?retryWrites=true&w=majority&appName=Libraries";
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        await  listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}
main().catch(console.error);