import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import BlockReverse from './views/BlockReverse.vue';
import HexagonalReverse from './views/HexagonalReverse.vue';
import LifeGame from './views/LifeGame.vue';
import TriangleDistances from './views/TriangleDistances.vue';
import TrDistances from './views/TrDistances.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/block-reverse',
            name: 'BlockReverse',
            component: BlockReverse,
        },
        {
            path: '/hexagonal-reverse',
            name: 'HexagonalReverse',
            component: HexagonalReverse,
        },
        {
            path: '/life-game',
            name: 'LifeGame',
            component: LifeGame,
        },
        {
            path: '/distances',
            name: 'TriangleDistances',
            component: TriangleDistances,
        },
        {
            path: '/tr-distances',
            name: 'TrDistances',
            component: TrDistances,
        },
    ]
})
