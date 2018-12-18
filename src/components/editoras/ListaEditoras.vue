<template>
    <div class="list row">
        <div class="col-md-6">
            <h4>Lista de Editoras</h4>
            <ul>
                <li v-for="(editora, index) in editoras" :key="index">
                    <router-link :to="{
                            name: 'editora-details',
                            params: { editora: editora, id: editora.editoraID }
                        }">
                            {{editora.editoraID}} - {{editora.nome}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div>
    </div>
</template>
 
<script>
import http from "../../http-common";
 
export default {
  name: "lista-editoras",
  data() {
    return {
      editoras: []
    };
  },
  methods: {
    /* eslint-disable no-console */
    obterEditoras() {
      http
        .get("/livro/todos")
        .then(response => {
          this.livros = response.data; // JSON are parsed automatically.
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    /*obterEditoras() {
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
    refreshList() {
      this.obterLivros();
      //this.obterEditoras();
    }
    /* eslint-enable no-console */
  },
  mounted() {
    this.obterLivros();
    //this.obterEditoras();
  }
};
</script>
 
<style>
.list {
  text-align: left;
  max-width: 800px;
  margin: auto;
}
</style>