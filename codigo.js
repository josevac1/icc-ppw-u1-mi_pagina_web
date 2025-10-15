//Cambia el color del título principal al hacer clic
document.getElementById("colorBtn").addEventListener("click", function () {
  const h1 = document.querySelector("h1");
  const colores = ["#e63946", "#457b9d", "#2a9d8f", "#ffb703", "#9c27b0"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  h1.style.color = colorAleatorio;
});

// Agrega una nueva fila a la tabla
const boton = document.getElementById("agregarFila");
if (boton) {
  boton.addEventListener("click", () => {
    const tabla = document.querySelector("table");
    if (!tabla) return;
    const nuevaFila = tabla.insertRow();
    nuevaFila.innerHTML = `
      <td>&lt;article&gt;</td>
      <td>Sección independiente del contenido que puede tener su propio título.</td>
    `;
    // Efecto visual al agregar
    nuevaFila.style.backgroundColor = "#d0f0c0";
    setTimeout(() => (nuevaFila.style.backgroundColor = "white"), 1000);
  });
}
