var $ = require('jquery');
var Backbone = require('backbone');

//TEMPLATE
var postListTemplate = require('../../templates/postListing.hbs');
var blogDisplayTemplate = require('../../templates/blogDisplay.hbs');
// var modalTemplate = require('../../templates/modal.hbs');



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
  render: function(){
    var context = this.model.toJSON();
    var renderedTemplate = this.template(context);
    this.$el.html(renderedTemplate);

    return this;
  }
});



var PostDisplayView = Backbone.View.extend({
  tagName: 'div',
  className: 'blogListing',
  template: blogDisplayTemplate,
  events: {
    'click .delete': 'complete'
  },
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
  },
  render: function(){
    var context = this.model.toJSON();
    this.$el.html(this.template(context));

    return this;
  },
  complete: function(){
    confirmModal.model = this.model;
    confirmModal.show();
  }
});



var PostConfirmModal = Backbone.View.extend({
  el: $('#confirm-delete')[0],
  events: {
    "click .btn-primary": 'delete',
  },
  hide: function(){
    this.$el.modal('hide');
  },
  show: function(){
    this.$el.modal('show');
  },
  delete: function(){
    this.model.destroy();

    this.hide();
  }
});

var confirmModal = new PostConfirmModal();

module.exports = {
  PostListing: PostListing,
  PostItemView: PostItemView,
  PostDisplayView: PostDisplayView
}
