var $ = require('jquery');
var Backbone = require('backbone');

//TEMPLATE
var personAddTemplate = require('../../templates/index.hbs');


var PersonAddForm = Backbone.View.extend({
  tagName: 'form',
  className: 'well',
  template: personAddTemplate,
  events: {
    'submit' : 'add'
  },
  render: function(){
    this.$el.html(this.template());

    return this;
  },
  add: function(e){
    e.preventDefault();

    var newPerson = {
      firstName: $('#firstName').val(),
      lastName: $('#lastName').val(),
      address: $('#address').val(),
      phone: $('#phone').val()
    };

    this.collection.create(newPerson);
    // console.log(newPost);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#address').val('');
    $('#phone').val('');
  }
});

module.exports = {
  PersonAddForm: PersonAddForm
}
