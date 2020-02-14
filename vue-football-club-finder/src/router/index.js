import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Area from '../views/Area.vue'
import Country from '../views/Country.vue'
import Club from '../views/Club.vue'
import ClubProfile from '../views/ClubProfile.vue'
import PlayerProfile from '../views/PlayerProfile.vue'

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
        path: '/player-profile/:playerId',
        name: 'PlayerProfile',
        component: PlayerProfile,
        props: true
    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router