let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let now = new Date();
let day = now.getDay();
let dd = now.getDate();
if (dd < 10) dd = "0" + dd;
let mm = now.getMonth();
let yyyy = now.getFullYear();
let hh = now.getHours();
let meridiem = "AM";
if (hh == 0) hh = 12;
else if (hh >= 12) {
    meridiem = "PM";
    if (hh > 12) hh -= 12;
}
let min = now.getMinutes();
if (min < 10) min = "0" + min;
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
li1.className = "bi bi-calendar";
li1.textContent = ` ${days[day]} ${months[mm]} ${dd} ${yyyy}`;//now.toDateString()
li2.className = "bi bi-openai";
li3.className = "bi bi-view-list";
li4.textContent = `${hh}:${min}${meridiem}`
document.getElementById("date").append(li1, li2, li3, li4);

let h1 = document.createElement("h1");
let p = document.createElement("p");
let h4 = document.createElement("h4");
h1.style = "";
h4.style = "";
let hour = now.getHours();
let container = document.getElementById("salutation");
if (hour >= 5 && hour < 12) {
    container.style = "background: no-repeat url('../images/morning.png'); background-size: cover;";
    h1.textContent = "Good Morning! “Rise and Shine ☀️”";
    p.textContent = "Start your day with focus and positive energy.";
    h4.textContent = "“Fuel your dreams with consistency.”"
}
else if (hour >= 12 && hour < 17) {
    container.style = "background: no-repeat url('../images/afternoon.png'); background-size: cover;"
    h1.textContent = "Good Afternoon! “Stay Productive”";
    h1.style = "background-color: rgba(255, 255, 255, 0.5);";
    p.textContent = "A productive afternoon creates a successful evening.";
    p.style = "background-color: rgba(255, 255, 255, 0.5);";
    h4.textContent = "“Build. Learn. Repeat.”"
    h4.style = "background-color: rgba(255, 255, 255, 0.5);";

}
else if (hour >= 17 && hour < 20) {
    container.style = "background: no-repeat url('../images/evening.png'); background-size: cover; color: white";
    h1.textContent = "Good Evening! “Slow Down & Reflect”";
    p.textContent = "Take a moment to appreciate today's progress";
    h4.textContent = "Sunset brings clarity";
}
else {
    container.style = "background: no-repeat url('../images/night.png'); background-size: cover; color: white";
    h1.textContent = "Good Night! “Time To Recharge”";
    p.textContent = "The day is ending, but your journey continues tomorrow.";
    h4.textContent = "“Dream big. Sleep well.”";
}
container.append(h1, p, h4);