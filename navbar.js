const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.navbar-menu a');

// Toggle menu saat tombol ditekan
navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

// Tambahkan event listener untuk setiap link di navbar
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Hapus class 'active' dari semua link
    navLinks.forEach(l => l.classList.remove('active'));

    // Tambahkan class 'active' ke link yang diklik
    this.classList.add('active');

    // Tutup menu setelah link diklik (opsional, untuk mobile)
    navbarMenu.classList.remove('active');
    navbarToggle.classList.remove('active');
  });
});