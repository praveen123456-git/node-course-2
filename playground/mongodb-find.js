//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//var obj = new ObjectID();
//console.log(obj);
// var user = {name:'adas',age:34};
// var {age} = user;
// console.log(age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
    return  console.log(err);
    }
    console.log('Connected to MongoDB Server.');

    db.collection('Todos').find().count().then((count)=>{
      console.log(`Todos ${count}`);
  //    console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch documents',err);
    });

    //db.close(); // mongo DB close connection
});
