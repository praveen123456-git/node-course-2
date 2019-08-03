const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
  console.log(result);
});

Todo.findByIdAndRemove('5d457966d3145b34aa2532dd').then((todo)=>{
  console.log(todo);
});
