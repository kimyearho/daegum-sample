import Vue from 'vue'

import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'
import Element from 'element-ui'
import './styles/element-variables.scss'
import enLang from 'element-ui/lib/locale/lang/en'
import '@/styles/index.scss'
import App from './App'
import store from './store'
import router from './router'
import './icons'
import './permission'
import VueDataTables from 'vue-data-tables'
Vue.use(VueDataTables)

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDKpbGCZSsQkAJBFERvNJgsY9oWYHepBlk',
    libraries: 'places' // This is required if you use the Autocomplete plugin
  },
  installComponents: true
})

Vue.component('google-map', VueGoogleMaps.Map)
Vue.component(
  'ground-overlay',
  VueGoogleMaps.MapElementFactory({
    mappedProps: {
      opacity: {}
    },
    props: {
      source: { type: String },
      bounds: { type: Object }
    },
    events: ['click', 'dblclick'],
    name: 'groundOverlay',
    ctr: (google) => google.maps.GroundOverlay,
    ctrArgs: (options, { source, bounds }) => [source, bounds, options]
  })
)

Vue.use(Element, {
  size: Cookies.get('size') || 'medium',
  locale: enLang
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
