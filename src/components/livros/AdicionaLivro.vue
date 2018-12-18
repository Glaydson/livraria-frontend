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

        <div class="form-group">
          <label for="autores">Autores</label><br/>
          <select v-model="livro.autores" multiple>
            <option v-for= "autor in autores" v-bind:key="autor.id" v-bind:value="autor">
              {{autor.nome}}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label for="editora">Editora</label><br/>
          <select v-model="livro.editora" size="3">
            <option v-for= "editora in editoras" v-bind:key="editora.id" v-bind:value="editora">
              {{editora.nome}}
            </option>
          </select>
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
import http from "../../http-common";
 
export default {
  name: "adiciona-livro",
  data() {
    return {
      livro: {
        id: 0,
        titulo: "",
        numeroPaginas: 0,
        preco: 0,
        autores: [],
        editora: ""
      },
      autores: [],
      editoras: [],
      submitted: false
    };
  },
  
  mounted: function() {
    /* eslint-disable no-console */
    http
      .get("/autor/todos")
      .then(response => {
        this.autores = response.data; // JSON are parsed automatically.
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    http
      .get("/editora/todos")
      .then(response => {
        this.editoras = response.data;
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });
        /* eslint-enable no-console */
  },
  methods: {
    /* eslint-disable no-console */
    salvaLivro() {
      var data = {
        titulo: this.livro.titulo,
        numeroPaginas: this.livro.numeroPaginas,
        preco: this.livro.preco,
        autores: this.livro.autores,
        editora: this.livro.editora
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
    },
    /*obterAutores() {
      http
        .get("/autor/todos")
        .then(response => {
          this.autores = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      },
    obterEditoras() {
    http
      .get("/editora/todos")
      .then(response => {
        this.editoras = response.data; // JSON are parsed automatically.
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
    },*/
      /* eslint-enable no-console */
  }
}
</script>
 
<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>