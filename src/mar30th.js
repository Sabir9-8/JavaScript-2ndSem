/*document.getElementById("btnContainer").addEventListener("click", 
    function(e) {
        console.log(e);
        if (e.target.tagName == "BUTTON") {
            document.querySelector("h3").style.color = e.target.textContent;
        }
    }
);
*/
/*let handler = function(e) {
        console.log(e.target.textContent);
        let h3 = document.querySelector("h3");
        h3.style.color = e.target.textContent;
    }

document.getElementById("red").addEventListener("click", handler);
document.getElementById("green").addEventListener("click", handler);
document.getElementById("blue").addEventListener("click", handler);


document.getElementById("green").addEventListener("click", function(e) {
    console.log(e.target.textContent);
        let h3 = document.querySelector("h3");
        h3.style.color = e.target.textContent;
});

*/



document.getElementById("img").addEventListener('click', 
    function(e) {
        console.log(e);
        let xRange = e.clientX >= 30 && e.clientX <= 146;
        let yRange = e.clientY >= 200 && e.clientY <= 282;
        let condition = xRange && yRange;
        if (condition) {
            console.log("Brown Bag");
            
        } else {
            console.log("Outside");
        }
    }
);
