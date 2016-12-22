<template>
	<div class="product">
		<ul class="list">
			<li v-for="item in items">
				<!-- 内部属性可以酱紫用遍历的值 -->
				<a v-bind:href=`product.html?+${item}`>
					<img v-bind:src=`../../dest/img/pro${item}.jpg` alt="">
					<p>户太8号</p>
				</a>
			</li>
		</ul>                                    
		<Pagination v-bind:pdata='pdata.pagination' ></Pagination>
	</div>
	
</template>

<script>
	import Pagination from '../component/pagination'
	export default{
		data(){
			return{
				items:[1,2,3,4,5,6,7,8,9,10,11,12],
			}
		},
		props:['pdata'],
		components:{
			Pagination,
		},
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