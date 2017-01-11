"use strict";

var $ = require('jquery'),
  Backbone = require('backbone');

Backbone.$ = $;

class App {

  constructor() {
    this.$main = $('main');
  }

  ini(){
    this.router = new Router();
    Backbone.history.start({pushState: true,root: '/test'});
  }

  showView(view) {
    var oldView = this.currentView;
    this.currentView = view;
    this.$main.html(view.el);

    if (oldView)
      oldView.remove();

    this.scrollTop();
  }

  scrollTop(){
    var body = $('html, body');
    body.animate({scrollTop:0}, '500', 'swing', function() {});
  }
}

var app =  new App();
module.exports = app;

var Router = require('./Router');
app.ini();
