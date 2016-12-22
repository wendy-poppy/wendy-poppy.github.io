<template>
	<div class="right">
		<div class="head">
            <h2>产品展示
				 <span>您当前的位置：
				 	<a href="index.html">首页</a> > <a href='#' @click='click'>产品展示</a>
				 	 {{pdata.right}} <a href="#">{{pdata.title}}</a>
				 </span>
            </h2>
        </div>
        <div class="body">
			<slot></slot>
        </div>
	</div>
	
	
</template>

<script>
	export default{
		props:{
			pdata:{
				right:{
					type:String,
					default:'',
				},
				title:{
					type:String,
					default:'',
				}
			}
		},
		methods:{
			click:function(){
				this.$emit('change','all')
			}
		}
	}
</script>


<style lang='sass' scoped>
	.right{
		width: 808px;
		float: right;
		overflow: hidden;
		.head{
			h2{
				background: url(../../dest/img/G_45.jpg) no-repeat;
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
		}
	}
	
</style>