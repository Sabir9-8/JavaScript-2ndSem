//remove child node from parent
//syntax: parentNode.removeChild(childnode);
/*
    <ul id="list"> 
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>SpringBoot</li>
        <li>Java</li>
        <li>JavaFX</li>
    </ul>
    <button onclick="removeElement()">Remove</button>
    <script src="mar9th.js"></script>
*/

let list = document.getElementById("list");
function removeElement() {
    list.removeChild(list.children[list.children.length-1]);
}

//replace oldNode with newNode
//syntax: parentNode.replaceChild(newNode, oldNode);
function replaceElement() {
    let newElement = document.createElement("li");
    newElement.textContent = "Node.js";
    list.replaceChild(newElement, list.children[list.children.length-1])
}