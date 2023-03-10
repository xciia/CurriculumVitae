
document.getElementById("boton").addEventListener("click", function() {
    document.getElementById("mail").innerHTML = '<a href="mailto:pauline.hernandez@example.com" target="_top">pauline.hernandez@example.com</a>';
});

document.getElementById("boton_noche").addEventListener("click", function() {

    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff"
});

document.getElementById("boton_dia").addEventListener("click", function() {
    document.body.style.backgroundColor = "#E5ADA2";
    document.body.style.color = "#212529"
});