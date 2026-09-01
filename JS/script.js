let slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
    let index = 0;

    function cambiarSlide() {
        slides[index].classList.remove("active");

        index++;
        if (index >= slides.length) {
            index = 0;
        }

        slides[index].classList.add("active");
    }

    setInterval(cambiarSlide, 4000);
}
// Datos simulados
let oleaje = "bajo";
let estado = "soleado";

// cálculo simple
if (oleaje === "bajo" && estado === "soleado") {
    document.getElementById("dorada").innerText = "80%";
}

if (oleaje === "fuerte" || estado === "nublado") {
    document.getElementById("lubina").innerText = "75%";
}

if (oleaje === "rocoso") {
    document.getElementById("sargo").innerText = "90%";
}