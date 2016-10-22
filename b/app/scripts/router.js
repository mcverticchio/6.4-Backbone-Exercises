var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/person');
var views = require('./views/person');

var PersonRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
  },
  initialize: function(){
    this.collection = new models.PersonCollection();
    this.collection.fetch();
  },
  index: function(){
    var addPersonForm = new views.PersonAddForm({collection: this.collection});

    $('.app')
      .html(addPersonForm.render().el)

  }
});

var router = new PersonRouter();

module.exports = router;
