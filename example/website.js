// website.js
// A hello world website using standard greetings.

var $ = require('jQuery');
var greets = require('example/greetings');

$('#hello').css({
  backgroundColor:'#93c3cd',padding:'1em',float:'left',color:'white'
}).text(greets.default_greeting);
