import Vue from "vue";
import Router from "vue-router";
import ListaLivros from "./components/livros/ListaLivros.vue";
import AdicionaLivro from "./components/livros/AdicionaLivro.vue";
import BuscaLivros from "./components/livros/BuscaLivros.vue";
import Livro from "./components/livros/Livro.vue";
import Home from  "./Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/listarLivros",
      name: "listarLivros",
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
      path: "/adicionarLivro",
      name: "adicionarLivro",
      component: AdicionaLivro
    },
    {
      path: "/buscarLivro",
      name: "buscar",
      component: BuscaLivros
    }
  ]
});