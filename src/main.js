import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme)



import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
 
  render: h => h(App)
}).$mount('#app')
