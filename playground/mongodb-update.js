//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
    return  console.log(err);
    }
    console.log('Connected to MongoDB Server.');

    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('5d452ebd18486f3a74fef686')
    // }, {
    //    $set:{
    //      completed: true
    //    }
    // }, {
    //   returnOriginal: false
    // }).then((result)=>{
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5d453c49d3145b34aa2518ca')
    }, {
       $set:{
         name: 'Praveen'
       },
       $inc:{
         age:1
       }
    }, {
      returnOriginal: false
    }).then((result)=>{
      console.log(result);
    });

    //db.close(); // mongo DB close connection
});
