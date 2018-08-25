import Vue from 'vue'
import Router from 'vue-router'


import Home from '../components/Home.vue'
import Inform from '../components/Inform.vue'
import My from '../components/My.vue'
import Load from '../view/Load.vue'
import Live from '../view/Live.vue'
import Eye from '../view/Neye.vue'
import Yidian from '../view/Yidaintopng.vue'
import Liangshen from '../view/Liangshen.vue'
import Dangjin from '../view/dshij.vue'
import Everys from '../view/everyname'
import Jians from '../view/zhijian'
import Tese from '../view/Tese'
import Everyph from '../view/everyph'
import Dege from '../view/detailG'
import Xiuge from '../view/Xiuge'
import Xiumi from '../view/Xiumi'
import Jiaod from '../view/jiaodang'
import Jifen from '../view/Jifen'
import Hudong from '../view/hudong'
import Jiming from '../view/Jiming'
import Sxh from '../view/sxh'
import Xdzj from '../view/xdzj'
import Xdz from '../view/xdzj2'
import zhge from '../view/zhangge'
import gejie from '../view/personal'
import mzpy from '../view/mzpy'
import huif from '../view/huif'
import map from '../view/map'
import news from '../view/news'
import study from '../view/study'
import join from '../view/join'
import comment from '../view/comment'
import review from '../view/review'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path:'/home',name:'home',component:Home},
    {path:'/inform',name:'inform',component:Inform},
    {path:'/my',name:'my',component:My},
    {path:'/load',component:Load},
    {path:'/live',component:Live},
    {path:'/eye',component:Eye},
    {path:'/yidian',component:Yidian},
    {path:'/liang',component:Liangshen},
    {path:'/dangj',component:Dangjin},
    {path:'/everys',component:Everys},
    {path:'/jians',component:Jians},
    {path:'/tese',component:Tese},
    {path:'/evph',component:Everyph},
    {path:'/dege',component:Dege},
    {path:'/xiuge',component:Xiuge},
    {path:'/xiumi',component:Xiumi},
    {path:'/jiaod',component:Jiaod},
    {path:'/jifen',component:Jifen},
    {path:'/jiming',component:Jiming},
    {path:'/hudong',component:Hudong},
    {path:'/sxh',component:Sxh},
    {path:'/xdzj',component:Xdzj},
    {path:'/xdz',component:Xdz},
    {path:'/zhge',component:zhge},
    {path:'/gejie',component:gejie},
    {path:'/mzpy',component:mzpy},
    {path:'/huif',component:huif},
    {path:'/map',component:map},
    {path:'/news',component:news},
    {path:'/study',component:study},
    {path:'/join',component:join},
    {path:'/comment',component:comment},
    {path:'/review',component:review},

  ]
})
