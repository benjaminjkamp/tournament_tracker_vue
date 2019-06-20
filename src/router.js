import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Users/Signup.vue'
import Login from './views/Users/Login.vue'
import Logout from './views/Users/Logout.vue'
import UsersEdit from './views/Users/Edit.vue'
import RoundsShow from './views/Rounds/Show.vue'
import RoundsNew  from './views/Rounds/New.vue'
import RoundsEdit from './views/Rounds/Edit.vue'
import MatchesNew from './views/Matches/New.vue'
import MatchesEdit from './views/Matches/Edit.vue'
import CoursesNew from './views/Courses/New.vue'
import CoursesEdit from './views/Courses/Edit.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/users/edit',
      name: 'users-edit',
      component: UsersEdit
    },
    {
      path: '/rounds/new',
      name: 'rounds-new',
      component: RoundsNew
    },
    {
      path: '/rounds/:id/edit',
      name: 'rounds-edit',
      component: RoundsEdit
    },
    {
      path: '/rounds/:id',
      name: 'rounds-show',
      component: RoundsShow
    },
    
    {
      path: '/matches/:id/new',
      name: 'matches-new',
      component: MatchesNew
    },
    {
      path: '/matches/:id/edit',
      name: 'matches-edit',
      component: MatchesEdit
    },
    {
      path: '/courses/new',
      name: 'courses-new',
      component: CoursesNew
    },
    {
      path: '/courses/:id/edit',
      name: 'courses-edit',
      component: CoursesEdit
    }
  ]
})
