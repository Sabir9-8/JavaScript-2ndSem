/*
document.getElementById("phone").addEventListener("blur",
    function (e) {
        let userInput = e.target.value;
        const msg = document.getElementById("msg_phone");
        let phone = userInput.trim().replaceAll("-", "");
        let flag = phone.match(/\+91\d{10}/);
        if (flag) {
            msg.innerText = "message sent to " + phone.slice(3,5) + "xxxxxx" + phone.slice(-2);
            msg.style.color = "green";
        } else {
            msg.innerText = "Invalid Phone Number";
            msg.style.color = "red";
        }
    }
)

document.getElementById("email").addEventListener("blur",
    function (e) {
        let input = e.target.value;
        const msg = document.getElementById("msg_email");
        let email = input.trim();
        if (!email.endsWith("@gmail.com")) {
            msg.innerText = "Invalid Email Address";
            msg.style.color = "red";
            return;
        }
        let index  = email.search("@");
        let op = email.slice(0, 2) + "xxxxxx" + email.slice(index);
        msg.innerText = "message sent to " + op ;
        msg.style.color = "green";
    }
)
*/
/*
document.getElementById("cardNumber").addEventListener("input",
    function (e) {
        let input = e.target.value;
        let condition = input.trim().startsWith("4455") && input.trim().length === 16;
        const cvv = document.getElementById("cvv");
        if (condition) {
            cvv.disabled = false;
            cvv.focus();
        }
        else {
            cvv.disabled = true;
        }
    }
)
document.getElementById("cvv").addEventListener("input",
    function (e) {
        let input = e.target.value;
        let condition = input.trim().length == 3 && input.trim().match(/\d{3}/);
        const exp = document.getElementById("expiry");
        if (condition) {
            
            exp.disabled = false;
            exp.focus();
        }
        else{
            exp.disabled = true;
        }
    }
)

document.getElementById("expiry").addEventListener("input",
    function(e) {
        let input = e.target.value;
        let year = Number(input);
        let condition = year >= 2026 && year <= 2030;
        const btn = document.getElementById("pay");
        if (condition) {
            btn.disabled = false;
        }
        else {
            btn.disabled = true;
        }
    }
)
*/

document.getElementById("cardNumber").addEventListener("blur",
    function (e) {
        let input = e.target.value;
        let condition = input.trim().startsWith("4455") && input.trim().length === 16;
        const cvv = document.getElementById("cvv");
        if (condition) {
            cvv.style.display = "block";
            cvv.focus();
        }
        else {
            cvv.style.display = "none";
        }
    }
)
document.getElementById("cvv").addEventListener("blur",
    function (e) {
        let input = e.target.value;
        let condition = input.trim().length == 3 && input.trim().match(/\d{3}/);
        const exp = document.getElementById("expiry");
        if (condition) {
            
            exp.style.display = "block";
            exp.focus();
        }
        else{
            exp.style.display = "none";
        }
    }
)

document.getElementById("expiry").addEventListener("blur",
    function(e) {
        let input = e.target.value;
        let year = Number(input);
        let condition = year >= 2026 && year <= 2030;
        const btn = document.getElementById("pay");
        if (condition) {
            btn.style.display = "block";
        }
        else {
            btn.style.display = "none";
        }
    }
)