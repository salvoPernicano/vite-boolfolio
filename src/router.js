import { createRouter, createWebHistory } from "vue-router";

import Homepage from './pages/HomePage.vue'
import ProjectList from './pages/ProjectList.vue'
import SingleProject from './pages/SingleProject.vue'

const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path : '/',
            name : 'home',
            component : Homepage
        },
        {
            path : '/blog',
            name : 'blog',
            component : ProjectList
        },
        {
            path : '/blog/:slug',
            name : 'single-project',
            component : SingleProject
        },
    ]
});

export {router};