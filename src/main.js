import Vue from 'vue'
import App from './App'

import wcCheckbox from './wc-checkbox'
Vue.use(wcCheckbox);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
