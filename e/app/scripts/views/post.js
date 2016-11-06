var Backbone = require('backbone');
var $ = require('jquery');

//templates
var postAddTemplate = require('../../templates/postAddForm.hbs');
var postListTemplate = require('../../templates/postListing.hbs');
var displayBlogTemplate = require('../../templates/blogDisplay.hbs');

var PostAddForm = Backbone.View.extend({
  tagName: 'form',
  classNam: 'well',
  template: postAddTemplate,
  events: {
    'submit': 'add'
  },
  render: function(){
    var context = this.model ? this.model.toJSON() : {};
    this.$el.html(this.template(context));

    return this;
  },
  add: function(e){
    e.preventDefault();

    var newPost = {
      title: $('#title').val(),
      body: $('#body').val()
    };

    this.collection.create(newPost);

    $('#title').val('');
    $('#body').val('');
  }
});

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
  className: 'col-md-6',
  template: postListTemplate,
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));

    return this;
  }
});

var PostDisplayView = Backbone.View.extend({
  tagName: 'div',
  className: 'blogListing',
  template: displayBlogTemplate,
  events: {
    'click .editButton': 'logIt'
  },
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));

    return this;
  },
  logIt: function(){
    alert("You clicked the button")
  }
})

module.exports = {
  PostAddForm: PostAddForm,
  PostListing: PostListing,
  PostItemView: PostItemView,
  PostDisplayView: PostDisplayView
}
