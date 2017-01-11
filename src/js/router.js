"use strict";

var $ = require('jquery'),
  Backbone = require('backbone'),
  App = require('./App'),
  HomeView = require('./View/HomeView');


Backbone.$ = $;

module.exports = class Router extends Backbone.Router {
  constructor(){
    super();
    this.routes = {
      '' : 'home'
    };
    this._bindRoutes();

  }
  home(){
    App.showView(new HomeView().render());
  }
};
