// Obtener los botones y el estado del tema
const temaOscuroBtn = document.querySelector("#tema-oscuro");
const temaClaroBtn = document.querySelector("#tema-claro");
const estadoElemento = document.querySelector("#estado");

document.addEventListener("DOMContentLoaded", () => {
  // Cambiar el tema y guardarlo en sessionStorage
  function cambiarTema(tema) {
    console.log(tema);
    document.body.className = tema + "-mode";
    sessionStorage.setItem("tema", tema);
    estadoElemento.textContent = tema; // Usamos el objeto para mostrar el nombre capitalizado
  }

  // Al cargar la página, aplicar el tema guardado si existe
  const temaGuardado = sessionStorage.getItem("tema") || "light";
  cambiarTema(temaGuardado);

  // Asignar los eventos para cambiar el tema
  temaOscuroBtn.addEventListener("click", (event) =>
    cambiarTema(event.target.value)
  );
  temaClaroBtn.addEventListener("click", (event) =>
    cambiarTema(event.target.value)
  );
});
