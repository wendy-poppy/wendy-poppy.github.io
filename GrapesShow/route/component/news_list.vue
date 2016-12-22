<script>
	import Pagination from './pagination' 
	export default{
		props:['pdata'],
		components:{
			Pagination,
		}
	}
</script>

<template>
	<div class="news">
		<ul>
			<li>
				<h3><a href="news.html?new7">·户太8号</a>
					<span>2015-09-21</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;新品种名称：户太八号（hu tai ba hao）&nbsp;&nbsp;&nbsp;&nbsp;审定时间：1996年1月10日&nbsp;&nbsp;&nbsp;&nbsp;亲本：奥林匹亚葡萄芽变的欧美杂交品种&nbsp;&nbsp;果实性状介绍：成熟期7月中旬（一...</p>
			</li>
			<li>
				<h3><a href="news.html?new6">·养生专家提示初秋多吃葡萄可助排毒解内热</a>
					<span>2015-07-17</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;眼下正是葡萄大量上市的季节，作为世界四大水果（苹果、葡萄、柑橘和香蕉）之一，葡萄除营养丰富、酸甜可口外，初秋时节多吃还能帮助机体排毒，解内热。    中医养生专家、中国中医科学院西苑医院杨力教授说，中医认为葡萄可...</p>
			</li>
			<li>
				<h3><a href="news.html?new5">·秋季多吃葡萄 可预防脂肪肝</a>
					<span>2015-07-16</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;葡萄是营养丰富价值的水果，而且还很实用，可以做出葡萄酒、葡萄干，具有美容、耐贮存的作用，据医学证实，葡萄还具有护肝的作用，秋季多吃葡萄可预防脂肪肝。 　　    葡萄含有多种维生素　　    ...</p>
			</li>
			<li>
				<h3><a href="news.html?new4">·吃葡萄，有利于补血滋肾健脾</a>
					<span>2015-07-16</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;从中医的角度来说，葡萄性平，味甘酸，无毒，中医认为，葡萄可以“补血强智利筋骨，健胃生津除烦渴，益气逐水利小便，滋肾宜肝好脸色”，这里古方中医带大家了解一下葡萄的功效和作用： 　　    1.解除疲劳，葡萄中所含有...</p>
			</li>
			<li>
				<h3><a href="news.html?new3">·哪种葡萄比较好吃</a>
					<span>2015-07-16</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;当季是葡萄的旺季，大家都开始疯狂的食用葡萄。而葡萄的品种多种多样，那么，哪种葡萄比较好吃呢？ &nbsp;&nbsp;    种植园人员介绍：当季的葡萄是最好吃的，不管是夏黑葡萄，红皮葡萄，红提，马奶葡萄，美人指其味道都非常的...</p>
			</li>
			<li>
				<h3><a href="news.html?new2">·2014年9月 我公司参与安徽省农产品展，赢得好评！</a>
					<span>2014-09-21</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;2014年9月，我公司参与在省会合肥举办的安徽省农副产品展览，展览期间，我司葡萄产品，获得广大群众认可！赢得好评！</p>
			</li>
			<li>
				<h3><a href="news.html?new1">·2013年5月3日淮南市市委方西屏书记一行到我公司视察、指导工作</a>
					<span>2013-05-03</span>
				</h3>
				<p>&nbsp;&nbsp;&nbsp;&nbsp;2013年5月3日淮南市市委方西屏书记一行到我公司视察、指导工作。方书记与园内工作人员进行了亲切交谈国星种植园内葡萄种植及质量得到市领导及相关单位肯定。</p>
			</li>
		</ul>
		<Pagination v-bind:pdata='pdata.pagination'></Pagination>
	</div>
</template>

<style lang='sass' scoped>
	.news{height:712px;}
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
</style>