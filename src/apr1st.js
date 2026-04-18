/*
let msg = document.querySelector("#msg");
document.querySelector("#userName").addEventListener("keyup",
    function(e) {
        let count = this.value.length;
        if (count == 0) {
            msg.innerHTML = '<p style="color:red">name is required</p>';
        }
        else if (count < 4) {
            msg.innerHTML = '<p style="color:red">name is too short</p>';
        }
        else {
            msg.innerHTML = '';
        }
    }
)
*/

document.querySelector("#feedback").addEventListener("keyup",
    function(e) {
        let count = this.value.length;

        if (count == 0) {
            msg.innerHTML = '<p style="color:red">comment is required</p>';
        }
        else if (count < 4) {
            msg.innerHTML = '<p style="color:red">comment is too short</p>';
        }
        else {
            let max = e.target.maxLength;
            let left = max - count;
            msg.textContent = `${left} chars left`;
        }
    }
)