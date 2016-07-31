"use strict";

var $ = require('jquery'),
		Backbone = require('backbone'),
		App = require('./App'),
		HomeView = require('./View/HomeView')
		;


Backbone.$ = $;

module.exports = Backbone.Router.extend({

    routes: {
        "": "home",
    },

    initialize: function(options) {
    	this._App = options.App
  	},

    home: function () {
     this._App.showView(new HomeView().render());
    }
});