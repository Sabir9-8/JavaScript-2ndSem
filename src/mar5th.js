/*
    <div id="container">
        
    </div>
    
    <script src="mar5th.js"></script>
*/

let divElement = document.getElementById("container");

let b1 = document.createElement("b");
b1.innerText = "Javascript";//<b>Javascript </b>

let b2 = document.createElement("b");
b2.innerText = "Very very Tricky and Easy too";//<b>Very very Tricky and Easy too </b>

divElement.append(b1 , " is " , b2);//Javascript is very very Tricky and Easy too
//divElement.appendChild("is");//TypeError
//divElement.appendChild(b1,b2); //Javascript
console.log(divElement.childNodes);
// childNodes: NodeList(4) [text, b, text, b]
console.log(divElement.children);
//children: HTMLCollection(2) [b, b]