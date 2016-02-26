angular.module('myApp.detail', ['ngNewRouter'])
  .controller('DetailController', ['$routeParams', DetailController]);

function DetailController ($routeParams) {
  this.id = $routeParams.id;
}