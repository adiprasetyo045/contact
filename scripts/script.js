// Inisialisasi EmailJS
(function() {
    emailjs.init("email_ligJCpUlm69WjxEyMFGg2fUv"); // Ganti dengan User ID Anda dari EmailJS
})();

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Mengirim email menggunakan EmailJS
    emailjs.send("service_8noyba7", "__ejs-test-mail-service__", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Pesan Anda telah dikirim!');
    }, function(error) {
        console.log('Failed to send email:', error);
        alert('Gagal mengirim pesan. Silakan coba lagi.');
    });

    // Reset form setelah pengiriman
    this.reset();
});