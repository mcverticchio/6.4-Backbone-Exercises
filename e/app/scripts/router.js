var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/post');
var views = require('./views/post');

var PostRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'post/:id/' : 'displayBlog'
  },
  initialize: function(){
    this.collection = new models.PostCollection();
    this.collection.fetch();
  },
  index: function(){
    var addPostForm = new views.PostAddForm({collection: this.collection});
    var postListing = new views.PostListing({collection: this.collection});

    $('.app')
      .html(addPostForm.render().el)
      .append(postListing.render().el)
  },
  displayBlog: function(id){
    var blog = this.collection.get(id);
    var blogDetail = new views.PostDisplayView({model: blog});

    $('.app').html(blogDetail.render().el);
  }
});

var router = new PostRouter();

module.exports = router;
