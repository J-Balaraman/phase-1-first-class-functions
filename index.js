function receivesAFunction(test) {
    return test(test); 
}

function returnsANamedFunction() {
    return function namedFunction(){};
}

function returnsAnAnonymousFunction() {
    return function(){};
}