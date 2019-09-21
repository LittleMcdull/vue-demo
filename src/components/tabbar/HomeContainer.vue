<template>
	<div>
		<mt-swipe :auto="3000">
			<!--			组件中使用v-for要使用key-->
						<mt-swipe-item v-for="item in lunboList" :key="item.url">
			<!--&lt;!&ndash;				v-bind(:)计算属性表达式&ndash;&gt;-->
							<img :src="item" alt="">
						</mt-swipe-item>
			<!-- <mt-swipe-item>
				<img src="../../images/0.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../images/1.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item>
				<img src="../../images/2.jpg" alt="">
			</mt-swipe-item> -->
		</mt-swipe>

		<!--		九宫格到六宫格改造-->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<span class="mui-icon mui-icon-home"></span>
				<div class="mui-media-body">新闻资讯</div>
			</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
				<div class="mui-media-body">图片分享</div>
			</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<span class="mui-icon mui-icon-chatbubble"></span>
				<div class="mui-media-body">商品购买</div>
			</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<span class="mui-icon mui-icon-location"></span>
				<div class="mui-media-body">留言反馈</div>
			</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<span class="mui-icon mui-icon-search"></span>
				<div class="mui-media-body">视频专区</div>
			</a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				<span class="mui-icon mui-icon-phone"></span>
				<div class="mui-media-body">联系我们</div>
			</a></li>
		</ul>
	</div>
</template>

<script>
    export default {
        data: function () {
            return {
                lunboList: []
            }
        },
        created() {
            this.getLunbo();
        },
        methods: {
            getLunbo() {
                this.$http.get('http://39.108.236.167:8080/boot/img').then(result => {
                    if (result.body.code == `0000`) {
                        //成功获取数据
						this.lunboList = result.body.list;
						console.log(this.lunboList);
                    } else {
                        //获取数据失败
                        alert('获取数据失败');
                        console.log('false');
                    }
                })
            }
        }
    }
</script>


<style scoped lang="less">
	.mint-swipe {
		height: 200px;

		.mint-swipe-item {
			/*&:nth-child(1){*/
			/*	background-color: #86ff1a;*/
			/*}*/
			/*&:nth-child(2){*/
			/*	background-color: cyan;*/
			/*}*/
			/*&:nth-child(3){*/
			/*	background-color: #c66b49;*/
			/*}*/

			img {
				height: 100%;
				width: 100%;
			}
		}
	}
	.mui-grid-view.mui-grid-9{
		background-color: white;
		.mui-table-view-cell{
			border: none;
			width: 33.3333%;
		}
	}


	//&代表交集选择器
</style>