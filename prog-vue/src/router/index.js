import Vue from 'vue'
import VueRouter from 'vue-router'
import General from '../views/index.vue'
import Week1 from '../views/week1.vue'
import Week2 from '../views/week2.vue'
import Week3 from '../views/week3.vue'
import Week4 from '../views/week4.vue'
import Week5 from '../views/week5.vue'
import All from '../views/all.vue'

Vue.use(VueRouter)

const routes= [
    {
        path:'/',
        name:'General',
        component:General
    },
    {
        path:'/week1',
        name:'Week1',
        component:Week1
    },
    {
        path:'/week2',
        name:'Week2',
        component:Week2
    },
    {
        path:'/week3',
        name:'Week3',
        component:Week3
    },
    {
        path:'/week4',
        name:'Week4',
        component:Week4
    },
    {
        path:'/week5',
        name:'Week5',
        component:Week5
    },
    {
        path:'/all',
        name: 'All',
        component:All
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router