function register() {
    var email = document.getElementById("registration-username").value;
    var password = document.getElementById("registration-password").value;

    // Email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
        document.getElementById("registration-message").textContent = "Enter both email and password.";
    } else if (!emailRegex.test(email)) {
        document.getElementById("registration-message").textContent = "Invalid format. Please enter a valid email address.";
    } else {
        var users = JSON.parse(localStorage.getItem("users")) || {};
        if (users[email]) {
            document.getElementById("registration-message").textContent = "Existing Email";
        } else {
            users[email] = password;
            localStorage.setItem("users", JSON.stringify(users));
            document.getElementById("registration-message").textContent = "Registered Successfully!";
            // pop-up message after successful registration
            alert("Registered Successfully!");
            // Redirect to the login page
            window.location.href = "login.html";
        }
    }
}