//Hoisting in JavaScript
//In JavaScript, variable and function declarations are hoisted to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations. If you try to access a variable before it is initialized, it will return undefined.

//accessing variables and functions after initialization

var a = 10;
function getName() {
    console.log("PW Institute of Innovation");
    
}
getName(); //PW Institute of Innovation
console.log(a); //10
console.log(getName); //function getName() { console.log("PW Institute of Innovation"); }

//accessing variables and functions before initialization

getName(); //pw institute of innovation
console.log(b); //undefined
console.log(getName); //undefined
var b = 20;
function getName() {
    console.log("pw institute of innovation");
}

//In the above code, the function declaration getName() is hoisted to the top of the scope, so it can be called before its declaration. However, the variable b is also hoisted, but only its declaration is hoisted, not its initialization. Therefore, when we try to access b before it is initialized, it returns undefined.

//accessing variables and functions before declaration

//notName(); //ReferenceError: notName is not defined
//console.log(c); //ReferenceError: c is not defined
//console.log(notName); //ReferenceError: notName is not defined

//In the above code, we are trying to access the function notName() and the variable c before they are declared. Since they are not hoisted, it results in a ReferenceError indicating that they are not defined.

//undefined vs not defined
//undefined is a primitive value that represents the absence of a value or an uninitialized variable. It is the default value of variables that have been declared but not initialized. On the other hand, not defined refers to a variable or function that has not been declared in the current scope. When you try to access a variable that is not defined, it results in a ReferenceError.

//In summary, hoisting allows you to use variables and functions before they are declared in the code, but only their declarations are hoisted, not their initializations. Accessing variables before initialization will return undefined, while accessing variables or functions that are not declared will result in a ReferenceError.

//only function declarations are hoisted, not function expressions. Function expressions are treated as variables and only their declarations are hoisted, not their initializations. Therefore, if you try to call a function expression before it is defined, it will result in a TypeError indicating that the variable is not a function.

//notName(); //TypeError: notName is not a function
var notName = function() {
    console.log("This is a function expression");
}
notName(); //This is a function expression

//Scope Chain
//It is a chain of all the scopes that are currently active. It is used to resolve the variable names. It is used to find the variable in the current scope and if it is not found, it will look for the variable in the outer scope and so on until it reaches the global scope.

//lexical environment
//It is an environment that is created when a function is invoked. It contains the variables and functions that are defined in the function. It also contains a reference to the outer lexical environment, which is the environment of the parent function.

//execution context
//It is an environment that is created when a function is invoked. It contains the variables and functions that are defined in the function. It also contains a reference to the outer execution context, which is the execution context of the parent function.

//global execution context
//It is the default execution context that is created when the JavaScript code is executed. It contains the global variables and functions that are defined in the code. It also contains a reference to the global object, which is the window object in the browser.

var x = 1;
a();
b();
console.log(x); //1

function a() {
    var x = 10;
    console.log(x); //10
}

function b() {
    var x = 100;
    console.log(x); //100
}

//In the above code, we have a global variable x and two functions a() and b() that have their own local variable x. When we call the functions a() and b(), they create their own execution context and their own lexical environment. The variable x in the global execution context is not affected by the variables x in the functions a() and b(). Therefore, when we log the value of x in the global execution context, it returns 1.

function c() {
    console.log(d);
}
var d = 10;
c(); //10
//In the above code, we have a function c() that logs the value of d. The variable d is defined in the global execution context, so it is accessible in the function c(). Therefore, when we call the function c(), it logs the value of d, which is 10.

function e() {
    f();
    function f() {
        console.log(g);
    }
}
var g = 20;
e(); //20

//In the above code, we have a function c() that logs the value of g. The variable g is defined in the global execution context, so it is accessible in the function e(). Therefore, when we call the function e(), it logs the value of g, which is 20.

function h() {
    var i = 30;
}
h();
console.log(i); //ReferenceError: i is not defined

//In the above code, we have a function h() that defines a variable i. The variable i is defined in the local execution context of the function h(), so it is not accessible in the global execution context. Therefore, when we try to log the value of i in the global execution context, it results in a ReferenceError indicating that i is not defined.