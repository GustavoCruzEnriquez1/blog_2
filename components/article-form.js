import { LitElement, html, css } from 'lit-element';
import './login-litelement';


export class LoginLit extends LitElement {
  static get properties() {
    return {
      login: { type: Boolean }
    };
  }

  static get styles() {
    return css`
        login-litelement {
            display: flex;
            position: absolute;
            right: 38%;
            top: 10%;
        }
    `;
  }

  render() {
    return html`
        ${ this.login 
          ? html` <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">

  <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;600&display=swap" rel="stylesheet">

  <link href="https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css" rel="stylesheet">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

   
     <!--TITULO DEL BLOG-->
    <title>Blog Digital</title>
    <link rel="stylesheet" href="styles.css">
     
  
   
</head>


<script src="./components/article-form.js"></script>

<nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand" href="YAO.html"><img src="img/ajo.png" class="yao" alt="logo"></a>
    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">

       


        <li class="nav-item">
          <a class="nav-link" href="YAO.html" >YAOKISKI</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="blog.html">COMENTARIOS</a>
        </li>

    



      </ul>

     
    </div>

  </div>
</nav>

<section id= "hero">
  <div class="container">
  <div class="container-center">
<h1><b>TU ESTILO NO NACE SE CREA</b></h1>
<h2>Yo no cumplo propositos. Yo desbloqueo logros.</h2>
</div>
</div>
</section>

<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>


<center>
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block"
            src="img/teo.jpg">
        </div>
        
        <div class="carousel-item">
          <img class="d-block"
            src="img/luni.jpeg"
            alt="Third slide">
        </div>

        <div class="carousel-item">
          <img class="d-block" 
          src="img/ajo.png">
        </div>
      </div>

      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  </center>


<div class="quien">
  <h1><b>MISIÓN.</b></h1>
  
Ser un negocio dedicado a la elaboración de playeras, que mediante estampados modernos logren representar 
las costumbres, tradiciones de nuestro país, buscando concientizar a los jóvenes sobre la belleza de nuestro México.
 Con productos de la más alta calidad, aportando al desarrollo de la industria nacional. Así mismo generamos beneficios
  para los accionistas, sus empleados y la comunidad a través de la eficiencia de los procesos productivos y de comercialización. 
  Conformamos un equipo humano capaz, con sólidos principios éticos, comprometido con la empresa y orientado al servicio de sus consumidores.</p>
</div>

<div class="vi">
  <h1><b>  VISIÓN.</b></h1>
Posicionarnos como la mejor empresa en la elaboración de playeras temáticas y otras líneas complementarias, en México 
logrando un crecimiento sostenido y una presencia creciente de nuestros productos en el mercado nacional, así mismo ser
 reconocidos como los líderes en innovación, con productos de alto valor percibido y alta rotación, manteniendo la lealtad 
 y preferencia de nuestros clientes con la más alta calidad.

</p>
</div>

<div class="ob">
  <h1><b>  OBJETIVOS</b></h1>
Ofrecer ropa de mejor calidad satisfaga las necesidades y gustos del mercado potencial, vender ropa a la moda que cumpla con 
los requerimientos de estilo en el segmento del mercado.
</p>
</div>

      
</div>
</form>
</div>


<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
crossorigin="anonymous"></script>
<script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>

<script src="./components/article-pos.js"></script>
</body>
<link rel="stylesheet" href="styles2.css">

<footer >
 
  Derechos reservados &copy; 2023<br>
  Diseñado por: TownSka <br>
  Email: YAOKISKI_117@hotmail.com <br>
  www.PLAYERAS_YAOKISKI.com
  <ul class="list-inline">
    <li class="list-inline-item"><a href="#"><ion-icon name="logo-instagram"></ion-icon>  </a></li>
    <li class="list-inline-item"><a href="#"><ion-icon name="logo-facebook"></ion-icon>  </a></li>
    <li class="list-inline-item"><a href="#"><ion-icon name="logo-twitter"></ion-icon>  </a></li>
    <li class="list-inline-item"><a href="#"><ion-icon name="logo-youtube"></ion-icon>  </a></li>

  </ul>
</footer>

</div>
</nav>

</html>
 ` 
          : html` <login-litelement @signin="${ this._hiddenLogin }"></login-litelement> ` }
    `;
  }

  _hiddenLogin() {
    this.login = true;
  }
}



