const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you, " + name.value.trim() + "! Your message has been received.");

    contactForm.reset();
});