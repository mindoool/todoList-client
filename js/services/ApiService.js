app.service('ApiService',['$http', function($http) {
    this.getData = function (callback){
        $http({
            method: 'GET',
            url:'http://ggnn-cmyk.appspot.com/lectures',
        }).success(callback);
    };
    ;}])