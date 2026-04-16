let arr = [1, 2, 3, 4, 5];


let users = [
    {id: 10, name: "sachin", age: 55},
    {id: 7, name: "dhoni", age: 43},
    {id: 18, name: "kohli", age: 37},
    {id: 19, name: "dravid", age: 51},
    {id: 43, name: "rohit", age: 35}
]

let root = document.getElementById("root");
let ul = document.createElement("ul");
ul.style.padding = "2rem";

users.filter(function (user) {
    return user.age >= 50;
}).map(function (user) {
    return user.name.toUpperCase();
}).forEach(function (user) {
    let li = document.createElement("li");
    li.textContent = user;
    ul.appendChild(li);
});
root.appendChild(ul);