var myApp = angular.module('myApp', []);

// on page load do all of this!
myApp.controller('myLifeController', function (){
    var life = this;
    life.message = 'Hello life.message';
});