var $ = require('jquery');
var Backbone = require('backbone');

//TEMPLATE
// var postAddTemplate = require('../../templates/index.hbs');
var postListTemplate = require('../../templates/postListing.hbs');
var blogDisplayTemplate = require('../../templates/blogDisplay.hbs');

// var PostAddForm = Backbone.View.extend({
//   tagName: 'form',
//   className: 'well',
//   template: postAddTemplate,
//   events: {
//     'submit' : 'add'
//   },
//   render: function(){
//     this.$el.html(this.template());
//
//     return this;
//   },
//   add: function(e){
//     e.preventDefault();
//
//     var newPost = {
//       title: $('#title').val(),
//       body: $('#body').val()
//     };
//
//     this.collection.create(newPost);
//     // console.log(newPost);
//     $('#title').val('');
//     $('#body').val('');
//   }
// });


var PostListing = Backbone.View.extend({
  tagName: 'div',
  attributes: {
    'class': 'row'
  },
  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderPostItem);
  },
  renderPostItem: function(post){
    var postItem = new PostItemView({model: post});
    this.$el.append(postItem.render().el);
  }
});

var PostItemView = Backbone.View.extend({
  tagName: 'div',
  className: 'col-md-4 blogColumns',
  template: postListTemplate,
  // events: {
  //   'click .btn-primary' : 'PostDisplayView'
  // },
  render: function(){
    var context = this.model.toJSON();
    var renderedTemplate = this.template(context);
    this.$el.html(renderedTemplate);

    return this;
  },

});

var PostDisplayView = Backbone.View.extend({
  tagName: 'div',
  className: 'contentArea',
  template: blogDisplayTemplate,
  initialize: function(){
    this.listenTo(this.model, 'click', this.render);
  },
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));

    return this;
  }
})

var postDisplayView = new PostDisplayView();

module.exports = {
  // PostAddForm: PostAddForm,
  PostListing: PostListing,
  PostItemView: PostItemView,
  PostDisplayView: PostDisplayView
}
