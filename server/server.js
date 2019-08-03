var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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


var User = mongoose.model('User',{
  Name:{
    type: String,
    required:true,
    minlength:1,
    trim:true
  },
  emailId:{
    type: String,
    required:true,
    minlength:15,
    trim:true
  },
  MobileNo:{
    type: Number,
    required:true,
    minlength:10,
    maxlength:10
  }
});
var newUser = new User({
  Name:'Praveen',
  emailId:'mp07456@gmail.com',
  MobileNo:'9845253398'
}
);


newUser.save().then((doc)=>{
   console.log('Saved User', doc);
}, (e) => {
   console.log('Unable to save User',e);
});
