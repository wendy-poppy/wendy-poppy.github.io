<template>
	<div class="tec1">
		<h3>东方之星<br><small>{{pdata[0]}}</small></h3>
		<div class="content" v-once>     <!--直接写变量就好了-->
			<p class="img"><img v-bind:src= pdata[1] alt=""></p>
			<p>东方之星（欧里安踏露斯达）欧美杂交种，日本2004年登记的品质极好的新品种。</p>
			<p>果粒长椭圆形，果粒重10-12克，紫红色或紫黑色，可以无核化处理，肉质和纯欧洲种比较接近，较硬爽，食味最高的优秀品种，风味甜，糖度20度，可在树上挂果时间长,。果皮厚、不裂果、不脱粒，好处藏运输。抗病，丰产，栽培容易，是个很有潜力的品种。在大泽山地区9月上旬成熟。</p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a v-bind:href=pdata[2] v-if=pdata[2]>东方之星</a>
				<span v-else>没有了！</span>
			</div>
			<div><strong>下一篇: </strong>
				<a v-bind:href=pdata[3] v-if=pdata[3]>东方之星</a>
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