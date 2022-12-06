import {createRouter, createWebHistory} from 'vue-router'

import Service from '../views/Service.vue'

import About from '../views/About.vue'
import Home from '../views/Home.vue'

const routes= [

    {path: '/about', nome: 'About', component: About},

    {path: '/service', nome: 'Service', component: Service},

    {path: '/', nome: 'Home', component: Home}
]

const router = createRouter ( { 
          history: createWebHistory (),
            routes  
    })

export default router
