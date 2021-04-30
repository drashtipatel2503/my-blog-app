var mongoose = require('mongoose');

module.exports = mongoose.model('Blog', {
   title : {type : String, default: ''},
   content : {type : String, default: ''}, 
   w_id : {type : String, default: ''},
});