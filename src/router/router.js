import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

import Main from "../pages/Main.vue"
import Second from "../pages/Second.vue"
import Third from "../pages/Third.vue"
import Loading from "../pages/Loading.vue"
import Fourth from "../pages/Fourth.vue"
import Fifth from "../pages/Fifth.vue"
import Record from "../pages/Record.vue"
import Final from "../pages/Final.vue"

let router = new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/second",
      name: "second",
      component: Second,
    },
    {
      path: "/third",
      name: "third",
      component: Third,
    },
    {
      path: "/fourth",
      name: "fourth",
      component: Fourth,
    },
    {
      path: "/fifth",
      name: "fifth",
      component: Fifth,
    },
    {
      path: "/loading",
      name: "loading",
      component: Loading,
    },
    {
      path: "/record",
      name: "record",
      component: Record,
    },
    {
      path: "/final",
      name: "final",
      component: Final,
    },
  ],
  mode: "history",
})

export default router
