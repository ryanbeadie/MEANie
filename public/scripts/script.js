var myApp=angular.module( 'myApp', [] );

//set up controller
myApp.controller( 'WhereMyPeeps', function( $http ){

//global to this controller
var vm = this;

//send record to the server
vm.addRecord = function(){
//created from dom input
  var objectToSend ={
  name : vm.nameIn,
  location : vm.locationIn,
  };
console.log(objectToSend);
$http({
  method: 'POST',
  url: '/testPost',
  data: objectToSend
});
vm.nameIn ='';
vm.locationIn='';
};//end addRecord

//get records from server/db
vm.getRecords = function(){
  console.log('in getRecords function');
$http({
  method: 'GET',
  url: '/getRecords',
}).then( function( response ){
  console.log('response=' , response);
vm.allTheRecords = response.data;//changed to .data
console.log( 'all the records' , vm.allTheRecords );
    });//end response
  };//end get records
});//end controller
