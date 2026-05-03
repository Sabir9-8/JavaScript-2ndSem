/*
<body style="display: flex; justify-content: center;">
    <div style="border: 1px solid black; padding: 1rem 2rem;" id="container">
        <h2>Age Calculator</h2>
        <label for="dob">Select your date of birth:</label><br>
        <input type="date" id="dob"><br><br>
        <button id="btn">Calculate</button>
        <div id="msg"></div>
    </div>
    <script src="src/AgeCalculator.js"></script>
</body>
*/

let div = document.getElementById("container");
let msg = document.getElementById("msg");
document.getElementById("btn").addEventListener("click",
    function(event) {
        msg.innerHTML = ""
        let input = document.getElementById("dob").value;
        if (input == "") {
            msg.innerHTML = `<p style = 'color:red;'>invalid date</p>`;
            return;
        }
        let today = new Date();
        let dob = new Date(input);
        let year = today.getFullYear() - dob.getFullYear();
        let month = today.getMonth() - dob.getMonth();
        let day = today.getDate() - dob.getDate();
        if (day < 0) {
            month--;
            day += 30;
        }
        if (month < 0) {
            year--;
            month += 12;
        }
        msg.innerHTML = `<h4>${year} Year ${month} month ${day} days</h4>`;
    }
);