<template>
	<div class="tec1">
		<h3>超康早<br><small>{{pdata[0]}}</small></h3>
		<div class="content" v-once>     <!--直接写变量就好了-->
			<p class="img"><img v-bind:src= pdata[1] alt=""></p>
			<p>早熟，（7月下旬），紫红色，果粒12-15克，果穗500-1000克，口感特别好，脆，甜，含糖量16-20%，无香味，花芽分化特好，二次果大，避雨栽培，病害极少，生长势旺。</p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a v-bind:href=pdata[2] v-if=pdata[2]>超康早</a>
				<span v-else>没有了！</span>
			</div>
			<div><strong>下一篇: </strong>
				<a v-bind:href=pdata[3] v-if=pdata[3]>超康早</a>
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