import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from '@/utils/http'
import {
  Button,
  Select,
  Container,
  Card,
  Form,
  Input
} from 'element-ui'

Vue.use(Button)
Vue.use(Select)
Vue.use(Container)
Vue.use(Card)
Vue.use(Form)
Vue.use(Input)

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }

Vue.use(VueAxios, axios)
