<template>
	<div class="tec1">
		<h3>葡萄种植过程中树体的管理<br><small>2015-7-17 14:08:46  浏览次数：17</small></h3>
		<div class="content" v-once>
			<p>1、抹芽——4月初到中旬末，发芽后对双芽枝保留1个，每株苗留2个芽做为主蔓培养。如果只发一个芽子时，在4-5片叶时摘心，留好两个顶生副梢作为主蔓。</p>
			<p>2、主梢摘心——当新梢达到第一道铁丝高度（60-70cm）时，开始摘心。摘心口留3个副梢，顶生副梢向上生长做主蔓延长枝，两个侧生副梢向两边生长，作结果母枝培养。其余下部副梢可留1叶重摘心。</p>
			<p>主梢摘心前（新梢达50cm左右时）进行绑梢（达不到铁丝高度的对新梢实行“吊绑”）。</p>
			<p>3、副梢摘心——当第一次摘心后副梢超过第二道铁丝时（达50米以上），进行摘心。摘心口仍留3个副梢和主梢摘心时一样。第一副梢作为主蔓延长枝（向上直立绑扎），第二第三副梢向两边生长，可以不绑扎，任其吊在外边，做结果母枝培养。其余副梢留一叶摘心。</p>
			<p>第一次摘心时侧生副梢达7-9片叶摘心。除墒心口留一个副梢外，其余副梢抹除。</p>
			<p>4、及时去卷须。主蔓绑扎姿势呈倒八字型，从第一道铁丝开始，两主蔓间角度逐渐加大。</p>
			<p>5、如果8-9月份新梢仍然长势较旺时，可行第三次摘心。这次摘心口只留两个副梢，到第三道铁丝时，不再向上引缚，使其下垂生长。</p>
			<p class="img"><img src="../../dest/img/tec5_1.jpg" alt=""></p>
			<p class="img"><img src="../../dest/img/tec5_2.jpg" alt=""></p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong><a @click='click4'>葡萄保护地栽培的几项关键技术</a></div>
			<div><strong>下一篇: </strong>没有了！</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			click4:function(){
				this.$emit('change','tec4')
			}
		}
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

