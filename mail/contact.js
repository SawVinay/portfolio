(function() {
    emailjs.init("FAmo7pFfOdZia3u4J"); // Replace with your EmailJS User ID
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Prepare the template parameters
    const templateParams = {
        to_name: 'Vinay', // Replace with the actual recipient name
        from_name: name,
        subject: subject,
        message: message,
        reply_to: email
    };

    // Send the email using EmailJS
    emailjs.send('FAmo7pFfOdZia3u4J', 'template_gb2vl84', templateParams)
        .then(function(response) {
            document.getElementById("success").innerHTML = "Your message has been sent!";
            document.getElementById("success").style.display = "block";
            document.getElementById("error").style.display = "none";
            document.getElementById("contactForm").reset(); // Reset the form
        }, function(error) {
            document.getElementById("error").innerHTML = "There was an error sending your message. Please try again later.";
            document.getElementById("error").style.display = "block";
            console.error("Failed to send email. Error: ", error);
        });
});
