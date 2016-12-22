<script>
	import Pagination from '../component/pagination' 
	export default{
		props:['pdata'],
		components:{
			Pagination,
		},
		mounted:function(){
			var view = document.getElementById('tecView')
			var h = view.getElementsByTagName('h3') 
			var length = h.length;
			var that = this;
			// $('#tecView').find("h3").click(function(){  //JQ如果不是直接的自己，下标都是0
			// 	console.log($(this).index())
			// 	that.$emit('change',`tec${length-$(this).index()}`)
			// })
			for(var i=0; i<length; i++){
				h[i].index = i;
				h[i].onclick=function(){
					that.$emit('change',`tec${length-this.index}`)
				}
			}
		}
	}
</script>

<template>
	<div class="technology" id="tecView">
		<ul>
			<li>
				<h3><a >·葡萄种植过程中树体的管理</a>
					<span>2015-07-17</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;1、抹芽——4月初到中旬末，发芽后对双芽枝保留1个，每株苗留2个芽做为主蔓培养。如果只发一个芽子时，在4-5片叶时摘心，留好两个顶生副梢作为主蔓。　　2、主梢摘心——当新梢达到第一道铁丝高度（60-70cm）时，开始摘心。摘心口留3个副梢，顶生副梢向上生长...</p>
			</li>
			<li>
				<h3><a >·葡萄保护地栽培的几项关键技术</a>
					<span>2015-07-17</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;保护地栽培能有效地控制葡萄生长发育所需的生态环境因子，满足葡萄生育期间的最佳条件，提高产品质量，生产出形美色好味醇的葡萄；能根据果农的意愿，使果实提前或延后成熟，避开露地萄萄上市旺季，取得更好的经济效益。葡萄保护地栽培的几项关键技术...</p>
			</li>
			<li>
				<h3><a >·种葡萄，不懂技术风险大</a>
					<span>2015-07-17</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;近年来，阜阳市葡萄种植面积逐年递增，目前全市已达2万余亩，在取得良好经济效益的同时，也有部分农民因跟风种植、不懂技术，遭受了不同程度损失。    张学德是颍东区老庙镇农民，家里有10多亩地，长期以种植小麦、玉米为...</p>
			</li>
			<li>
				<h3><a >·有机葡萄幼龄树种植技术措施</a>
					<span>2015-07-16</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;眼下，北方有机葡萄正陆续成熟上市，而有机葡萄果实采收期正值高温季节，采后贮藏过程中果实容易失水皱缩、掉梗、褐变和腐烂，品质极易败坏。市场期短，建议科学有机葡萄保鲜，延长上市时间。下面就介绍一下有机葡萄幼龄树种植技术措施：　　有机葡萄...</p>
			</li>
			<li>
				<h3><a  >·葡萄生理性病害简介</a>
					<span>2015-07-16</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;葡萄的生理性病害主要有：日灼病、水罐子病、酸腐病、生理性裂果病、落花落果病、缺素症等。    一、日灼病：是幼果生长期遇到强光照射,导致水分失调所产生的一种生理病害。发病时期在幼果膨大中后期,高温多雨、树势徒长、...</p>
			</li>
		</ul>
		<Pagination v-bind:pdata='pdata.pagination'></Pagination>
	</div>
</template>

<style lang='sass' scoped>
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
				cursor: pointer;
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
</style>