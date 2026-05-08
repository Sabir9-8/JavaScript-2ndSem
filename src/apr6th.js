/*
document.querySelector("#textBox").addEventListener("blur",
    function(e) {
        let result = e.target.value.charCodeAt(0);
        const errorMsg = document.getElementById("errorMsg");
        let condition = result >= 65 && result <= 90;
        if (condition) {
            errorMsg.textContent = "";
        } else {
            errorMsg.innerHTML = "<span style='color: red;'>Username must start with uppercase</span>";
        }
    }
)
*/

document.querySelector("#gmail").addEventListener("blur",
    function(e) {
        let data = this.value;

        data.endsWith("@gmail.com")
    }
)