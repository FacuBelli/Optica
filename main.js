document.getElementById("header").innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="#">LOGO</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">Nosotros</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Anteojos
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="receta.html">Receta</a></li>
          <li><a class="dropdown-item" href="sol.html">Sol</a></li>
          <li><a class="dropdown-item" href="clientes.html">Clientes</a></li>

        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>`
document.getElementById("footer").innerHTML = "<p>Centro Optico Illodo&reg;</p>"