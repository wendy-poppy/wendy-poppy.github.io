<template>
	<div class="tec1">
		<h3>吉斯玛早<br><small>{{pdata[0]}}</small></h3>
		<div class="content" v-once>     <!--直接写变量就好了-->
			<p class="img"><img v-bind:src= pdata[1] alt=""></p>
			<p> 吉斯玛早，叶片心形，3-5裂，叶脉紫红色；新梢黄绿色带紫红，幼叶浅紫红，无绒毛；一年生枝红褐色，节间短；两性花，绿色。果穗圆锥形带歧肩，平均穗重600克，穗形整齐；果粒圆形，黄绿色，平均粒重4克；果皮薄，肉脆，无核，口感好，品质上；可溶性固形物22%，含酸量0.25%，为极早熟品种，开花至浆果成熟需60天左右。露地栽培5月上旬萌芽，6月上中旬开花，8月上中旬浆果成熟，设施栽培6月上中旬可成熟。生长势中庸，萌芽率75%-80%，结果系数1.7-1.8。</p>
			<p>特征特性 </p>
			<p>编辑 抗寒、抗病力较强。</p>
			<p>产量表现 </p>
			<p> 编辑 较丰产，盛果期亩产可达3300公斤。</p>
			<p>  栽培技术要点 </p>
			<p>编辑 采用嫁接育苗；可进行设施栽培或露地栽培埋土防寒越冬。适合棚架或篱架栽培，栽植密度为露地0.5-1×4米（篱架栽培）或带状双臂篱架0.5×1-2米；土壤以沙壤土、微酸至微碱性为宜；施肥按斤果斤肥，注意增施磷钾肥，坐果后叶面喷磷酸二氢钾；撤防寒土后灌透水，上冻前灌封冻水；以短梢和超短梢修剪为主，结果枝花前摘心；合理负载量每株为4-5公斤，叶果比为10-12：1；适当疏花疏果，提高果实的商品率；病虫害采用常规方法防治。</p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a v-bind:href=pdata[2] v-if=pdata[2]>吉斯玛早</a>
				<span v-else>没有了！</span>
			</div>
			<div><strong>下一篇: </strong>
				<a v-bind:href=pdata[3] v-if=pdata[3]>吉斯玛早</a>
				<span v-else>没有了！</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['pdata'],
	}
</script>
<style lang='sass' scoped>
	h3{
		line-height: 30px;
	    font-size: 18px;
	    font-weight: bold;
	    text-align: center;
	    padding-top: 10px;
	    margin-bottom: 10px;
	    small{
	    	font-size: 14px;
	    	font-weight: normal;
	    }
	}
	p{
    	margin:12px 0;
    	line-height: 21px;
    	font-size: 12px;
    	text-indent: 1.4em;
    }
    .img{
    	text-align:center;
    }
    .bottom{
    	margin:0 15px;
    	font-size:12px;
    	div{
    		padding-left: 10px;
    		line-height: 24px;
    		a{
    			&:hover{
    				text-decoration:underline;
    				color:#558f1a;
    			};
    		}
    	}
    }
</style>