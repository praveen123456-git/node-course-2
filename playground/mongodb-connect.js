//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);
// var user = {name:'adas',age:34};
// var {age} = user;
// console.log(age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
    return  console.log(err);
    }
    console.log('Connected to MongoDB Server.');

   // db.collection('Todos').insertOne({
   //      text:'testing..',
   //      completed: false
   // }, (err, result) => {
   //     if(err) {
   //       return console.log('Unable to insert todo', err);
   //     }
   //
   //     console.log(JSON.stringify(result.ops,undefined,2));
   // });

   // db.collection('Users').insertOne({
   //      name:'Praveen',
   //      age: 25,
   //      location:'test'
   // }, (err, result) => {
   //     if(err) {
   //       return console.log('Unable to insert todo', err);
   //     }
   //
   //     console.log(result.ops[0]._id.getTimestamp());
   // });
    db.close(); // mongo DB close connection
});
