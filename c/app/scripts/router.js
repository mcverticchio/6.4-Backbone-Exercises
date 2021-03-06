var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/post.js');
var views = require('./views/post.js');

var PostRouter = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'post/:id/' : 'displayBlog',
    // 'post/:id/edit/': 'editBlog'
  },

  initialize: function(){
    this.collection = new models.PostCollection();

  },

  index: function(){
    var postListing = new views.PostListing({collection: this.collection});
    this.collection.fetch();

    $('.app')
      .html(postListing.render().el);
  },

  displayBlog: function(id){

    var blog = this.collection.get(id);
    var blogDetail = new views.PostDisplayView({model: blog});

    $('.app').html(blogDetail.render().el);
  },

  // editBlog: function(id){
  //    var blogForm
  //
  // }
});



var router = new PostRouter();

module.exports = router;
