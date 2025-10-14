// Cambia el color del título principal al hacer clic
document.getElementById("colorBtn").addEventListener("click", function () {
  const h1 = document.querySelector("h1");
  const colores = ["#e63946", "#457b9d", "#2a9d8f", "#ffb703", "#9c27b0"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  h1.style.color = colorAleatorio;
});
