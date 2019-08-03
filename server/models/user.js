var mongoose = require('mongoose');

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

module.exports = {User};
