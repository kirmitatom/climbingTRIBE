const db = [
    {"useremail": "test@gmail.com", "password": "test"},
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
        window.location.href = "home.html";
        return false;
    } else {
        text.style.color = "red";
        text.innerHTML = "Incorrect password or email";
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


function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("loggedIn");

    const signUpBtn = document.getElementById("signUpBtn");
    const loginBtn = document.getElementById("loginBtn");

    if (isLoggedIn === "true") {
        // Hide Sign Up button and change Login button text to Logout
        signUpBtn.style.display = "none";
        loginBtn.innerText = "Logout";
        loginBtn.addEventListener("click", logout); // Attach logout event when logged in
    } else {
        // Show Sign Up button and change Login button text back to Login
        signUpBtn.style.display = "inline-block";
        loginBtn.innerText = "Login";
        loginBtn.addEventListener("click", function() {
            window.location.href = "login.html"; // Redirect to login page when clicked
        });
    }
}

function logout() {
    localStorage.removeItem("loggedIn"); 
    window.location.href = "login.html"; // Redirect to login page
}

document.addEventListener("DOMContentLoaded", function() {
    checkLoginStatus(); // Check the login status when the page loads
});