document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll(".text");
    let currentTextIndex = 0;

    function showNextText() {
        texts[currentTextIndex].classList.remove("active");
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        texts[currentTextIndex].classList.add("active");
    }

    texts[currentTextIndex].classList.add("active");
    setInterval(showNextText, 3000); // Cambia el texto cada 3 segundos
});
