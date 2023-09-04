function logout() {
    // Clear user information from local storage
    localStorage.removeItem("users");

    // Redirect to the login page
    window.location.href = "login.html";
}