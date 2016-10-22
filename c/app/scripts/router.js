var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/post.js');
var views = require('./views/post.js');

var PostRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
  },
  initialize: function(){
    this.collection = new models.PostCollection();

  },
  index: function(){
    var addPostForm = new views.PostAddForm({collection: this.collection});
    var postListing = new views.PostListing({collection: this.collection});
    this.collection.fetch();

    $('.app')
      .html(addPostForm.render().el)
      .append(postListing.render().el);
  }
});



var router = new PostRouter();

module.exports = router;
