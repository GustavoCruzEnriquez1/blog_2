document.addEventListener("DOMContentLoaded", function() {
    
    const articleForm = document.getElementById("article-form");
    
    // Simulación de inicio de sesión
    
    
    
   

    // Simulación de creación o edición de artículos
   articleForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("article-title").value;
       
        const content = document.getElementById("article-content").value;
        // Realiza la lógica de guardar el artículo (simulación)
        console.log(`Artículo guardado - Título: ${title}, Contenido: ${content}`);
    });
   
});



function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); 
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); 
  
  }
  