"use strict";
var BaseView = require('./BaseView'),
		template = require('../template/home.html')
;

module.exports = BaseView.extend({

  initialize: function(options) {
  	this.render();
  },

  render: function () {
  	this.$el.html(template({'message':'Hola mundo'}));
  	return this;
  }
});