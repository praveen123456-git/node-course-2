var express = require('express');
var bodyparser = require('body-parser');
var {mongoose} = require('./db/mongoose');
var {Todo}  = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyparser.json());

app.post('/todos',(req,res)=>{
    //console.log(req.body);
    var todo = new Todo({
      name: req.body.name
    });

    // TODO:
    todo.save().then((doc)=>{
      res.send(doc);
    }, (e)=>{
      res.status(400).send(e);
    })
});


app.get('/todos',(req,res)=>{
     Todo.find().then((todos)=>{
       res.send({todos});
     }, (e) => {
       res.status(400).send(e);
     });
});

app.listen(3000, ()=>{
  console.log('Started on port 3000');
});

module.exports = {app};
// var Todo = mongoose.model('Todo',{
//   text:{
//     type: String,
//     required:true,
//     minlength:1,
//     trim:true
//   },
//   completed:{
//     type: Boolean,
//     default: false
//   },
//   completedAt:{
//     type: Number,
//     default:null
//   }
// });

// var newTodo = new Todo({
//   text:'Steed 26 Solutions',
//   completed: true,
//   completed At:123
// });

// var newTodo = new Todo({
//   text:'Praveen'
// });
//
//
// newTodo.save().then((doc)=>{
//    console.log('Saved Todo', doc);
// }, (e) => {
//    console.log('Unable to save Todo',e);
// });


//
// var newUser = new User({
//   Name:'Praveen',
//   emailId:'mp07456@gmail.com',
//   MobileNo:'9845253398'
// }
// );
//
//
// newUser.save().then((doc)=>{
//    console.log('Saved User', doc);
// }, (e) => {
//    console.log('Unable to save User',e);
// });
