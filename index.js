const MongoClient = require('mongodb').MongoClient;

async function main(){
    const dbUrl = 'mongodb://127.0.0.1:27017/users_of_gajen';
    const client = new MongoClient(dbUrl);
    try {
        await client.connect();
        //await listDatabases(client);
        //await insertDocument(client,{"first_name":"Pirabu","last_name":"Chandran","age":33});
        //await findUserByName(client,"Gajen"); //How to find by "Object-ID"..?
        await updateFirstNameByFirstName(client,"Gajen","Jayanthy"); //How to find by "Object-ID" then Update..?
        await deleteUserByFirstName(client,"Pirabu"); //How to find by "Object-ID" then Delete..?
    } 
    catch (e) { console.error(e); }
    finally{ await  client.close(); }
}

main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    var dbNames = [];
    databasesList.databases.forEach(db => {
        dbNames.push(db.name);
        //console.log(`-${db.name}`);   //explore this code..!
    });
    console.log(dbNames);
}

//to insert new document into a collection
async function insertDocument(client,documentObject){
    const result = await client.db("users_of_gajen").collection("users").insertOne(documentObject);
    if(result.acknowledged){
        console.log("User inserted successfully!");
    }
}

//to find a user by a key-value
async function findUserByName(client,userFirstName){
    const result = await client.db("users_of_gajen").collection("users").findOne({first_name:userFirstName});
    console.log(result);
}

async function updateFirstNameByFirstName(client,oldFname,newFname){
    const result = await client.db("users_of_gajen").collection("users").findOneAndUpdate(
        { first_name:oldFname },
        { $set:{first_name:newFname}},
        { returnOriginal: false },
      );
    console.log(result);
}

async function deleteUserByFirstName(client,fName){
    const result = await client.db("users_of_gajen").collection("users").findOneAndDelete({ first_name:fName });
    console.log(result);
}