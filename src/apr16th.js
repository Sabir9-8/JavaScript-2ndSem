/*
<div id="container">
        <dd>
            <label for="">User Name</label>
            <input type="text" id="userInput">
        </dd>
        
    </div>
    <script src="apr16th.js"></script>
*/

let names = ["sachin", "dhoni", "sagar", "abhilash", "anuj", "kiran", "akash"];
let updated = structuredClone(names);
let container = document.getElementById("container");
let input = document.getElementById("userInput");
let ul = document.createElement("ul");
ul.style.listStyleType = "none";
container.appendChild(ul);

input.addEventListener("focus", function(event) {
    render();
});

input.addEventListener("blur", function(event) {
    ul.innerHTML = "";
});

input.addEventListener("keyup", function(event) {
    let value = this.value;
    updated = names.filter(function(name) {
        return name.toLowerCase().includes(value.toLowerCase());
    });
    render();
});

function render() {
    ul.innerHTML = "";
    updated.forEach(function(name) {
        let li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
    })
}