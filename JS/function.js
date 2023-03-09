
document.getElementById("boton").addEventListener("click", function() {
    document.getElementById("mail").innerHTML = "pauline.hernandez@example.com";
});

document.getElementById("boton_noche").addEventListener("click", function() {

    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff"
});

document.getElementById("boton_dia").addEventListener("click", function() {
    document.body.style.backgroundColor = "#E5ADA2";
    document.body.style.color = "#212529"
});