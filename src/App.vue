<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h3>Livraria</h3>
        </div>
        <nav>
            <router-link class="btn btn-primary" to="/">Lista de Livros</router-link>
            <router-link class="btn btn-primary" to="/adicionar">Adicionar Livro</router-link>
            <router-link class="btn btn-primary" to="/buscar">Buscar Livro</router-link>
        </nav>
        <br/>
        <router-view/>
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
}
</style>