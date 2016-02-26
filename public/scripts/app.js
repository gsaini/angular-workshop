angular.module('myApp', ['ngNewRouter', 'myApp.home', 'myApp.detail'])
  .config(function($componentLoaderProvider){
    $componentLoaderProvider.setTemplateMapping(function(name){
        return '../scripts/' + name + '/' + name + '.tpl.html';
    });
    
    
})
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {
    $router.config([
        { path: '/', component: 'home' },
        { path: '/detail/:id', component: 'detail' }
    ]);
};
