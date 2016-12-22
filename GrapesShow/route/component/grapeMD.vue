<template>
	<div class="grapeMD">
		<h3>
			<span v-if="pdata[4]=='基地'">葡萄园基地</span>
			<span v-else>葡萄园风光</span>
			<br><small>{{pdata[0]}}</small>
		</h3>
		<div class="content" v-once>
			<p class="img"><img v-bind:src= pdata[1] alt=""></p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a v-bind:href=pdata[2] v-if=pdata[2]>
					<span v-if="pdata[4]=='基地'">葡萄园基地</span>
					<span v-else>葡萄园风光</span>
				</a>
				<span v-else>没有了！</span>
			</div>
			<div><strong>下一篇: </strong>
				<a v-bind:href=pdata[3] v-if=pdata[3]>
					<span v-if="pdata[4]=='基地'">葡萄园基地</span>
					<span v-else>葡萄园风光</span>
				</a>
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