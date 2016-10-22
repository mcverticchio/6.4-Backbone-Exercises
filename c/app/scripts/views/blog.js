var Backbone = require ('backbone');
var $ = require ('jquery');

//TEMPLATE
var blogListingTemplate = ('../../templates/index.hbs');
var blogIndividualTemplate = ('../../templates/blog_individual.hbs');







var BlogListing = Backbone.View.extend({
  tagName: 'div',
  attributes: {
    'class': 'row'
  },
  initialize: function(){
    this.listenTo()
  }
})
