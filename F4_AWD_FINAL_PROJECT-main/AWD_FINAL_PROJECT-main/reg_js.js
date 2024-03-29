function validateForm() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        var ign = document.getElementById("ign").value;

        // Email validation regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Password length validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }

        // Password match validation
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        // IGN validation (allow only alphanumeric characters and spaces)
        var ignRegex = /^[a-zA-Z0-9 ]+$/;
        if (!ignRegex.test(ign)) {
            alert("Invalid IGN. Please use only alphanumeric characters and spaces.");
            return false;
        }

        return true;
    }
