// Obtener los botones para cambiar entre temas y el elemento para mostrar el estado del tema
const temaOscuroBtn = document.querySelector("#tema-oscuro"); // Botón para el tema oscuro
const temaClaroBtn = document.querySelector("#tema-claro"); // Botón para el tema claro
const estadoElemento = document.querySelector("#estado"); // Elemento para mostrar el estado del tema (claro/oscuro)

// El código dentro de `DOMContentLoaded` se ejecuta cuando el contenido del DOM está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  function cambiarTema(tema) {
    // Cambiar la clase del body para aplicar el tema correspondiente
    document.body.className = tema;
    // Guardar el tema en sessionStorage para que persista durante la sesión actual del navegador
    sessionStorage.setItem("tema", tema);

    estadoElemento.textContent = tema;
  }

  // Al cargar la página, obtener el tema guardado en sessionStorage (si existe) o usar "light" como valor predeterminado
  const temaGuardado = sessionStorage.getItem("tema") || "light";

  cambiarTema(temaGuardado);

  // Al hacer clic en el botón del tema oscuro, se cambia a "dark"
  temaOscuroBtn.addEventListener("click", (event) =>
    cambiarTema(event.target.value)
  );

  temaClaroBtn.addEventListener("click", (event) =>
    cambiarTema(event.target.value)
  );
});
