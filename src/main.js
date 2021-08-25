import Vue from "vue"
import App from "./App.vue"
import "./scss/styles.scss"
import store from "./store"
import router from "./router/router"
import ProgressBar from "vuejs-progress-bar"

Vue.config.productionTip = false
Vue.use(ProgressBar)

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app")
