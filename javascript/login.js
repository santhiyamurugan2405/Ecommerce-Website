function validateLogin() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all required fields");
        return false;
    }

    if (phone.length !== 10) {
        alert("Enter valid 10-digit phone number");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Login successful!");
    return true;
}
