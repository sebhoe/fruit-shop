import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { MdButton, MdList, MdIcon, MdAvatar, MdTabs, MdAutocomplete, MdField, MdMenu, MdHighlightText } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

[MdButton, MdList, MdIcon, MdAvatar, MdTabs, MdAutocomplete, MdField, MdMenu, MdHighlightText].forEach((dependency) => Vue.use(dependency));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
