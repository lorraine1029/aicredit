import Vue from 'vue'
import Router from 'vue-router'

import FirstPage from '@/page/FirstPage'
import SecPage from '@/page/SecPage'
import ThirdPage from '@/page/ThirdPage'
import FourthPage from '@/page/FourthPage'
import FifthPage from '@/page/FifthPage'
import LoginPage from '@/page/LoginPage'
import RegPage from "@/page/RegPage";
import UserCenter from "@/page/UserCenter";
import BoardCommunity from "@/components/board/BoardCommunity";

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/FirstPage',
      name:'index',
      component: FirstPage
    },{
      path: '/',
      name:'comit',
      redirect:'/FirstPage'
    },
    {
      path: '/Secpage',
      component: SecPage,
      children:[
        {
        path:'board',
        component:BoardCommunity
      }
      ]
    },
    {
      path: '/ThirdPage',
      component: ThirdPage
    },
    {
      path: '/loans',
      component: FourthPage
    },
    {
      path: '/infor',
      component: FifthPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/reg',
      component: RegPage,
    },
    {
      path: '/my',
      component: UserCenter,
    }
  ]
})
