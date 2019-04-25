const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('The index of this number is: ' + i);
    }, 3000);
}

var add = (function () {
    var counter = 0;
    return function () { counter += 1; return counter }
})();

//  self-invoking functions only call once
add();
add();
console.log(add())

// correct way es5
const arr1 = [10, 12, 15, 21];
for (var i = 0; i < arr1.length; i++) {
    // pass in the variable i so that each function 
    // has access to the correct index
    setTimeout(function (i_local) {
        return function () {
            console.log('The index of this number is: ' + i_local);
        }
    }(i), 3000);
}

// correct way es6
const arr2 = [10, 12, 15, 21];
for (let i = 0; i < arr2.length; i++) {
    // using the ES6 let syntax, it creates a new binding
    // every single time the function is called
    // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
    setTimeout(function () {
        console.log('The index of this number is: ' + i);
    }, 3000);
}
