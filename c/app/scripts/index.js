var Backbone = require('backbone');
var $ = require('jquery');
require('./router');

//DOM READY

$(function(){
  Backbone.history.start();
});
