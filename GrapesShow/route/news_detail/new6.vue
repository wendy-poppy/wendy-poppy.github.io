<template>
	<div class="newmd">	
		<h3>养生专家提示初秋多吃葡萄可助排毒解内热
			<br><small>2015-7-17 8:19:54  浏览次数：45</small>
		</h3>
		<div class="content" v-once> 
			<p> 眼下正是葡萄大量上市的季节，作为世界四大水果（苹果、葡萄、柑橘和香蕉）之一，葡萄除营养丰富、酸甜可口外，初秋时节多吃还能帮助机体排毒，解内热。</p>
			<p><  中医养生专家、中国中医科学院西苑医院杨力教授说，中医认为葡萄可以益气补血、生津止渴、健脾利尿。人体在经历了一个炎热潮湿的夏季后，体内聚集了大量的毒素，而且内热重、身体困乏，葡萄有很好的利小便的功效，在初秋季节，适当多吃一些，可以帮助人体排出毒素，消除内热。</p>
			<p> 红白绿紫黑，市场上的葡萄色彩各异，杨力教授说，除了葡萄共有的营养以外，不同颜色的葡萄各有营养偏重性。</p>
			<p>红色葡萄含逆转酶，可软化血管、活血化淤，防止血栓形成，心血管病人不妨多吃。逆转酶在红葡萄皮里含量最丰富，最好连皮一起吃。白葡萄具有补肺气、润肺功效，很适合咳嗽、患呼吸系统疾病的人食用。绿葡萄则偏重于清热解毒。紫葡萄富含花青素，可以美容抗衰老。黑葡萄则滋阴养肾、黑头发的功效更为突出。</p>
			<p> “吃葡萄不吐葡萄皮”，从营养角度说，这句顺口溜应改为“吃葡萄不吐皮和籽”，葡萄皮和葡萄籽聚集了葡萄中大部分营养，吃葡萄时最好整颗吃。如果觉得口感不太好，可把葡萄连皮带籽榨成葡萄汁饮用。但要提醒的是，葡萄性偏凉，胃寒的人一次不要吃太多。</p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/201509211646573438.jpg' alt=""></p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a @click='click1'>秋季多吃葡萄 可预防脂肪肝</a>
			</div>
			<div><strong>下一篇: </strong>
				<a @click='click2'>户太8号</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['pdata'],
		methods:{
			click1:function(){
				this.$emit('change','new5')
			},
			click2:function(){
				this.$emit('change','new7')
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