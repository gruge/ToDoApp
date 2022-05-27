import Vue from 'vue'
import App from './App.vue'
import 'windi.css'
import moment from 'moment'

Vue.prototype.moment = moment

Vue.config.productionTip = false

new Vue({
    render: function(h) { return h(App) }
}).$mount('#app')