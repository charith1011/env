// Check if the user has already entered the correct password during this session
if (sessionStorage.getItem("authenticated") === "true") {
    // User is already authenticated, allow access to the admin page
    window.location.href = "admin.html";
} else {
    // Define the correct password
    const correctPassword = "perry";

    // Prompt the user for the password
    const enteredPassword = prompt("Enter the password to access the admin page:");

    // Check if the entered password is correct
    if (enteredPassword === correctPassword) {
        // Password is correct, set authenticated flag and allow access to the admin page
        sessionStorage.setItem("authenticated", "true");
        window.location.href = "admin.html";
    } else {
        // Password is incorrect, show an alert and redirect to another page
        alert("Incorrect password. Access denied.");
        window.location.href = "index.html"; // Redirect to index.html or any other page
    }
}
