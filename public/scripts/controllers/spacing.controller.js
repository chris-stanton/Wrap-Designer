myApp.controller('SpacingController', ['FactoryFactory',function(FactoryFactory) {

console.log('SpacingController running');

var self = this;
self.testMessage = 'SC WORKING STATUS';
self.onLoad = FactoryFactory.blankFactoryObject;
self.getBlanks = FactoryFactory.getBlanks;
self.getSpecificBlank = FactoryFactory.getSpecificBlank;
self.getSpecificBlankObject = FactoryFactory.getSpecificBlankObject;
//object from drop down menu
self.newBlank = {};
console.log();




}]); //end controller code block
