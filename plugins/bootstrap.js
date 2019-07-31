import Vue from 'vue'

import bCard from 'bootstrap-vue/es/components/card/card'
import bPagination from 'bootstrap-vue/es/components/pagination'
import bCol from 'bootstrap-vue/es/components/layout/col'
import bRow from 'bootstrap-vue/es/components/layout/row'
import bNavbar from 'bootstrap-vue/es/components/navbar/navbar'
import bNavbarToggle from 'bootstrap-vue/es/components/navbar/navbar-toggle'
import bNavbarNav from 'bootstrap-vue/es/components/navbar/navbar-nav'
import bFormInput from 'bootstrap-vue/es/components/form-input/form-input'
import bCollapse from 'bootstrap-vue/es/components/collapse/collapse'
import bProgress from 'bootstrap-vue/es/components/progress/progress'

Vue.component('b-col', bCol)
Vue.component('b-collapse', bCollapse)
Vue.component('b-form-input', bFormInput)
Vue.component('b-row', bRow)
Vue.component('b-card', bCard)
Vue.directive('b-pagination', bPagination)
Vue.component('b-navbar', bNavbar)
Vue.component('b-navbar-toggle', bNavbarToggle)
Vue.component('b-navbar-nav', bNavbarNav)
Vue.component('b-progress', bProgress)
