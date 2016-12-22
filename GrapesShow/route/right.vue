<script>
	//导航组件
	import Manor from './component/manor';
	import News from './component/news';
	import Product from './component/product';
	import Grape from './component/grape';
	import Technology from './component/technology';
	import Message from './component/message';
	import Concat from './component/concat';

	//technology详情组件
	import Tec1 from './technology_detail/tec1'
	import Tec2 from './technology_detail/tec2'
	import Tec3 from './technology_detail/tec3'
	import Tec4 from './technology_detail/tec4'
	import Tec5 from './technology_detail/tec5'
	import List from './product_detail/list'

	//product详情组件
	// import List from './product_detail/list'
	export default{
		data(){
			return{
				show:'putao'
			}
		},
		props:['pdata'],
		components:{
			Manor:Manor,
			News,
			Product,
			Grape,
			Technology,
			Message,
			Concat,

			Tec1,Tec2,Tec3,Tec4,Tec5,
			List,
		}
	}
</script>

<template>
	<div class="right">
		<div class="head">
            <h2>葡萄园风光
				 <span>您当前的位置：<a href="">首页</a> > <a href="">庄园简介</a></span>
            </h2>
        </div>
        <div class="body">
        	<!-- <Manor></Manor> -->
			<!-- <News v-bind:pdata='pdata.news'></News> -->
			<!-- <Product v-bind:pdata='pdata.product'></Product> -->
			<!-- <Grape v-bind:pdata='pdata.grape'></Grape> -->
			<!-- <Technology v-bind:pdata='pdata.technology'></Technology> -->
			<!-- <Message v-bind:pdata='pdata.message'></Message> -->
			<!-- <Concat></Concat> -->

			<!-- <Tec5></Tec5> -->

			<!-- <List v-bind:pdata='{pagination:{pageNum:1}}' v-bind:show='show'></List> -->
        </div>
	</div>
</template>

<style lang='sass' scoped>
	.right{
		width: 808px;
		float: right;
		overflow: hidden;
		.head{
			h2{
				background: url(../dest/img/G_45.jpg) no-repeat;
				padding: 21px 0 0 55px;
				height:45px;
				line-height:45px;
				color:white;
				span{
					float: right;
					font-size: 12px;
					margin-right: 6px;
					a{
						color:white;
						&:hover{
							text-decoration:underline;
						};
					}
				}
			}
		}
		.body{
			padding: 10px;
			border: 1px solid #558f1a;
			line-height: 21.6px;
		}
	}	
</style>