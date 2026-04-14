/*
<body>
    <div id="root">

    </div>
    <script src="src/apr14Array.js"></script>
</body>
*/

//Introduction to Arrays in JavaScript

let users = ["Virat", "Rohit", "Dhoni", "Kohli", "Jadeja", "Bumrah", "Shami"];
console.log(users);
console.log(users.length);

//map() and forEach() are used to iterate over an array and perform some operation on each element of the array. The main difference between the two is that map() returns a new array with the results of the operation, while forEach() does not return anything.

let output = users.map(function (user) {
    return user.toUpperCase();
});
console.log(output);

let root = document.getElementById("root");
let ul = document.createElement("ul");
ul.style.padding = "2rem";

output.forEach(function (user) {
    let li = document.createElement("li");
    li.textContent = user;
    ul.appendChild(li);
});
root.appendChild(ul);