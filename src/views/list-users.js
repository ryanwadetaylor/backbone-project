var $ = require('jquery');
var Backbone = require('backbone');
var listUsersTemplate = require('../templates/list-users.hbs');
var Handlebars = require('hbsfy/runtime');

// App

var App = require('../app');

// View: List Users

var ListUsers = Backbone.View.extend({
  el: $('main'),

  collection: App.Collections.user,

  render: function () {
    var _this = this;
    var userCollection = this.collection;
    Handlebars.registerHelper('if_even', function(conditional, options) {
      if((conditional % 2) == 0) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
      });

    // Fetch Collection from Server
    userCollection.fetch().done(function (users) {
      _this.$el.html(listUsersTemplate(users));

    });
  }
});

module.exports = ListUsers;
