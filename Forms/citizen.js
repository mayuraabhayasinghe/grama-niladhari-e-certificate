$(document).ready(function() {
    $("#submit").click(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      const nic = $("#InputNIC").val().trim();
      const password = $("#inputPassword4").val().trim();
      const reason = $("#exampleFormControlTextarea1").val().trim();
  
      const emptyFields = [];
  
      // Check for empty fields using logical operators && and ||
      if (!nic) {
        emptyFields.push("NIC Number");
      }
      if (!password) {
        emptyFields.push("Password");
      }
      if (!reason) {
        emptyFields.push("Reason for Applying (Optional)"); // Optional but recommended
      }
  
      if (emptyFields.length === 0) {
        // All fields are filled, proceed with processing
        Swal.fire({
          title: "Submited!",
          text: "Your application has been submitted successfully! Check your Email later",
          icon: "success"
        });
  
        // Simulate form submission (replace with your actual logic)
        console.log("Form submitted with data:", { nic, password, reason });
      } else {
        // Some fields are empty, display error message with list
        const errorMessage = `Please fill in the following fields:<br>`
  
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: errorMessage,
          footer: '<a href="#">Need help? Contact help center</a>'
        });
      }
    });
  });
  