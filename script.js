document.getElementById('confirmationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dikirim secara default
    document.getElementById('confirmation').innerHTML = '<h2> <font color="#2980b9"> Terima Kasih Atas Konfirmasi Kehadiran yang Telah disampaikan </font> </h2>';
});

// Mencegah input selain angka di field nomor telepon
document.getElementById('phone').addEventListener('input', function (event) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Memutar musik setelah interaksi pengguna
document.addEventListener('click', function() {
    var audio = document.getElementById('background-music');
    if (audio.paused) {
        audio.play();
    }
}, { once: true });