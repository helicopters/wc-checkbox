import Vue from 'vue'
import wcCheckbox from './wcCheckbox'

export default {
	install (Vue, options={}) {
		Vue.component('wcCheckbox', Vue.extend(wcCheckbox))
	}
}