document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Collect form data
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    const bookingDate = document.getElementById("date").value;
    const details = document.getElementById("details").value;

    // Display confirmation message
    document.getElementById("confirmation-message").classList.remove("hidden");

    // Optionally, you can send the form data to a server (e.g., using fetch or XMLHttpRequest)
    // Example: sending the data to a backend (not implemented here)
    // fetch('/submit-booking', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ email, contact, address, bookingDate, details })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data));
});
