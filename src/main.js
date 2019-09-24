// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'

//import VueScrollProgress from 'vue-scroll-progress'



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  head.link.push({
   rel: 'stylesheet',
    href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css"
  })
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)
  
  //Vue.use(VueScrollProgress)
//  Vue.use(VueAgile)
 
}


