document.addEventListener("DOMContentLoaded", function() {
    const publicaciones = document.getElementById("publicaciones");
    const nuevaPublicacionBtn = document.getElementById("nuevaPublicacion");

    // Array para almacenar las publicaciones
    
    const publicacionesData = [
        {  titulo: "Mi primer comentario",autor:"Gustavo Cruz Enriquez" , contenido: "Bienvenido al blog digital YAOKISKI " },
        // Agrega más publicaciones aquí
    ];

    // Función para mostrar las publicaciones
    function mostrarPublicaciones() {
        publicaciones.innerHTML = "";
        publicacionesData.forEach((publicacion, index) => {
            const publicacionElement = document.createElement("article");
            publicacionElement.innerHTML = `
                <h2>${publicacion.titulo}</h2>
                <h1>${publicacion.autor}</h1>
                <h1>${publicacion.contenido}</h1>
            `;
            publicaciones.appendChild(publicacionElement);
        });
        
    }




    
// Obtener la hora de publicación y formatearla
const horaActual = new Date();
const horaFormateada = horaActual.toLocaleString(); // Puedes personalizar el formato según tus preferencias

// Mostrar la hora de publicación en un elemento HTML
const horaPublicacionElement = document.getElementById("hora-publicacion");
horaPublicacionElement.textContent = "Hora de publicación: ";

console.log("Hora de publicación: ");
    // Muestra las publicaciones al cargar la página
    mostrarPublicaciones();


   
      
    

    // Agrega una nueva publicación al hacer clic en el botón "Nueva Publicación"
    nuevaPublicacionBtn.addEventListener("click", function() {
        const titulo = prompt("Título de la publicación:");
        const autor = prompt("Autor de la publicación:");
        const contenido = prompt("Contenido de la publicación:");
        if (titulo && autor && contenido) {
            publicacionesData.push({ titulo,autor, contenido });
            mostrarPublicaciones();
        }
    });
});








