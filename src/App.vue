<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" >
      <router-link class="navbar-brand" to="/">Livraria</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Livros
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/listarLivros">Listar</router-link>
              <router-link class="dropdown-item" to="/adicionarLivro">Adicionar</router-link>
              <router-link class="dropdown-item" to="/buscarLivro">Buscar</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Editoras
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/listarEditoras">Listar</router-link>
              <router-link class="dropdown-item" to="/adicionarEditora">Adicionar</router-link>
              <router-link class="dropdown-item" to="/buscarEditora">Buscar</router-link>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"
              role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Autores
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/listarAutores">Listar</router-link>
              <router-link class="dropdown-item" to="/adicionarAutor">Adicionar</router-link>
              <router-link class="dropdown-item" to="/buscarAutor">Buscar</router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    
    <br />
    <router-view />
  </div>
</template>
 
<script>
export default {
  name: "app"
};
</script>
 
<style>
.site-info {
  color: blue;
  margin-bottom: 20px;
}

.btn-primary {
  margin-right: 5px;
}

.container-fluid {
  text-align: center;
  max-width: 800px;
}
</style>