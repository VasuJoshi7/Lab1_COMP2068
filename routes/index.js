var express = require('express');
var router = express.Router();

var data = [
  {imgSrc:"images/webProgramme.jpg",title:"Web Programming",desc:"Some example text some example text. John Doe is an architect and engineer",link:"/COMP1006"},
  {imgSrc: "images/rdms.jpg",title:"Relational Database",desc:"Some example text some example text. John Doe is an architect and engineer",link:"/COMP2003"},
  {imgSrc: "images/serverScript.png",title:"Server-Side Scripting",desc:"Some example text some example text. John Doe is an architect and engineer",link:"/COMP2084"},
  {imgSrc: "images/javascipt.png",title:"JavaScript Frameworks",desc:"Some example text some example text. John Doe is an architect and engineer",link:"/COMP2068"},
  {imgSrc: "images/mobile.png",title:"Mobile and Pervasive Computing",desc:"Some example text some example text. John Doe is an architect and engineer",link:"/COMP3025"}
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome to new online programming world',list:data });
});
router.get('/home', function (req, res, next) {
  res.render('index', { title: 'Welcome to new online programming world',list: data});
});
router.get('/COMP1006', function (req, res, next) {
  var link="https://www.techopedia.com/definition/23898/web-programming"
  var desc="Web programming refers to the writing, markup and coding involved in Web development, which includes Web content, Web client and server scripting and network security. The most common languages used for Web programming are XML, HTML, JavaScript, Perl 5 and PHP. Web programming is different from just programming, which requires interdisciplinary knowledge on the application area, client and server scripting, and database technology."
  res.render('COMP1006', { title: 'Intro to Web Programming',desc:desc,ref:link });
});
router.get('/COMP2003', function (req, res, next) {
  var desc = "A relational database is a set of formally described tables from which data can be accessed or reassembled in many different ways without having to reorganize the database tables. The standard user and application programming interface (API) of a relational database is the Structured Query Language (SQL). SQL statements are used both for interactive queries for information from a relational database and for gathering data for reports."
  var link ="https://searchdatamanagement.techtarget.com/definition/relational-database"
  res.render('COMP2003', { title: 'Relational Database',desc:desc,ref:link });
});
router.get('/COMP2084', function (req, res, next) {
  var desc="Server-side scripting is a method of designing websites so that the process or user request is run on the originating server. Server-side scripts provide an interface to the user and are used to limit access to proprietary data and help keep control of the script source code. Below is an example of client-side scripts vs. server-side scripts."
  var link = "https://www.computerhope.com/jargon/s/server-side-scripting.htm"
  res.render('COMP2084', { title: 'Server-Side Scripting with ASP.NET',desc:desc,ref:link });
});
router.get('/COMP2068', function (req, res, next) {
  var desc="A JavaScript framework is an application framework written in JavaScript. It differs from a JavaScript library in its control flow:[1] A library offers functions to be called by its parent code, whereas a framework defines the entire application design.[2] A developer does not call a framework; instead it is the framework that will call and use the code in some particular way. Some JavaScript frameworks follow the model–view–controller paradigm designed to segregate a web application into orthogonal units to improve code quality and maintainability. Examples: AngularJS, Ember.js, Meteor.js."
  var link="https://en.wikipedia.org/wiki/JavaScript_framework"
  res.render('COMP2068', { title: 'JavaScript Frameworks',desc:desc,ref:link });
});
router.get('/COMP3025', function (req, res, next) {
  var desc="Pervasive computing, also called ubiquitous computing, is the growing trend of embedding computational capability (generally in the form of microprocessors) into everyday objects to make them effectively communicate and perform useful tasks in a way that minimizes the end user's need to interact with computers as computers. Pervasive computing devices are network-connected and constantly available."
  var link = "https://internetofthingsagenda.techtarget.com/definition/pervasive-computing-ubiquitous-computing"
  res.render('COMP3025', { title: 'Mobile and Pervasive Computing',desc:desc,ref:link  });
});

module.exports = router;
