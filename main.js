function checkLogin() {
    // gets the username
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;
 
    // correct password and username
    let correctUser = "Zangief";
    let correctPass = "12345";
 
    // determines login status using if/else condition
    let status = "";
 
    if (username === "" || password === "") {
        status = "empty";
    } else if (username === correctUser && password === correctPass) {
        status = "success";
    } else {
        status = "failed";
    }
 
    // it displays what happens using switch/case
    switch (status) {
        case "success":
            window.alert("Welcome, " + username + "!");
            window.location.href = "notebook.html";
            break;
        case "failed":
            window.alert("Incorrect username and/or password.");
            break;
        case "empty":
            window.alert("Please fill in all fields.");
            break;
    }
}
 
// shows the subject info when clicked
function showSubject(subject, teacher) {
    window.alert("Subject: " + subject + "\nTeacher: " + teacher + "\n9-Emerald 2025-2026");
}
