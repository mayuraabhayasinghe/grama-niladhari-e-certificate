$(document).ready(function() {
    $("#submit").click(function(event) {
        event.preventDefault(); // Prevent default form submission

        const instituteNumber = $("#InputRnumber").val().trim();
        const secretCode = $("#inputCode").val().trim();
        const nic = $("#InputNIC").val().trim();
        const reason = $("#exampleFormControlTextarea1").val().trim();

        const emptyFields = []; // Store names of empty fields

        // Check for empty fields using logical operators && and ||
        if (!instituteNumber) {
            emptyFields.push("Institute Registration Number");
        }
        if (!secretCode) {
            emptyFields.push("Secret Code");
        }
        if (!nic) {
            emptyFields.push("Person's NIC Number");
        }
        if (!reason) {
            emptyFields.push("Reason for Applying");
        }

        // Check if all fields are filled (implicitly using emptyFields.length)
        if (!emptyFields.length) {
            // All fields are filled, proceed with processing
            Swal.fire({
                title: "Good job!",
                text: "Your application has been submitted successfully!",
                icon: "success"
            });

            // Simulate form submission (replace with your actual logic)
            console.log("Form submitted with data:", { instituteNumber, secretCode, nic, reason });
        } else {
            // Some fields are empty, display error message with list
            const errorMessage = `Please fill in the following fields:<br>`

            Swal.fire({
                icon: "error",
                title: "Oops...",
                html: errorMessage,
                footer: '<a href="#">Need help?</a>'
            });
        }
    });

    $("#clearButton").click(function() {
        $("#instituteForm")[0].reset();
        $("#instituteForm input, #instituteForm textarea").removeClass("is-invalid");
    });
});