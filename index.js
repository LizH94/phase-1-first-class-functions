function receivesAFunction(callBack) {
    return callBack();
}

 receivesAFunction(function () { return "Hello World"; });


 function returnsANamedFunction(){
    return function namedFunction () {}

 }

 function returnsAnAnonymousFunction(){
    return function (){}

 }