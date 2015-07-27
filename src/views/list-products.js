var $ = require('jquery');
var Backbone = require('backbone');
var listProductsTemplate = require('../templates/list-products.hbs');

// App
var App = require('../app');

// View: List Users
var ListProducts = Backbone.View.extend({
  el: $('main'),

  collection: App.Collections.product,

  render: function () {
    var _this = this;
    var productCollection = this.collection;
    console.log("pc: " + productCollection);

    $('body').removeClass().addClass('products');

    // Fetch Collection from Server
    productCollection.fetch().done(function (products) {
      _this.$el.html(listProductsTemplate(products));
    });
  }
});

module.exports = ListProducts;