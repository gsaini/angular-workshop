angular.module('myApp.phones', ['ngNewRouter'])
  .controller('PhonesController', ['$routeParams', '$http', DetailController]);

function DetailController ($routeParams, $http) {
    this.id = $routeParams.id;
    
    this.list = [
    {
        "age": 0, 
        "id": "motorola-xoom-with-wi-fi", 
        "imageUrl": "img/phones/1.jpg", 
        "name": "Motorola XOOM\u2122 with Wi-Fi", 
        "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
    {
        "age": 1, 
        "id": "motorola-xoom", 
        "imageUrl": "img/phones/2.jpg", 
        "name": "MOTOROLA XOOM\u2122", 
        "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
    }, 
    {
        "age": 2, 
        "carrier": "AT&T", 
        "id": "motorola-atrix-4g", 
        "imageUrl": "img/phones/3.jpg", 
        "name": "MOTOROLA ATRIX\u2122 4G", 
        "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
    }, 
    {
        "age": 3, 
        "id": "dell-streak-7", 
        "imageUrl": "img/phones/4.jpg", 
        "name": "Dell Streak 7", 
        "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
    }, 
    {
        "age": 4, 
        "carrier": "Cellular South", 
        "id": "samsung-gem", 
        "imageUrl": "img/phones/5.jpg", 
        "name": "Samsung Gem\u2122", 
        "snippet": "The Samsung Gem\u2122 brings you everything that you would expect and more from a touch display smart phone \u2013 more apps, more features and a more affordable price."
    }, 
    {
        "age": 5, 
        "carrier": "Dell", 
        "id": "dell-venue", 
        "imageUrl": "img/phones/6.jpg", 
        "name": "Dell Venue", 
        "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
    }, 
    {
        "age": 6, 
        "carrier": "Best Buy", 
        "id": "nexus-s", 
        "imageUrl": "img/phones/7.jpg", 
        "name": "Nexus S", 
        "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
    }, 
    {
        "age": 7, 
        "carrier": "Cellular South", 
        "id": "lg-axis", 
        "imageUrl": "img/phones/8.jpg", 
        "name": "LG Axis", 
        "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
    }
]

    
    var pageLoad = function(){
        $http.get('data/phones.json').then(function(response){
            this.list = response.data;
        });
    };
    
}