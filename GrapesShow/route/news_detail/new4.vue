<template>
	<div class="newmd">	
		<h3>吃葡萄，有利于补血滋肾健脾
			<br><small>2015-7-16 17:54:16  浏览次数：24</small>
		</h3>
		<div class="content" v-once> 
			<p> 从中医的角度来说，葡萄性平，味甘酸，无毒，中医认为，葡萄可以“补血强智利筋骨，健胃生津除烦渴，益气逐水利小便，滋肾宜肝好脸色”，这里古方中医带大家了解一下葡萄的功效和作用：</p>
			<p>1.解除疲劳，葡萄中所含有的大量的葡萄糖和果糖，进入体内后会转化成能量，可迅速增强体力，有效地消除肉体的疲劳。因此疲劳时吃一些葡萄可以快速改善。 　</p>
			<p> 2.抗毒杀菌，葡萄中含有天然的聚合苯酚，能与病毒或细菌中的蛋白质化合，使之失去传染疾病的能力，常食葡萄对于脊髓灰白质病毒及其它一些病毒有良好杀灭作用，而使人体产生抗体;</p>
			<p> 3.改善过敏症状，防癌抗癌，葡萄皮中的白藜芦醇不仅能抑制发炎物质的运作，有效缓解过敏症状，还可以防止正常细胞癌变，并能抑制已恶变细胞扩散，有较强的防癌抗癌功能; 　</p>
			<p> 4.抗贫血，葡萄中还具有抗恶性贫血作用的维生素B12，常饮红葡萄酒，有益于治疗恶性贫血; 　　</p>
			<p>  5.调养肠胃、利胆，葡萄含多量果酸能帮助消化，清理肠胃垃圾，并对大肠杆菌、绿脓杆菌、枯草杆菌均有抗菌作用，葡萄中还含有维生素P，可降低胃酸毒性，治疗胃炎、肠炎及呕吐等;</p>
			<p>  5.调养肠胃、利胆，葡萄含多量果酸能帮助消化，清理肠胃垃圾，并对大肠杆菌、绿脓杆菌、枯草杆菌均有抗菌作用，葡萄中还含有维生素P，可降低胃酸毒性，治疗胃炎、肠炎及呕吐等;</p>
			<p>7.补益和兴奋大脑神经，葡萄果实中，葡萄糖、有机酸、氨基酸、维生素的含量都很丰富，可补益和兴奋大脑神经，对治疗神经衰弱有一定效果; </p>
			<p>8.美容养颜，葡萄籽中含有独一无二的前花青素，这种物质具有超强的抗酸化和抗氧化的功用，能在自由基伤害细胞前将它除去，从而达到紧致肌肤、延缓衰老的作用。常吃葡萄可使肤色红润，秀发乌黑亮丽。</p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/product/month_1509/201509191148451432.jpg' alt=""></p>
			
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a @click='click1'>哪种葡萄比较好吃</a>
			</div>
			<div><strong>下一篇: </strong>
				<a @click='click2'>秋季多吃葡萄 可预防脂肪肝</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['pdata'],
		methods:{
			click1:function(){
				this.$emit('change','new3')
			},
			click2:function(){
				this.$emit('change','new5')
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