
<template>
	<div class="left">
		<div class="left_top">
			<h1>产品展示</h1>
			<ul>
				<li><a href="product.html?_hutai">户太8号</a></li>
				<li><a href="product.html?_jisi">吉斯玛早</a></li>
				<li><a href="product.html?_dongfang">东方之星</a></li>
				<li><a href="product.html?_chaokang">超康早</a></li>
				<li><a href="product.html?_hanxiang">寒香蜜</a></li>
				<li><a href="product.html?_putao">葡萄酒</a></li>
			</ul>
		</div>
		<div class="left_bottom">
			<h1>科技知识</h1>
			<div class="box">
			<dl class="bottom_list" id="_list">
				<!-- 挑战后用？号刷新，再取值判断，用#不行 -->
				<a href='technology.html?_tec5'>
					<dt>葡萄种植过程中树体的管理</dt>
					<dd>　　1、抹芽——4月初到中旬末，发芽后对双芽枝保留1个，每株苗留2个芽做为主蔓培养。如...</dd>
				</a>
				<a href='technology.html?_tec4'>
					<dt>葡萄保护地栽培的几项关键技术</dt>
					<dd>  保护地栽培能有效地控制葡萄生长发育所需的生态环境因子，满足葡萄生育期间的最佳条件，...</dd>
				</a>
				<a href='technology.html?_tec3'>
					<dt>种葡萄，不懂技术风险大</dt>
					<dd>  近年来，阜阳市葡萄种植面积逐年递增，目前全市已达2万余亩，在取得良好经济效益的同时...</dd>
				</a>
				<a href='technology.html?_tec2'>
					<dt>有机葡萄幼龄树种植技术措施</dt>
					<dd>  眼下，北方有机葡萄正陆续成熟上市，而有机葡萄果实采收期正值高温季节，采后贮藏过程中...</dd>	
				</a>
				<a href='technology.html?_tec1'>
					<dt>葡萄生理性病害简介</dt>
					<dd>  葡萄的生理性病害主要有：日灼病、水罐子病、酸腐病、生理性裂果病、落花落果病、缺素症...</dd>
				</a>
				<a href='technology.html?_tec5'>
					<dt>葡萄种植过程中树体的管理</dt>
					<dd>　　1、抹芽——4月初到中旬末，发芽后对双芽枝保留1个，每株苗留2个芽做为主蔓培养。如...</dd>
				</a>
				<a href='technology.html?_tec4'>
					<dt>葡萄保护地栽培的几项关键技术</dt>
					<dd>  保护地栽培能有效地控制葡萄生长发育所需的生态环境因子，满足葡萄生育期间的最佳条件，...</dd>
				</a>
				<a href='technology.html?_tec3'>
					<dt>种葡萄，不懂技术风险大</dt>
					<dd>  近年来，阜阳市葡萄种植面积逐年递增，目前全市已达2万余亩，在取得良好经济效益的同时...</dd>
				</a>
				<a href='technology.html?_tec2'>
					<dt>有机葡萄幼龄树种植技术措施</dt>
					<dd>  眼下，北方有机葡萄正陆续成熟上市，而有机葡萄果实采收期正值高温季节，采后贮藏过程中...</dd>
				</a>
				<a href='technology.html?_tec1'>
					<dt>葡萄生理性病害简介</dt>
					<dd>  葡萄的生理性病害主要有：日灼病、水罐子病、酸腐病、生理性裂果病、落花落果病、缺素症...</dd>
				</a>
			</dl>
			</div>
		</div>
	</div>
</template>

<style lang='sass' scoped>
	.left{
		width: 295px;
		float: left;
		h1{
			height: 113px;
			background: url(../dest/img/pn_03.jpg) no-repeat;
			font-size: 30px;
			font-family:'微软简粗黑';
			color:white;
			text-align: center;
			line-height: 113px;
		}
		.left_top{
			width: 295px;
			height: 482px;
			padding-bottom: 30px;
			ul{
				padding: 0 15px 15px;
				background: #468b00;
				overflow: hidden;
				li{
					margin-top: 15px;
					padding-left: 30px;
					line-height: 44px;
					font-size: 18px;
					color:#333;
					background: url(../dest/img/pn_10.jpg);
					cursor: pointer;
					&:hover{
						background: url(../dest/img/pn_07.jpg) no-repeat;
					};
					a{
						display: block;
					}
				}
			}
		}
		.left_bottom{
			.box{
				padding:0 15px 15px;
				background: #468b00;
				height: 264px;
				overflow:hidden;
				a{
					overflow: hidden;
					display: block;
					margin-bottom:10px;
				}
				dt{
					line-height: 28px;
					text-align: center;
					color: white;
					font-size: 14px;
				}
				dd{  
					height: 44px;
					line-height: 20px;
					color:#b7d29c;
					font-size:12px;
					border-bottom: 1px dashed white;
					padding-bottom:10px;
					
				}
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
		props:[],
		mounted:function(){
			//轮播
			var length = $('.bottom_list').children().length;
			var timer =null,timer1=null;
			var n=0;
			var i=16;
			clearInterval(timer1)
			timer1=setInterval(function(){
				clearInterval(timer)
				timer = setInterval(function(){
					i--
					n += 93*i/120;
					if(i<1){
						i = 16;
						clearInterval(timer)
					}
					if(n>=930){
						n =0;
					}
					$('.bottom_list').css('margin-top',-n+'px');
				},25)
			},3000)		
		}
	}
</script>