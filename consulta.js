// Simulación de datos
const registros = [
    { id: 1, texto: "En la mitología mexica, el ajolote (del náhuatl atl, agua y xólotl, monstruo) significa monstruo acuático y es la advocación acuática del dios Xólotl, hermano gemelo de Quetzalcoatl; sin embargo, el dios Xólotl se hizo monstruoso a causa del nacimiento", foto: "img/ajo.png", fecha: "2023-11-12" },
    { id: 2, texto: "El conejo de la luna es una leyenda náhuatl que narra la historia de Quetzalcoatl, una de las deidades más importantes para todas las culturas originarias de México y de cómo un paseo por el mundo se convirtió en un momento que atesoró la humildad de un pequeño ser para siempre.", foto: "img/luni.jpeg", fecha: "2023-11-13" },
    // Agrega más registros según sea necesario
];

// Ordena los registros por fecha de manera descendente
const registrosOrdenados = registros.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

// Muestra los registros en la interfaz
const listaRegistros = document.getElementById("listaRegistros");
registrosOrdenados.forEach(registro => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <p>${registro.fecha}: ${registro.texto}</p>
        <img src="${registro.foto}" alt="Foto del registro ${registro.id}" style="max-width: 300px;">
    `;
    listaRegistros.appendChild(listItem);
});

// Función para la navegación al formulario
function navegarAFormulario() {
    window.location.href = "blog.html";
}
