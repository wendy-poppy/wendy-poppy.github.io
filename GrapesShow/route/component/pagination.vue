<template>
	<div class="pagination">
		<span class="total">共页 {{pdata.pageNum}}页次:{{nowPage}}/{{pdata.pageNum}}</span>
		<span class="first">首页</span>
		<span class="pre">上一页</span>
		<ul>
			<li v-for="n in pdata.pageNum">{{n}}</li>
		</ul>
		<span class="next">下一页</span>
		<span class="last">尾页</span>
		<select name="" id="">
			<option value="" v-for="n in pdata.pageNum">{{n}}</option>
		</select>	
	</div>
</template>

<style lang='sass' scoped>
	.pagination{
		color:#333;
		font-size: 12px;
		line-height: normal;
		padding: 10px 0;
		overflow: hidden;
		height: 21px;
		span,li{
			margin:2px;
			padding: 1px 5px;
			background: #f6f6f6;
			border: 1px solid #ccc;
			float:left;
			cursor: pointer;
		}
		select{
			margin:2px;
			float: left;
		}
		.active{
			background:#f8b253;
			border: 1px solid #e0600a;
			color: white;
		}
	}
	
</style>

<script>

	export default {
		data(){
			return{
				nowPage:1,
			}
		},
		props:{
			pdata: {
				type: Object,
				default: function () {
			        return { pageNum:1 }
			    }
			},
		},
		methods:{

		},
		watch:{
			nowPage:function(){
				this.$emit('page-change',this.nowPage)
				var li = $('.pagination li');
				var option = $('.pagination option')
				li.css('color','')
				li.eq(this.nowPage-1).css('color','red');
				option.removeAttr('selected')
				option.eq(this.nowPage-1).attr('selected',1)

			}
		},
		//create组件刚被挂在，mounted 内部元素已加载完毕
		mounted:function(){
			var li = $('.pagination li');
			var span = $('.pagination span');
			var option = $('.pagination option')
			var select = $('.pagination select')
			//初始显示当前页红色 select也是当前页
			li.eq(this.nowPage-1).css('color','red');
			option.eq(this.nowPage-1).attr('selected',1);
			if(this.pdata.pageNum == 1){
				return;
			}
			//定义that给内部函数使用
			var that = this;
			//hover效果
			span.not('.total').mouseenter(function(){
				span.removeClass("active")
				$(this).addClass("active")
			})
			span.not('.total').mouseleave(function(){
				$(this).removeClass("active")
			})
			li.not('.total').hover(function(){
				li.removeClass("active")
				$(this).addClass("active")
			},function(){
				$(this).removeClass("active")
			})
			//首页和第一页初始默认没有效果
			$('.pre').mouseenter(function(){
				$(this).removeClass("active")
			})
			$('.first').mouseenter(function(){
				$(this).removeClass("active")
			})
			//页码点击
			li.click(function(){
				that.nowPage= $(this).text();
				active();
			})
			//下拉选择
			select.change(function(){
				that.nowPage= $('option:selected').text()
				active();
			})
			//上一页
			$('.pre').click(function(){
				that.nowPage--;
				if(that.nowPage<=1){
					that.nowPage =1;
				}
				active();
			})
			//上一页
			$('.next').click(function(){
				that.nowPage++;
				if(that.nowPage>=that.pdata.pageNum){
					that.nowPage =that.pdata.pageNum;
				}
				active();
			})
			//首页
			$('.first').click(function(){
				that.nowPage=1;
				active();
			})
			//尾页
			$('.last').click(function(){
				that.nowPage=that.pdata.pageNum;
				active();
			})
			// 按钮活动状态
			function active(){
				if(that.nowPage == 1){
					$('.pre').mouseenter(function(){
						$(this).removeClass("active")
					})
					$('.first').mouseenter(function(){
						$(this).removeClass("active")
					})
				}else {
					$('.pre').mouseenter(function(){
						span.removeClass("active")
						$(this).addClass("active")
					})
					$('.first').mouseenter(function(){
						span.removeClass("active")
						$(this).addClass("active")
					})
				}

				if(that.nowPage == that.pdata.pageNum){
					$('.next').mouseenter(function(){
						$(this).removeClass("active")
					})
					$('.last').mouseenter(function(){
						$(this).removeClass("active")
					})
				}else{
					$('.next').mouseenter(function(){
						span.removeClass("active")
						$(this).addClass("active")
					})
					$('.last').mouseenter(function(){
						span.removeClass("active")
						$(this).addClass("active")
					})
				}
			}
		},
	}

	

</script>