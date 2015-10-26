//util
var _ = require('lodash');
//mithril framework
var m = require('mithril');
//some other ui components
var mdl = require('material-design-lite/material.min.blue_theme.css');
var mdljs = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');
var stylesheet = require('./main.css');

//mithril components
//here is a todo demo
var todo = require('./todo.js');


//mdl component
//html <button class="mdl-button mdl-js-button mdl-button--raised">Save</button>
var mdlComponent = {
	controller: function() {
		return {icon: 'add'}
	},
	view: function(ctl) {
		console.log(ctl)
		return m('BUTTON.mdl-button mdl-js-button mdl-button--raised mdl-button--accent', [
				m('I.material-icons', ctl.icon)
			])
	}
};


//set up routes 
//the url begins with #
m.route.mode = 'hash';

m.route(document.body, '/', {
	'/': todo,
	'/others': 'other components',
	'/mdl': mdlComponent,//a mdl componet demo
});



