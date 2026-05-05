/*let price = 45000;
console.log(price);
console.log(typeof price);
console.log(price.toString());
console.log(typeof price.toString);
//toLocaleString is used to convert number into local language format, in this case we are converting it into Indian currency format
let ind = {style: "currency", currency: "INR"};
let t = price.toLocaleString("en-IN", ind);
console.log(t);
console.log(typeof t);

//display message alert and confirm
alert("Hello World");

confirm("Are you sure you want \nto delete this file?");

//document.write removes all the existing content and write new content, that's why we don't use it in real world application, we use it for learning purpose only
function doSomething() {
    document.write("<h1>Welcome to JavaScript</h1>");
}

//createElement is used to create new element and appendChild is used to add that element to the DOM
function doSomething() {
    let h2 = document.createElement("h2");
    h2.textContent = "Welcome to JavaScript";
    h2.style.color = "blue";
    document.body.appendChild(h2);
}

document.getElementById
//HTML Element | null

document.getElementByClassName
//HTML Collection | null

document.getElementByTagName
//HTML Collection | null

document.querySelector
//Element | null

document.querySelectorAll
//NodeList | null

document.getElementByName
//NodeList | null

innerHTML
//string
//It attaches the HTML data, it parses the HTML tags, it makes the markup content as the child to the target element, it can be used to add new element to the DOM
function doSomething() {
    let msg = document.getElementById("message");
    msg.innerHTML = "<h1>Content added!</h1>";
}

outerHTML
//string
//It attaches the HTML data, it parses the HTML tags, it will replace the target element with the new element, it can be used to replace the existing element in the DOM
function doSomething() {
    let msg = document.getElementById("message");
    msg.outerHTML = "<h1>Content added!</h1>";
}

textContent
//string
//It attaches the text data as it is, it doesn't parse the HTML tags, it treats them as text,it doesn't consider the CSS styles and hidden elements, it returns the text of hidden elements as well
function doSomething() {
    let msg = document.getElementById("message");
    msg.textContent = "Content added!";
}

innerText
//string
//It attaches the text data as it is, it doesn't parse the HTML tags, it treats them as text, it also considers the CSS styles and hidden elements, it doesn't return the text of hidden elements
function doSomething() {
    let msg = document.getElementById("message");
    msg.innerText = "Content added!";
}

*/
