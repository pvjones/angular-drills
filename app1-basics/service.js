angular.module('myApp1').service('myService', function($q) {

  var defer = $q.defer()
  //this sets up a promise object. defer is now an object that $q can use for its various methods.
  this.readyYet = function() {
    
    setTimeout(function() {
      
      var readyNow = "Okay I'm ready =)"
      //now we want to return this string as a promise fulfillment
      defer.resolve(readyNow)
      //if you get the information properly, do this

      
      //defer.reject() this will catch an error, if a request doesn't resolve. Used for http errors.
    }, 5000)
    return defer.promise
    //this says okay, now act once the promise is recieved. 
  }


})