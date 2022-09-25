var MongoClient = require('mongodb').MongoClient;

var dbUrl = 'mongodb://127.0.0.1:27017/users_of_gajen';

MongoClient.connect(dbUrl, function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("users_of_gajen");
    
    dbo.collection("users").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });

});
