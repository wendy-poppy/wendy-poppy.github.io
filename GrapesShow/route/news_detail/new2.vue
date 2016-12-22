<template>
	<div class="newmd">	
		<h3>2014年9月 我公司参与安徽省农产品展，赢得好评！
			<br><small>2014-9-21 17:47:57  浏览次数：15</small>
		</h3>
		<div class="content" v-once> 
			<p> 2014年9月，我公司参与在省会合肥举办的安徽省农副产品展览，展览期间，我司葡萄产品，获得广大群众认可！赢得好评！</p>   
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/201509211749127450.jpg' alt=""></p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/20150921174917329.jpg' alt=""></p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/20150921174922642.jpg' alt=""></p>
			<p class="img"><img src='http://www.ahgxny.com/upLoad/news/month_1509/20150921174927864.jpg' alt=""></p>
		</div>
		<hr>
		<div class="bottom">
			<div><strong>上一篇: </strong>
				<a @click='click1'>2013年5月3日淮南市市委方西屏书记一行到我公司视察、指导工作</a>
			</div>
			<div><strong>下一篇: </strong>
				<a @click='click2'>哪种葡萄比较好吃</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['pdata'],
		methods:{
			click1:function(){
				this.$emit('change','new1')
			},
			click2:function(){
				this.$emit('change','new3')
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