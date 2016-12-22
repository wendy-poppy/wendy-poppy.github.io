<template>
	<div class="newmd">	
		<h3>秋季多吃葡萄 可预防脂肪肝
			<br><small>2015-7-16 17:55:17  浏览次数：23</small>
		</h3>
		<div class="content" v-once> 
			<p>  葡萄是营养丰富价值的水果，而且还很实用，可以做出葡萄酒、葡萄干，具有美容、耐贮存的作用，据医学证实，葡萄还具有护肝的作用，秋季多吃葡萄可预防脂肪肝。</p>
			<p><strong>葡萄含有多种维生素</strong></p>
			<p>脂肪肝发展到一定程度时，患者的右胁肋部就会感到不适或者胀闷感，如果时常感到头晕恶心、身体困重、乏力，多属于湿浊内停型脂肪肝。此类脂肪肝患者可以多吃点葡萄。</p>
			<p>葡萄含糖类中的葡萄糖、蔗糖、果糖、木糖;含酸类中的柠檬酸、苹果酸、枸橼酸、酒石酸。还含蛋白质、胡萝卜素、多种维生素，对缓解脂肪肝病情有很好的帮助。</p>
			<p><strong>脂肪肝患者多吃葡萄　</strong></p>
			<p>中医认为，葡萄性平、味甘酸，能补气血，强筋骨，益肝阴，利小便，舒筋活血，暖胃健脾，除烦解渴，对肝病康复、肝癌预防有重要作用。因此，脂肪肝患者可以在秋天适当的多吃些葡萄，对脂肪肝康复治疗有很好的辅助作用。 </p>
			<p> 现代医学则证明，葡萄中所含的多酚类物质是天然的自由基清除剂，具有很强的抗氧化活性。此外，它还具有抗炎作用，能与细菌、病毒中的蛋白质结合，使它们失去致病能力。国外的研究证明，新鲜的葡萄、葡萄叶、葡萄干都具有抵抗病毒的能力。</p>
			<p>葡萄中含有丰富的葡萄糖及多种维生素，对保护肝脏、减轻腹水和下肢浮肿的效果非常明显，还能提高血浆白蛋白，降低转氨酶。葡萄中的葡萄糖、有机酸、氨基酸、维生素对大脑神经有兴奋作用，对肝炎伴有的神经衰弱和疲劳症状有改善效果。</p>
			<p>葡萄中的果酸还能帮助消化、增进食欲，防止肝炎后脂肪肝的发生。葡萄干是肝炎患者补充铁的重要来源。用葡萄根100克至150克煎水服下，对黄疸型肝炎有一定辅助疗效。</p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/product/month_1509/201509191148508926.jpg' alt=""></p>
			
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a @click='click1'>吃葡萄，有利于补血滋肾健脾</a>
			</div>
			<div><strong>下一篇: </strong>
				<a @click='click2'>养生专家提示初秋多吃葡萄可助排毒解内热</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['pdata'],
		methods:{
			click1:function(){
				this.$emit('change','new4')
			},
			click2:function(){
				this.$emit('change','new6')
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