import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Home' },
  { path: '/devices', component: 'DeviceList'},
  { path: '/statistics/:id', component: 'Statistics'}
]
const routes = routerOptions.map(route => {
  return{
    ...route,
    component: ()=> import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})
