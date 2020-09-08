import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m)

const routes = [
  {path: '/', name: 'index' , component:page('index.vue')},
  {path: '/login', name: 'login' , component:page('Auth/login.vue')},
  {path: '/register', name: 'register' , component:page('Auth/register.vue')},
  {path: '/verification/verify/:id', name: 'verify' , component:page('Auth/verification/verify.vue')},
  {path: '/verification/resend', name: 'verification.resend' , component:page('Auth/verification/resend.vue')},
  {path: '/password/email', name: 'password.email' , component:page('Auth/verification/password/reset-email.vue')},
  {path: '/password/reset/:token', name: 'password.reset' , component:page('Auth/verification/password/password-reset.vue')},
  {
    path: '/settings',
    component:page('user/settings/index.vue'),
    children:[
      {path: '', redirect:{name:'settings.dashboard'}},
      {path:'dashboard',name:'settings.dashboard',component:page('user/settings/dashboard.vue')},
      {path:'about',name:'settings.about',component:page('user/settings/about.vue')},
    ]
  },
];


export function createRouter(){

  return new Router({
    routes,
    mode:'history'
  })

}
