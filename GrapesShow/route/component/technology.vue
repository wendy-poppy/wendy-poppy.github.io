<script>
	export default{
		props:['pdata'],
		methods:{
			click:function(){
				this.$emit('change','view')
			}
		}
	}
</script>

<template>
	<div class="right">
		<div class="head">
            <h2>科技知识
				 <span>您当前的位置：<a href="index.html">首页</a> > <a @click='click'>科技知识</a></span>
            </h2>
        </div>
        <div class="body">
        	<slot></slot>
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
						cursor: pointer;
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
			.technology{height:712px;}
			h3{
				font-size: 12px;
				font-weight: bold;
				color: #333;
				height: 30px;
				a{
					&:hover{
						text-decoration:underline;
						color: #558f1a;
					};
				}
				span{
					float: right;
					margin-right: 6px;
				}
			}
			p{
				line-height: 25px;
				margin-bottom:10px;
				height: 50px;
				border-bottom: 1px dashed #ccc;
				font-size: 12px;
				color: #636363;
			}
		}
	}	
	
</style>