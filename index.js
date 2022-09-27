const MongoClient = require('mongodb').MongoClient;

async function main(){
    const dbUrl = 'mongodb://127.0.0.1:27017/users_of_gajen';
    const client = new MongoClient(dbUrl);
    try {
        await client.connect();
        //await listDatabases(client);
        await insertDocument(client);
    }
    catch (e) { console.error(e); }
    finally{ await  client.close(); }
}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    databasesList.databases.forEach(db => {
        console.log(db.name);
        //console.log(`-${db.name}`);   //explore this code..!
    });
}
// could we store the list of databases in to an array, via a callback function assigned to a variable?

//to insert new document into a collection
async function insertDocument(client){
    await client.db("users_of_gajen").collection("users").insertOne({"Name":"Aravin","Age":31});
}

