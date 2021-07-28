export const homePage = (function() {
    'use strict';
  
    var _privateProperty = 'Hello World';
    var publicProperty = 'I am a public property';
  
    function _privateMethod() {
      console.log(_privateProperty);
    }
  
    function publicMethod() {
      _privateMethod();
    }
  
    return {
      publicMethod,
      publicProperty
    };
  })();

// homePage.publicMethod(); // outputs 'Hello World'
// console.log(homePage.publicProperty); // outputs 'I am a public property'
//console.log(homePage._privateProperty); // is undefined protected by the module closure
//homePage._privateMethod(); // is TypeError protected by the module closure

