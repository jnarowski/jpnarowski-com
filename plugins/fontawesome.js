import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBook,
  faSearch,
  faSeedling,
  faBullhorn,
  faTired,
  faUser,
  faBriefcase,
  faPodcast,
  faGraduationCap,
  faBullseye
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faLinkedinIn, faFlickr } from '@fortawesome/free-brands-svg-icons'

// https://github.com/FortAwesome/vue-fontawesome#nuxtjs
// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// fas styles
library.add([
  faBook,
  faBullseye,
  faSeedling,
  faGraduationCap,
  faBullhorn,
  faBriefcase,
  faSearch,
  faUser,
  faTired,
  faPodcast
])

// fab styles
library.add([faFacebookF, faTwitter, faLinkedinIn, faFlickr])

// Register the component globally
Vue.component('fa', FontAwesomeIcon)
