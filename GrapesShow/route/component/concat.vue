<template>
	<div class="right">
		<div class="head">
            <h2>联系我们
				 <span>您当前的位置：<a href="index.html">首页</a> > <a href="#">联系我们</a></span>
            </h2>
        </div>
        <div class="body">
        	<div class="concat" v-once>
				<p>    品种：户太8号</p>
				<p>    商标：孙庙户态</p>
				<p>    地址：安徽省淮南市谢家集区孙庙乡刘庙村 </p>
				<p>    公司名称：安徽国星生态农业有限公司</p>
				<p>    联系电话：0554-6901822</p>
				<p>    全国免费服务热线：400-6792-992</p>
				<img src="../../dest/img/concat.jpg" alt="">
			</div>
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
			.concat{
				height: 712px;
			}
			p{
				text-indent: 1.5em;
				margin:12px 0;
				font-size: 12px;
			}
			img{
				display: block;
				margin:0 auto;
			}
		}
	}
	
</style>

<script>
	export default{
		data(){
			return{

			}
		},
	}
</script>