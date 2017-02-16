var react = require('react');
var objectAssign = require('object-assign');

// ReactDOM.render(react.createElement('div', {}, types[toType(val)](val)), document.getElementById('app'));

function index(val) { return react.createElement('div', {}, types[toType(val)](val)); }

var types = {
  'object': val => react.createElement(val.type, objectAssign({},val.params), types[toType(val.content)](val.content)),
  'array': val => val.map((el,i)=>react.createElement(el.type, objectAssign({},el.params,{key:i}), types[toType(el.content)](el.content))),
  'number': val => val,
  'string': val => val,
  'boolean': invalidType,
  'function': invalidType,
  'null': val => null
}

function invalidType(val) { console.error('Invalid content type exists in data structure', val); }

// toType function by Angus Croll https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
function toType(obj) { return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase(); }

module.exports = index;
