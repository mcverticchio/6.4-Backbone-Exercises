var $ = require('jquery');
var Backbone = require('backbone');

//TEMPLATE
var postAddTemplate = require('../../templates/index.hbs');


var PostAddForm = Backbone.View.extend({
  tagName: 'form',
  className: 'well',
  template: postAddTemplate,
  events: {
    'submit' : 'add'
  },
  render: function(){
    this.$el.html(this.template());

    return this;
  },
  add: function(e){
    e.preventDefault();

    var newPost = {
      title: $('#title').val(),
      body: $('#body').val()
    };

    this.collection.create(newPost);
    // console.log(newPost);
    $('#title').val('');
    $('#body').val('');
  }
});

module.exports = {
  PostAddForm: PostAddForm
}
