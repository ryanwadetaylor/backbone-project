var Backbone = require('backbone');

// App
var App = require('./app');
var userCollection = require('./collections/user');
var productCollection = require('./collections/product');

// View: User Form
var UserFormView = require('./views/user-form');
App.Views.UserForm = new UserFormView;

// View: List Users
var ListUsersView = require('./views/list-users');
App.Views.ListUsers  = new ListUsersView;

// View: Home Page
var HomePage = require('./views/home');
App.Views.HomePage = new HomePage;

// View: List Products
var ListProductsView = require('./views/list-products');
App.Views.ListProducts = new ListProductsView;

// View: Product Form
var ProductFormView = require('./views/product-form');
App.Views.ProductForm = new ProductFormView;

// App Router
App.Router = Backbone.Router.extend({

  // Route definitions
  routes: {
    '': 'index',
    'users(/)': 'listUsers',
    'user/add(/)': 'addUser',
    'user/:id/edit(/)': 'addUser',
    'user/:id/delete(/)': 'deleteUser',
    'products(/)': 'listProducts',
    'product/add(/)': 'addProduct',
    'product/:id/edit(/)': 'addProduct',
    'product/:id/delete(/)': 'deleteProduct',
    '*actions': 'defaultRoute'
  },

  // Route handlers
  index: function() {
    App.Views.HomePage.render();
  },

  listUsers: function() {
    App.Views.ListUsers.render();
  },

  addUser: function(id) {
    App.Views.UserForm.render(id);
  },

  deleteUser: function(id) {
    var user = userCollection.get(id);

    user.destroy().done(function (user) {
      App.router.navigate('/', { trigger: true })
    });
  },

  listProducts: function(id) {
    App.Views.ListProducts.render();
  },

  addProduct: function(id) {
    App.Views.ProductForm.render(id);
    // $('main').append().html('<h1>Product Form</h1>');
  },

  deleteProduct: function(id) {
    console.log('this is the delete Product route')
    var product = productCollection.get(id);

    product.destroy().done(function (product) {
      App.router.navigate('/', { trigger: true })
    });
  },

  defaultRoute: function(actions) {
    console.log('404');
  }
});


// Initiate the router
App.router = new App.Router;

Backbone.history.start();
