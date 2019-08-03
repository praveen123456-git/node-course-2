const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id ='5d456934ee86db3cb0b602fe';

 if(!ObjectID.isValid(id)){
   console.log('id not valid');
 }
// Todo.find({
//   _id:id
// }).then((todos)=>{
//    console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todos)=>{
//    console.log('Todo', todos);
// });

Todo.findById(id).then((todo)=>{
  console.log('Todo by Id', todo);
});
