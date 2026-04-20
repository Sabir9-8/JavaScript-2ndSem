/*
    <ul id="container">
        <li class="item">HTML</li>
        <li class="item">CSS</li>
        <li class="item">JS</li>
        <li class="item">Java</li>
        <li class="item">React</li>
    </ul>
    <p class="para text red black white"></p>
    <button onclick="addItem()">Add Item</button>
    <script src="mar3rd.js"></script>
*/
let staticList = document.querySelectorAll(".item");
let container = document.getElementById("container");
let liveList = document.getElementsByClassName("item");
console.log("before adding")
console.log(staticList);
console.log(staticList.length);
console.log(liveList);
console.log(liveList.length);

function addItem() {
    let li = document.createElement("li");
    li.className = "item";
    li.textContent = "SpringBoot";
    container.appendChild(li);
    console.log("after adding")
    console.log(staticList);
    console.log(staticList.length);
    console.log(liveList);
    console.log(liveList.length);
}
// checking classList
let p = document.getElementsByTagName("p");
console.log(p);