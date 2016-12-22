<template>
	<div class="newmd">	
		<h3>2013年5月3日淮南市市委方西屏书记一行到我公司视察、指导工作
			<br><small>2013-5-3 17:27:47  浏览次数：20</small>
		</h3>
		<div class="content" v-once> 
			<p> 2013年5月3日淮南市市委方西屏书记一行到我公司视察、指导工作。方书记与园内工作人员进行了亲切交谈国星种植园内葡萄种植及质量得到市领导及相关单位肯定。</p>   
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/20150921174338681.jpg' alt=""></p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/201509211743542479.jpg' alt=""></p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/201509211743599584.jpg' alt=""></p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/2015092117440791.jpg' alt=""></p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/201509211744127422.jpg' alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/20150921174422777.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211744285778.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211744351596.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211744419253.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211744475440.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211744526376.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211744572299.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211745026748.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211745082537.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211745154912.jpg" alt=""></p>
			<p class="img"><img src="http://www.ahgxny.com/upLoad/news/month_1509/201509211745203817.jpg" alt=""></p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a @click='click1'>户太8号</a>
			</div>
			<div><strong>下一篇: </strong>
				<a @click='click2'>2014年9月 我公司参与安徽省农产品展，赢得好评！</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['pdata'],
		methods:{
			click1:function(){
				this.$emit('change','new7')
			},
			click2:function(){
				this.$emit('change','new2')
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