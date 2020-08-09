import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import One from '../views/One.vue'
import Two from '../views/Two.vue'
import List from '../views/List.vue'
import Details from '../views/Details.vue'
import DynamicTable from '../views/tabledemo/dynamicTable.vue'
import CustomTable from '../views/tabledemo/customTable.vue'
import HBTable from '../views/tabledemo/hebingtable.vue'
import SelectDemo from '../views/select/SelectDemo.vue'
import DocumentStudy from '../views/DocumentStudy.vue'
import UploadAndDownLoad from '../views/file/UploadAndDownload.vue'
import SortDemo from '../views/select/SortDemo.vue'

import checkbox from '../views/elementui-demo/checkbox.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/documentStudy',
    name: 'documentStudy',
    component: DocumentStudy
  },
  {
    path: '/',
    redirect: '/checkbox'
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: checkbox
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
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
  },
  {
    path: '/customTable',
    name: 'customTable',
    component: CustomTable
  }, {
    path: '/hebingtable',
    name: 'hebingtable',
    component: HBTable
  }, {
    path: '/selectdemo',
    name: 'selectdemo',
    component: SelectDemo
  },
  {
    path: '/sortdemo',
    name: 'sortdemo',
    component: SortDemo
  }, {
    path: '/file',
    name: 'uploadAndDownLoad',
    component: UploadAndDownLoad
  }
]

const router = new VueRouter({
  routes
})

export default router
