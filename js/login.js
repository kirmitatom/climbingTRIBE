const db = [
    {"useremail": "ali@gmail.com", "password": "ali"},
    {"useremail": "hussein@gmail.com", "password": "sui"}
];

function addUser(E, P) {
    db.push({"useremail": E, "password": P});
    document.getElementById("newuser").innerHTML = "You are now a member. Please go log in.";
    document.getElementById("newuser").style.color = "black";
    return false;
}

function checkCredentials(E, P) {
    for (const user of db) {
        if (user.useremail === E && user.password === P) {
            return true;
        }
    }
    return false;
}

function change() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const text = document.getElementById("text");

    if (checkCredentials(email, pass)) {
        window.location.href = "file:///C:/Users/Alish/OneDrive/Desktop/bweb/home.html";
        return false;
    } else {
        text.style.color = "red";
        text.innerHTML = "Incorrect password";
        return false;
    }
}

function save() {
    const newemail = document.getElementById("newEmail").value;
    const newpass = document.getElementById("newPass").value;
    const text = document.getElementById("newuser");

    if (newemail.trim() === "" || newpass.trim() === "") {
        text.style.color = "red";
        text.innerHTML = "Please enter both email and password";
        return false;
    }

    if (checkCredentials(newemail, newpass)) {
        text.innerHTML = "This account already exists";
        return false;
    } else {
        addUser(newemail, newpass);
        return false;
    }
}
