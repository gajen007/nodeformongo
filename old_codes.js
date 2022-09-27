
//the code below, terminal will be in waiting....
// MongoClient.connect(dbUrl)
//   .then(function (dbase) { // <- db as first argument
//     var dbo = dbase.db("users_of_gajen");
//     dbo.collection('users').find().toArray((err, results) => {
//         if(err) throw err;
//         results.forEach((val)=>{

//             console.log(val);
//         });
//     })
//   })
//   .catch(function (err) {
//     console.log(err);
//   })