var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/post');
var views = require('./views/post');

var PostRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
  },
  initialize: function(){
    this.collection = new models.PostCollection();
    this.collection.fetch().then(function(){
      this.collection.each(function(model){
        model.destroy();
      })
    });

  },
  index: function(){
    var addPostForm = new views.PostAddForm({collection: this.collection});

    $('.app')
      .html(addPostForm.render().el)
  }
});

var router = new PostRouter();

module.exports = router;
