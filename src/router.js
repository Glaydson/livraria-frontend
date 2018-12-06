import Vue from "vue";
import Router from "vue-router";
import ListaLivros from "./components/ListaLivros.vue";
import AdicionaLivro from "./components/AdicionaLivro.vue";
import BuscaLivros from "./components/BuscaLivros.vue";
import Livro from "./components/Livro.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "livros",
      alias: "/livro",
      component: ListaLivros,
      children: [
        {
          path: "/livro/:id",
          name: "livro-details",
          component: Livro,
          props: true
        }
      ]
    },
    {
      path: "/adicionar",
      name: "adicionar",
      component: AdicionaLivro
    },
    {
      path: "/buscar",
      name: "buscar",
      component: BuscaLivros
    }
  ]
});