var Backbone = require ('backbone');
var $ = require ('jquery');
var models = require ('./models/blog.js');
var views = require ('./views/blog.js');


var BlogRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog/:id/': 'getBlog',
  },
  initialize: function(){
    this.collection = new models.BlogCollection();
    this.collection.fetch();
  },
  index: function(){
    var blogListing = new views.BlogListing({collection: this.collection});

    $('.app')
      .append(bookListing.render().el);
  },
  getBlog: function(id){
    var self = this;
    var blog = this.collection.get(id);
  }
});
var router = new BlogRouter();

module.exports = router;
