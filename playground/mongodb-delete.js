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

    //deleteMany
    // db.collection('Todos').deleteMany({text : 'testing'}).then((result)=>{
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text : 'testing'}).then((result)=>{
    //   console.log(result);
    // });

    //findOneAndDelete
     db.collection('Todos').findOneAndDelete({text : '12345'}).then((result)=>{
       console.log(result);
     });

     //db.collection('Users').deleteMany({name: 'Praveen'});

     db.collection('Users').findOneAndDelete({name: 'sdf'});

    //db.close(); // mongo DB close connection
});
