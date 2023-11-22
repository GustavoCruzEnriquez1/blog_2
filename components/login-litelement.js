import { html, css, LitElement } from 'lit';

export class LoginLitelement extends LitElement {


  static styles = css`

  `;

  render() {
    return html`
  
<div class="container">
      <link rel="stylesheet" href="registro.css">
      
     
        <h1>Formulario</h1>
        
          <h2>Registro</h2>
          <input type="text" id="nombre" placeholder="Nombre de usuario" required>
          <input type="text" id="apellido" placeholder="Apellido" required>
          <input type="text" id="email" placeholder="Correo Electronico o Telefono " required>
          <input type="password" id="password" placeholder="Contraseña" required>
          
          <button @click="${this._login}">Ingresar</button>

            
          <a class="re" href="#" onclick="signOut();">Regresar</a>
      
      </div>

    

    `;
  }





  
  _login() {
    const nombre = this.shadowRoot.querySelector("#nombre").value;
    const apellido = this.shadowRoot.querySelector("#apellido").value;
    const email = this.shadowRoot.querySelector("#email").value;
    const pass = this.shadowRoot.querySelector("#password").value;

    if(!!email && !!pass && !!nombre && !!apellido) {
        this.dispatchEvent(new CustomEvent('signin', {
            detail: { login: true },
            bubbles: true, composed: true
        }));
    }
    
}

 
}






customElements.define('login-litelement', LoginLitelement);