<template>
	<div class="right">
		<div class="head">
            <h2>葡萄园风光
				 <span>您当前的位置：<a href="index.html">首页</a> > <a href="grape.html">葡萄园风光</a></span>
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