function cambiarHoja(num) {
  // Ocultar todas las hojas
  document.querySelectorAll(".carta").forEach(hoja => hoja.style.display = "none");

  // Mostrar la hoja correspondiente
  document.getElementById("hoja" + num).style.display = "block";

  // Si estamos en la hoja 2, ocultar el botón y mostrarlo después de 8 segundos
  if (num === 2) {
    document.getElementById("btn-hoja2").style.display = "none"; 
    setTimeout(() => {
      document.getElementById("btn-hoja2").style.display = "block";
    }, 8000);
  }

  // Si volvemos a la hoja 1, ocultar el cuadro final y el botón "Volver al inicio"
  if (num === 1) {
    ocultarCuadroFinal();
  }
}

function mostrarCuadroFinal() {
  document.getElementById("cuadro-final").style.display = "flex";
  document.querySelector(".boton-inicio").style.display = "block";
}

function ocultarCuadroFinal() {
  document.getElementById("cuadro-final").style.display = "none";
  document.querySelector(".boton-inicio").style.display = "none";
}