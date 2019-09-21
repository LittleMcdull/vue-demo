
import VueRouter from 'vue-router'


//导入对象的组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'


var routerObj = new VueRouter({
    routes: [
        {path:'/',component:HomeContainer},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shop',component:ShopContainer},
        {path:'/search',component:SearchContainer},
    ],
    linkActiveClass:'mui-active'//覆盖路由默认设置高亮的类router-link-exact-active
});

export default routerObj;