import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Area from '../views/Area.vue'
import Country from '../views/Country.vue'
import Club from '../views/Club.vue'
import ClubProfile from '../views/ClubProfile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Area',
        component: Area
    },
    {
        path: '/:id/country-list/',
        name: 'Country',
        component: Country,
        props: true
    },
    {
        path: '/club-list',
        name: 'Club',
        component: Club
    },
    {
        path: '/club-profile/:clubId',
        name: 'ClubProfile',
        component: ClubProfile,
        props: true
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router