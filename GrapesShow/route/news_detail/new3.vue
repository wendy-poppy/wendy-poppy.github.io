<template>
	<div class="newmd">	
		<h3>哪种葡萄比较好吃
			<br><small>2015-7-16 17:51:18  浏览次数：12</small>
		</h3>
		<div class="content" v-once> 
			<p>当季是葡萄的旺季，大家都开始疯狂的食用葡萄。而葡萄的品种多种多样，那么，哪种葡萄比较好吃呢？ </p>
			<p>种植园人员介绍：当季的葡萄是最好吃的，不管是夏黑葡萄，红皮葡萄，红提，马奶葡萄，美人指其味道都非常的好吃。下面就详细了解一下。 </p> 
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1507/201507161751255174.jpg' alt=""></p>
			<p>1、夏黑葡萄：夏黑葡萄串很结实紧密，颗粒之间距离彼此贴近，深紫黑色的葡萄粒上面常常沾着白色的果粉，基本看不到绿色的梗籽。成熟的夏黑葡萄果皮比较厚，不是很好剥，跟果肉粘连。果肉比较紧致，水分含量不高，没什么酸味。</p>
			<p> 2、巨峰葡萄：巨峰葡萄的知名度比较高，适合的人群比较广泛。巨峰葡萄的果实个头更大，颗粒之间距离较大，相对松散一些，有的串平放着就可以看见连接果实的绿色梗子。巨峰葡萄剥好的果肉呈绿色。果实颗粒比较大，果肉比较软，糖度和水分的配比较均衡。</p>
			<p> 3、美人指葡萄：是葡萄的新品种，果粒呈细长形，前端有紫红色，基部稍淡，恰如染红指甲油的美女手指。 </p>
			<p> 4、玫瑰葡萄：肉质坚实易运输，黄色的果肉带点粉红头，颜色深浅不一，果粒圆圆的。好的玫瑰葡萄 紫中带黑，一入口，便有一种玫瑰的香味沁人心脾，还有一点麝香的味道，甜而不腻，没有一点苦涩味。 </p>
			<p>5、青衣青提：青提有着翡翠般的黄绿色，在阳光下有点微微的透光，很漂亮，果粒呈现出椭圆形，梗子有点发黑，上面有一层少量的淡淡的果粉。</p>
			<p>挑选葡萄也需要学问，在挑选葡萄中一定要保证果粒大小和颜色均匀，果实比较硬一点，都会比较好吃。买回家的葡萄，最好在2-5℃的低温下保存，高于5℃可能会造成葡萄内的糖分分解，甜度变淡。 </p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a @click='click1'>哪种葡萄比较好吃</a>
			</div>
			<div><strong>下一篇: </strong>
				<a @click='click2'>吃葡萄，有利于补血滋肾健脾</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['pdata'],
		methods:{
			click1:function(){
				this.$emit('change','new2')
			},
			click2:function(){
				this.$emit('change','new4')
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