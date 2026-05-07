let users = [];
let Id = 10001;
let update = null;
document.getElementById("addUser").addEventListener("click",
    function() {
        let {value: userName} = document.getElementById("name");
        let {value: userAge} = document.getElementById("age");
        let {value: userEmail} = document.getElementById("email");
        if (update == null){
            let newUser = {userId: Id++, userName, userAge, userEmail};
            users = [...users, newUser];
        }
        else {
            update.userName = userName;
            update.userAge = userAge; 
            update.userEmail = userEmail;
            update = null;
        }
        render();
        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("email").value = "";
    }
)

function render() {
    let tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
    users.forEach(function(user) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${user.userName}</td>
            <td>${user.userAge}</td>
            <td>${user.userEmail}</td>
            <td>
                <button onclick="deleteUser(${user.userId})">Delete</button>
                <button onclick="updateUser(${user.userId})">Update</button>
            </td>
        `
        tbody.appendChild(tr);
    })
}

function deleteUser(id) {
    users = users.filter(function(user) {
        return user.userId != id;
    })
    render();
}

function updateUser(id) {
    let user = users.find(function(user) {
        return user.userId == id;
    });
    update = user;
    //console.log(user == update);//true
    document.getElementById("name").value = user.userName;
    document.getElementById("age").value = user.userAge;
    document.getElementById("email").value = user.userEmail;
}

