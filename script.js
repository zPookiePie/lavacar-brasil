function toggleMenu(){
    var a = document.getElementById("menu-list");
    a.style.display = a.style.display === "block" ? "none" : "block";
}

function MudarFoto(button) {
    const foto = button.parentElement; // Seleciona a div .foto onde o botão está
    
    // Define as imagens para cada div .foto com base no conteúdo atual
    if (foto.style.backgroundImage.includes("ex11.jpg")) {
        foto.style.backgroundImage = "url('ex12.jpeg')"; // Imagem nova para a primeira div
        foto.classList.remove("justify-end");
        foto.classList.add("justify-start");
        button.innerHTML = "<";
    } else if (foto.style.backgroundImage.includes("ex21.jpeg")) {
        foto.style.backgroundImage = "url('ex22.jpeg')"; // Imagem nova para a segunda div
        foto.classList.remove("justify-end");
        foto.classList.add("justify-start");
        button.innerHTML = "<";
    } else {
        // Volta à imagem original para cada div
        foto.style.backgroundImage = foto === document.querySelector(".foto") 
            ? "url('ex11.jpg')" 
            : "url('ex21.jpeg')";
        foto.classList.remove("justify-start");
        foto.classList.add("justify-end");
        button.innerHTML = ">";
    }
}

function inicializarFotos() {
    const fotos = document.querySelectorAll(".foto");
    fotos[0].style.backgroundImage = "url('ex11.jpg')";
    fotos[1].style.backgroundImage = "url('ex21.jpeg')";
}

window.onload = inicializarFotos;