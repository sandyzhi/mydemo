import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import One from '../views/One.vue'
import Two from '../views/Two.vue'
import List from '../views/List.vue'
import Details from '../views/Details.vue'
import DynamicTable from '../views/tabledemo/dynamicTable.vue'
import HBTable from '../views/tabledemo/hebingtable.vue'
import SelectDemo from '../views/select/SelectDemo.vue'
import DocumentStudy from  '../views/DocumentStudy.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/documentStudy'
    },
    {path:'/documentStudy',name:'documentStudy',component:DocumentStudy},
    {
        path: 'dynamicTable',
        redirect: '/dynamicTable'
    }, {
        path: '/hebingtable',
        name: 'hebingtable',
        component: HBTable
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    { path: '/selectDemo', mame: 'selectDemo', component: SelectDemo },
    {
        path: '/list',
        name: 'List',
        component: List
    },
    {
        path: '/details',
        name: 'Details',
        component: Details
    }, {
        path: '/one',
        name: 'One',
        component: One
    },
    {
        path: '/two',
        name: 'Two',
        component: Two
    },
    {
        path: '/dynamicTable',
        name: 'dynamicTable',
        component: DynamicTable
    }

    // ,
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    routes
})

export default router