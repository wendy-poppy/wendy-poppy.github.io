<template>
	<div class="tec1">
		<h3>寒香蜜<br><small>{{pdata[0]}}</small></h3>
		<div class="content" v-once>     <!--直接写变量就好了-->
			<p class="img"><img v-bind:src= pdata[1] alt=""></p>
			<p> 欧美品系，叶片正反两面都生有绒毛，果穗圆锥形，单穗重400-600克，果粒圆形，着生紧密，平均单粒重4克左右，果皮浅粉红色，果肉较脆而多汁，含糖22%左右，味甜有香气，品质超群，适合大部人的口味，比京亚提早熟7天，树势较强，结果率高,双穗率高，丰产性强，抗病抗寒性强，膨大处理，果穗果粒可增大至8克，果穗可达到2000克。是露地和保护地栽培的最新优良品种。在吉林地区8月20日成熟。在浙江6月中下旬成熟。</p>
			<p>品种特点编辑 </p>
			<p>特早熟，耐阴雨，抗病力极强，枝条成熟性好。花芽极易形成。栽培容易。抗寒。品质极好，自然无核。缺点，果穗果粒稍小 ，需膨大处理。</p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a v-bind:href=pdata[2] v-if=pdata[2]>寒香蜜</a>
				<span v-else>没有了！</span>
			</div>
			<div><strong>下一篇: </strong>
				<a v-bind:href=pdata[3] v-if=pdata[3]>寒香蜜</a>
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