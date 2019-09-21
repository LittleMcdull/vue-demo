#这是一个项目
#在制作购物车小图标的时候操作会多一些，先把扩展图标的样式copy到项目样式中，copy扩展字体库ttf文件到项目中，为购物车小图标添加如下样式mui-icon-extra mui-icon-extra-cart
#改造tabbar 为router-link
##设置路由高亮
###点击tabbar中路由路由链接显示对应的路由组件

##制作首页轮播图
加载首页轮播图数据
1.获取数据，如何获取使用vue-resource  npm i vue-resource -S
2.使用vue-resource的this.$http.get('').then(result=>{})
3.获取到的数据要保存data身上
4.使用v-for循环渲染每一个item项