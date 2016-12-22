<template>
	<div class="product">
		<ul class="list" id='todetail'>
			<li v-for="item in items">
				<!-- 内部属性可以酱紫用遍历的值 -->
				<a v-bind:href=`product.html?+${item}`>
					<img v-bind:src=`../../dest/img/pro${item}.jpg` alt="">
					<p v-if='item<=12'>户太8号</p>
					<p v-if='item<=16 && item>12'>吉斯玛早</p>
					<p v-if='item<=19 && item>16'>东方之星</p>
					<p v-if='item<=24 && item>19'>超康早</p>
					<p v-if='item<=27 && item>24'>寒香蜜</p>
					<p v-if='item<=31 && item>27'>葡萄酒</p>
				</a>
			</li>
		</ul>                                     <!--记住不能用驼峰-->
		<Pagination v-bind:pdata='pdata.pagination' v-on:page-change="change"></Pagination>
	</div>
</template>

<script>
	import Pagination from '../component/pagination'
	export default{
		// this.$emit('increment',10) 一参是触发父组件的事件，二参是触发事件时带的参数，用来传递数据
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
			},
			click:function(item){
				this.$emit('todetail',item)
			}
		},
		computed:{
			items:function(){
				if(this.num == 1){
					return [1,2,3,4,5,6,7,8,9,10,11,12]
				}else if(this.num == 2){
					return [13,14,15,16,17,18,19,20,21,22,23,24]
				}else if(this.num == 3){
					return [25,26,27,28,29,30,31]
				}
			},
			hutai:function(){
				if(this.num ==1 ){
					return true
				}else{
					return false
				}
			},
			jisi:function(){
				if(this.num ==2 ){
					return true
				}else{
					return false
				}
			},
			dongfang:function(){
				if(this.num ==3 ){
					return true
				}else{
					return false
				}
			},
			chaokang:function(){
				if(this.num ==4 ){
					return true
				}else{
					return false
				}
			},
			hanxiang:function(){
				if(this.num ==5 ){
					return true
				}else{
					return false
				}
			},
			putao:function(){
				if(this.num ==6 ){
					return true
				}else{
					return false
				}
			}
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