//Initiallising Global variables and node modules
var massive = require("massive");
var connString = "postgres://lvrdoxuc:VwTN5BlZm6blo02-JtmnhI0YbQBC6TtO@elmer.db.elephantsql.com:5432/lvrdoxuc";

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
//var massiveInstance = massive.connectSync({ connectionString: connectionString })
//app.set('db', massiveInstance);
//var db = app.get('db');
//console.log(massiveInstance);

var db = massive.connectSync({ connectionString: connString });

var newUser = {
    email: "test@test.com",
    first: "Joe",
    last: "Test"
};

db.users.save(newUser, function (err, result) {
    console.log(result);
});

//find by id first:

db.users.find(1, function (err, res) {
    console.log("Find By Id");
    console.log(res);
});

//let's find by email:
db.users.find({ email: "test@test.com" }, function (err, res) {
    console.log("Search By Attribute");
    console.log(res);
});