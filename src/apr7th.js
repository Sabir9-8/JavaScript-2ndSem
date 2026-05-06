/*document.querySelector("#gmail").addEventListener("blur",
    function (e) {
        let data = this.value;

        let index = data.search("@");
        let errorMsg = document.getElementById("errorMsg");
        if (index !== -1) {
            if (data.endsWith("gmail.com")) {
                errorMsg.textContent = "";
            }
            else {
                errorMsg.innerHTML = "<span style='color: red;'>Only Gmail is allowed</span>";
            }
        }
        else {
            errorMsg.innerHTML = "<span style='color: red;'>Invalid email</span>";
        }
    }
)
*/

document.querySelector("#checkBox").addEventListener("change",
    function (e) {
        let flag = this.checked;
        let textUser = document.querySelector("#textUsername");
        if (flag) {
            textUser.disabled = false;
        }
        else {
            textUser.disabled = true;
        }
    }
)


document.querySelector("#checkBox").addEventListener("change",
    function (e) {
        let flag = this.checked;
        let textUser = document.querySelector("#textUsername");
        if (flag) {
            textUser.disabled = false;
        }
        else {
            textUser.disabled = true;
        }
    }
)