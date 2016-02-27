angular.module('myApp.detail')
    .service('PhoneService', ['$http', function($http){
        this.data = {};
        
        this.getPhones = function(){
            return this.data.phones;
        };
        
        
        this.loadPhones = function(){
            $http.get('data/phones.json').then(function(response){
                this.data.phones = response;
            })
        };
        
        
    }]);