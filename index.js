function receivesAFunction(callback){
 callback();
}

function returnsANamedFunction(){
    return test=()=>'done'
}

function returnsAnAnonymousFunction(){
    return function () {
    console.log("Stretch! Work that core!");
  };
}