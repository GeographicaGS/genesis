"use strict";
var BaseView = require('./BaseView'),
  template = require('../template/home.html');

module.exports = class HomeView extends BaseView {

  constructor(options){
    super(options);
    // Here some code
  }

  events(){
    return {};
  }

  render() {
    console.log('here');
    this.$el.html(template({'message':'Hello world'}));
    return this;
  }
}
