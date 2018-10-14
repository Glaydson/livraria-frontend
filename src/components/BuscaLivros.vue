<template>
  <div class="searchform">
    <h4>Buscar pelo Título</h4>
    <div class="form-group">
      <input type="text" class="form-control" id="titulo" required v-model="titulo" name="titulo">
    </div>
 
    <div class="btn-group">
      <button v-on:click="buscarLivros" class="btn btn-success">Buscar</button>
    </div>
 
    <ul class="search-result">
      <li v-for="(livro, index) in livros" :key="index">
        <h6>{{livro.titulo}} (R$ {{livro.preco}})</h6>
      </li>
    </ul>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "buscar-livro",
  data() {
    return {
      titulo: "",
      livros: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    buscarLivros() {
      http
        .get("/livro/titulo/" + this.titulo)
        .then(response => {
          this.livros = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>
 
<style>
.searchform {
  max-width: 300px;
  margin: auto;
}
.search-result {
  margin-top: 20px;
  text-align: left;
}
</style>