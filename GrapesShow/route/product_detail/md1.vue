<template>
	<div class="tec1">
		<h3>户太8号<br><small>{{pdata[0]}}</small></h3>
		<div class="content" v-once>     <!--直接写变量就好了-->
			<p class="img"><img v-bind:src= pdata[1] alt=""></p>
			<p>户太八号葡萄多次结果能力强，生产中一般结2次果。一次果667 m2产量可达1000kg，二次果667 m2产量达1000—1500kg。该品种7月上中旬成熟，从萌芽到果成熟95—104d，成熟期比巨峰早上市15d左右。“户太8号”葡萄，树体生势强，耐低温，不裂果，成熟后在树上挂至8月中下旬不落粒。耐贮性好，常温下存放10d以上，果实完好无损。对黑痘病、白腐病、灰霉病、霜霉病等抗病性较强。经过该村几年来的栽种和实践，在生产上总结出了一套切实可行的栽培管理技术。</p>
			<p>特征特性 </p>
			<p>属欧美杂种。嫩梢绿色，梢尖半开张微带紫红色，绒毛中等密。幼叶浅绿色，叶缘带紫红色，下表面有中等白色绒毛。成年叶片近圆形，大，深绿色，上表面有网状皱褶，主脉绿色。叶片多为5裂。锯齿中等锐。叶柄洼宽广拱形。卷须分布不连续，2分叉。冬芽大，短卵圆形、红色。枝条表面光滑，红褐色，节间中等长。两性花。果穗圆锥形，果粒着生较紧密。果粒大，近圆形，紫黑色或紫红色，酸甜可口，果粉厚，果皮中厚，果皮与果肉易分离，果肉细脆，无肉囊，每果1～2粒种子。平均粒重9.5—10.8克，可溶性固形物16.5%～18.6%，总糖含量 18 %，总酸含量 0.25%～0.45%，Vc含量20.0 ～26.54mg/100g，成熟期在7月上、中旬。</p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a v-bind:href=pdata[2] v-if=pdata[2]>沪太8号</a>
				<span v-else>没有了！</span>
			</div>
			<div><strong>下一篇: </strong>
				<a v-bind:href=pdata[3] v-if=pdata[3]>沪太8号</a>
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