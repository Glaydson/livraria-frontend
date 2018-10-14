<template>
  <div class="submitform">
    <div v-if="!submitted">
        <div class="form-group">
          <label for="titulo">Título</label>
          <input type="text" class="form-control" id="titulo" required v-model="livro.titulo" name="titulo">
        </div>
    
        <div class="form-group">
          <label for="numeroPaginas">Número de páginas</label>
          <input type="number" class="form-control" id="numeroPaginas" required v-model="livro.numeroPaginas" name="numeroPaginas">
        </div>

        <div class="form-group">
          <label for="preco">Preço</label>
          <input type="number" class="form-control" id="preco" required v-model="livro.preco" name="preco">
        </div>
    
        <button v-on:click="salvaLivro" class="btn btn-success">Salvar</button>
    </div>
    
    <div v-else>
      <h4>Livro Salvo!</h4>
      <button class="btn btn-success" v-on:click="novoLivro">Adicionar</button>
    </div>
  </div>
</template>
 
<script>
import http from "../http-common";
 
export default {
  name: "adiciona-livro",
  data() {
    return {
      livro: {
        id: 0,
        titulo: "",
        numeroPaginas: 0,
        preco: 0
      },
      submitted: false
    };
  },
  methods: {
    /* eslint-disable no-console */
    salvaLivro() {
      var data = {
        titulo: this.livro.titulo,
        numeroPaginas: this.livro.numeroPaginas,
        preco: this.livro.preco
      };
 
      http
        .post("/livro/novo", data)
        .then(response => {
          this.livro.livroID = response.data.id;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
 
      this.submitted = true;
    },
    novoLivro() {
      this.submitted = false;
      this.livro = {};
    }
    /* eslint-enable no-console */
  }
};
</script>
 
<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>