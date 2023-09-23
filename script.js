//your JS code here. If required.
//your JS code here. If required.
cy.wait(1000); // Wait for 1 second before checking styling
cy.get("#signup-form").should("have.css", "background-color", "rgb(248, 249, 250)");
// ... other styling checks
 
        document.getElementById("signup-form").addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;
            
            // Check if passwords match
            if (password === confirmPassword) {
                // Save data in session storage
                sessionStorage.setItem("name", name);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("password", password);
                
                // Show success alert
                alert("Sign up successful!");
                
                // Clear form
                document.getElementById("signup-form").reset();
            } else {
                // Show password mismatch alert
                alert("Passwords do not match");
            }
        });
    