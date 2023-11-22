function publicar() {
    const comentario = document.getElementById("comentario").value;
    const fotoInput = document.getElementById("foto");
    const foto = fotoInput.files[0];
  
    if (!comentario && !foto) {
        alert("Por favor, escribe un comentario o selecciona una foto antes de publicar.");
        return;
    }
  
    const listaPublicaciones = document.getElementById("listaPublicaciones");
  
    // Crear un nuevo elemento de publicación
    const nuevaPublicacion = document.createElement("div");
    nuevaPublicacion.className = "publicacion";
  
    // Crear un elemento de párrafo para el comentario
    const comentarioElement = document.createElement("p");
    comentarioElement.textContent = comentario;
  
    // Crear un elemento de imagen para la foto
    if (foto) {
        const fotoElement = document.createElement("img");
        fotoElement.src = URL.createObjectURL(foto);
        fotoElement.alt = "Imagen de la publicación";
        nuevaPublicacion.appendChild(fotoElement);
    }
  
    // Agregar el comentario al elemento de publicación
    nuevaPublicacion.appendChild(comentarioElement);
  
    // Agregar la nueva publicación a la lista de publicaciones
    listaPublicaciones.prepend(nuevaPublicacion);
  
    // Limpiar el área de comentario y foto después de publicar
    document.getElementById("comentario").value = "";
    fotoInput.value = "";
  }
  