/*document.getElementById("name").addEventListener("keyup", 
    function(e) {
        let name = e.target.value;
        let input = 'sachin';
        let msg = document.querySelector("#register legend");
        
    }
);
*/

let msg = document.querySelector("#message");
document.querySelector("#name").addEventListener("focus",
    function(e) {
        msg.innerHTML = "<dt style='color:goldenrod; display: block;'>Name in block letter<dt>";
    }
);

document.querySelector("#name").addEventListener("blur",
    function(e) {
        msg.innerHTML = "<dt style='color:red; display: block;'>Name is required<dt>"
    }
);

document.querySelector("#name").addEventListener("change",
    function(e) {
        this.value = this.value.toUpperCase();
    }
);
