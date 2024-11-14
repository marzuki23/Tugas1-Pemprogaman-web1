function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

document.getElementById("show-more").addEventListener("click", function(event) {
    event.preventDefault();
    const extraContent = document.querySelector(".extra-content");
    extraContent.classList.toggle("show");

    if (extraContent.classList.contains("show")) {
        this.textContent = "Lebih Sedikit";
    } else {
        this.textContent = "Selengkapnya";
    }
});