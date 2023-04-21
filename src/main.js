import Vue from 'vue'
import {
  Button,
  Select,
  Option,
  Dropdown,
  DropdownMenu,
  DatePicker,
  Row,
  Col,
  Divider
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/ru-RU'
import locale from 'element-ui/lib/locale'
import './main.scss'
import App from './App.vue'

locale.use(lang)

Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DatePicker)
Vue.use(Row)
Vue.use(Col)
Vue.use(Divider)

new Vue({
  el: '#book-bar',
  render: h => h(App)
})
