//入口文件
import Vue from 'vue'


//1.1导入路由
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter);

//2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource);
//导入app根组件
import app from './App.vue'


//按需导入Mint-ui中的组件
import { Header ,Swipe, SwipeItem} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui组件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


//1.3导入自己的router.js模块
import routerObj from './router.js'


var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router:routerObj//1.4挂在路由对象到vm实例上
});