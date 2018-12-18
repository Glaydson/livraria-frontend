<template>
  <div v-if="this.livro">
    <h4>Livro</h4>
    <div>
      <label>Título: </label> {{this.livro.titulo}}
    </div>
    <div>
      <label>Número de Páginas: </label> {{this.livro.numeroPaginas}}
    </div>
    <div>
      <label>Preço: </label> {{this.livro.preco}}
    </div>
    <div>
      <label>Autores: </label> 
      <ol>
        <li v-for="(autor, index) in livro.autores" :key="index">
          {{ autor.nome}}
        </li>
      </ol>
    </div>
    <div>
      <label>Editora: </label> {{this.livro.editora.nome}}
    </div>
    <span class="btn btn-danger" v-on:click="deleteLivro()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Por favor clique em um livro...</p>
  </div>
</template>
 
<script>
import http from "../../http-common";
 
export default {
  name: "livro",
  props: ["livro"],
  methods: {
    /* eslint-disable no-console */
    deleteLivro() {
      http
        .delete("/livro/delete/" + this.livro.livroID)
        .then(response => {
          console.log(response.data);
          this.$emit("refreshData");
          this.$router.push('/');
        })
        .catch(e => {
          console.log(e);
        });
    }
    /* eslint-enable no-console */
  }
};
</script>