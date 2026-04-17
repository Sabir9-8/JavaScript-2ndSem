let cart = [
    {id: 1, name: "phone", price: 35000},
    {id: 2, name: "adapter", price: 4000},
    {id: 3, name: "cable", price: 3000}
]

let result = cart.reduce(function(acc, item) {
    acc += item.price;
    return acc;
}, 0);

let root = document.getElementById("root");
let ul = document.createElement("ul");
ul.style.padding = '4rem';
let li = document.createElement("li");
li.textContent = "Total Price is: " + result;
ul.appendChild(li);
root.appendChild(ul);