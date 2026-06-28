// ================================================================
// JavaScript untuk Halaman Kontak
// ================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Halaman Kontak siap.');

    // ===== VALIDASI FORM KONTAK =====
    const form = document.getElementById('formKontak');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman

            // Ambil nilai dari input
            const namaDepan = document.getElementById('namaDepan').value.trim();
            const namaBelakang = document.getElementById('namaBelakang').value.trim();
            const noHp = document.getElementById('noHp').value.trim();
            const email = document.getElementById('email').value.trim();
            const subjek = document.getElementById('subjek').value.trim();
            const pesan = document.getElementById('pesan').value.trim();

            // Validasi: semua field harus diisi
            if (!namaDepan || !namaBelakang || !noHp || !email || !subjek || !pesan) {
                alert('⚠️ Semua field harus diisi!');
                return;
            }

            // Validasi email (sederhana)
            if (!email.includes('@') || !email.includes('.')) {
                alert('⚠️ Email tidak valid!');
                return;
            }

            // Validasi nomor HP (minimal 10 digit)
            if (noHp.length < 10) {
                alert('⚠️ Nomor HP minimal 10 digit!');
                return;
            }

            // Jika semua valid
            alert('✅ Terima kasih ' + namaDepan + ' ' + namaBelakang + '! Pesan Anda telah terkirim.');
            
            // Reset form setelah sukses
            form.reset();
        });
    }
});