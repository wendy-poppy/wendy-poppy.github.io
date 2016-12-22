<template>
	<div class="grape">
		<ul class="list">
			<li v-for="item in items">
				<!-- 内部属性可以酱紫用遍历的值 -->
				<a v-bind:href=`grape.html?_${item}`>
					<img v-bind:src=`../../dest/img/${item}.jpg` alt="">
					<p>葡萄园风光</p>
				</a>
			</li>
		</ul>                                     <!--记住不能用驼峰-->
		<Pagination v-bind:pdata='pdata.pagination' v-on:page-change="change"></Pagination>
	</div>
</template>

<script>
	import Pagination from './pagination'
	export default{
		data(){
			return{
				num:1,
			}
		},
		props:['pdata'],
		components:{
			Pagination,
		},
		methods:{
			change:function(n){
				this.num =n;
			}
		},
		computed:{
			items:function(){
				if(this.num == 1){
					return [1,2,3,4,5,6,7,8,9,10,11,12]
				}else if(this.num == 2){
					return [13,14,15]
				}
			}
		}
	}
</script>


<style lang='sass' scoped>
	.list{
		overflow: hidden;
	}
	li{
		margin:20px 10px 10px 20px;
		float: left;
		a{	
			display: block;
			
		}
		img{
			width:230px;
			height: 154px;
			float: left;
		}
		p{
			line-height: 44px;
			background: #f2f2f2;
			color: #323232;
			font-weight: bold;
			font-size: 12px;
			text-align: center;
		}
		&:hover{
			p{
				background: #468b00;
				color: white;
			}
		};
	}
</style>