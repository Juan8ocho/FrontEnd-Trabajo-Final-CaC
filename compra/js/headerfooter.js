const headerTemplate = `  <nav class="navbar navbar-expand-lg" style="background-color: #353434">
<div class="container-fluid">
  <div class="logimg">
  <a class="logo" href="../index.html"><img src="./Imagenes/codoacodo.png" class="img-fluid" width="128"  alt=""/></a>
  <h1 class="nav-link active text-light">Conf Bs As</h1>
 </div>
 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="justify-content:end;">
  <div class="collapse navbar-collapse display:flex; justify-content:end;" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
      <li class="nav-item">
        <a class="nav-link active text-light" aria-current="page" href="#">La conferencia</a>
      </li>
      <li class="nav-item">
       <a class="nav-link text-secondary" href="#">Los Oradores</a>
      </li>
      <li class="nav-item">
       <a class="nav-link  text-secondary" href="#">El lugar y la fecha</a>
      </li>
      <li class="nav-item">
          <a class="nav-link text-secondary" href="#">Conviertete en orador</a>
        </li>
      <li class="nav-item">
        <a class="nav-link text-success" href="#">Comprar tickets</a>
      </li>
    </ul>
  </div>
</div>
</div>
</nav>`

const footerTemplate = `  <footer  style="background-color: #1e4d67">
<div class="letras" style="display: flex; justify-content: space-around;" id="contenedor" > 
 <a  class="nav-link  text-light" href="#">Preguntas <br> Frecuentes </a> <hr>
 <a class="nav-link  text-light" href="#">Contáctanos</a> <hr>
 <a class="nav-link  text-light" href="#">Prensa</a> <hr>
 <a class="nav-link  text-light" href="#">Conferencias</a> <hr>
 <a class="nav-link  text-light" href="#">Términos y <br> condiciones</a> <hr>
 <a class="nav-link text-light" href="#">Privacidad</a>  <hr>
 <a class="nav-link text-light" href="#">Estudiantes</a> <hr>
</div>

</footer>`

const header = document.getElementsByTagName('header')[0]
const footer = document.getElementsByTagName('footer')[0]

header.innerHTML = headerTemplate
footer.innerHTML = footerTemplate

// todo esto se hace para no tener la necesidad de crear header y footer en todos los html

