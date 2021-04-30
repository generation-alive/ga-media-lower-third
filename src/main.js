import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import 'vue-animate-transitions/dist/vue-animate-transitions.min.css'
import * as Icons from 'vue-feather-icons'

Vue.config.productionTip = false

// installing the icons globally so the payloads can just contain the icon name as string
function installComponents (Vue, components) {
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })
}

installComponents(Vue, Icons)

const vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.Vue = vue
