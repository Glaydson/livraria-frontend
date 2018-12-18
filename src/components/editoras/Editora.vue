<template>
  <div v-if="this.editora">
    <h4>Editora</h4>
    <div>
      <label>Nome: </label> {{this.editora.nome}}
    </div>
    <div>
      <label>Cidade: </label> {{this.editora.cidade}}
    </div>
    <span class="btn btn-danger" v-on:click="deleteEditora()">Delete</span>
  </div>
  <div v-else>
    <br/>
    <p>Por favor clique em uma editora...</p>
  </div>
</template>
 
<script>
import http from "../../http-common";
 
export default {
  name: "editora",
  props: ["editora"],
  methods: {
    /* eslint-disable no-console */
    deleteEditora() {
      http
        .delete("/editora/delete/" + this.editora.editoraID)
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