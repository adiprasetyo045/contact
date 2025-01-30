document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("your-public-key"); // Ganti dengan Public Key dari EmailJS

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const serviceID = "your-service-id"; // Ganti dengan Service ID
        const templateID = "your-template-id"; // Ganti dengan Template ID

        const params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            reply_to: document.getElementById("email").value // Agar bisa langsung reply ke pengirim
        };

        emailjs.send(serviceID, templateID, params)
            .then(response => {
                alert("Pesan berhasil dikirim!");
                document.getElementById("contact-form").reset();
            })
            .catch(error => {
                alert("Terjadi kesalahan, coba lagi.");
                console.error("Error:", error);
            });
    });
});
