function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.getElementById("show-more").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah halaman bergulir ke atas
    const extraContent = document.querySelector(".extra-content");
    extraContent.classList.toggle("show"); // Menampilkan atau menyembunyikan extra-content

    // Ubah teks tombol ketika diklik
    if (extraContent.classList.contains("show")) {
        this.textContent = "Lebih Sedikit"; // Ubah teks menjadi "Lebih Sedikit" saat konten ditampilkan
    } else {
        this.textContent = "Selengkapnya"; // Ubah teks kembali ke "Selengkapnya" saat konten disembunyikan
    }
});