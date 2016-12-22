<template>
	<div class="right">
		<div class="head">
            <h2>在线留言
				 <span>您当前的位置：<a href="index.html">首页</a> > <a href="#">在线留言</a></span>
            </h2>
        </div>
        <div class="body">
        	<div class="message">
				<div class="message_list">
					<ul>
						<li>
							<dl>
								<dt class="info">【王先生】  你们家葡萄酒怎么样<span> 2015-09-22</span></dt>
								<dd>我准备中秋订购葡萄酒送亲朋，你能给我介绍一下你们家的葡萄酒吗？</dd>
								<dt class="reinfo">管理员回复</dt>
								<dd>感谢您对我们的关注，请保持手机的畅通，我们将尽快与您取得联系 </dd>
							</dl>
						</li>
					</ul>
				</div>
				<Pagination></Pagination>
				<h3>留言反馈</h3>
				<table class="msg">
					<tr>
						<td class="pre">留言标题：</td>
						<td><input type="text" class="title"> *</td>
					</tr>
					<tr>
						<td class="pre">姓名：</td>
						<td><input type="text" class="name"> *</td>
					</tr>
					<tr>
						<td class="pre">电话：</td>
						<td><input type="text" class="phone"></td>
					</tr>
					<tr>
						<td class="pre">QQ：</td>
						<td><input type="number"></td>
					</tr>
					<tr>
						<td class="pre">家庭地址：</td>
						<td><input type="text"></td>
					</tr>
					<tr>
						<td class="pre">反馈意见：</td>
						<td><textarea name="" id="" cols="50" rows="6"></textarea> *</td>
					</tr>
					<tr >
						<td class="pre">验证码：</td>
						<td>
							<input type="text" class="verify"/>
							<img v-bind:src=`../../dest/img/verify${verify}.bmp`  alt=""/>
						</td>
					</tr>
					<tr>
						<td class="pre"></td>
						<td><input type="button" value='在线提交' @click='submit' ></td>
					</tr>
				</table>
			</div>
        </div>
	</div>
	
</template>


<script>
	import Pagination from './pagination';

	export default{
		data(){
			return{
				ve:[5146,9048,2402,6937,8807,9656,2770,3037,2248,6368],
				count:1,
			}
		},
		props:['pdata'],
		components:{
			Pagination,
		},
		computed:{
			verify:function(){
				var count = Math.ceil(Math.random()*10);
				this.count = count;
				return count;
			}
		},
		methods:{
			submit:function(){
				var that = this;
				var name = $('.msg .name').val();
				var title =$('.msg .title').val();
				var content = $('.msg textarea').val();
				var obj = $('.message_list li:first');
				if(!$('.msg .title').val()){
					alert('请输入留言标题')
				}
                else if(!$('.msg .name').val()){
				 	alert('请输入姓名')
                }else if( !isTel($('.msg .phone').val()) ){
				 	alert('请输入正确的手机号码')
                }else if( $('.msg .verify').val() != this.ve[this.count-1] ){
				 	alert('验证码不正确')
                }
				else{
					alert('在线留言成功')
					insert(name,title,content,obj);
					setCookie('c_name',name,1)
					setCookie('c_title',title,1)
					setCookie('c_content',content,1)
				}
			}
		},
		mounted:function(){
			var name = getCookie('c_name');
			var title = getCookie('c_title');
			var content = getCookie('c_content');
			var obj = $('.message_list li:first');
            if (name){
                insert(name,title,content,obj);
            }
		},
	}
	// 共有函数
	//验证电话号码
	function isTel(tel){
		var phone= /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/;
		if (phone.test(tel)){
			return true;
		}else{
			return false;
		}
	}
	//返回年月日
	function getDate(){
		var date = new Date;
		var year = date.getFullYear();
		var month = date.getMonth()+1;
		var day = date.getDate();
		return year+'-'+month+'-'+day;
	}
	//设置cookie
	function setCookie(c_name,value,expiredays){
		var exdate=new Date()
		exdate.setDate(exdate.getDate()+expiredays)
		document.cookie=c_name+ "=" +value+";expires="+exdate.toGMTString();
	}
	//得到cookie
	function getCookie(c_name){
		if (document.cookie.length>0){
            var c_start=document.cookie.indexOf(c_name + "=");
			if (c_start!=-1){
				c_start=c_start + c_name.length+1
                var c_end=document.cookie.indexOf(";",c_start);
				if (c_end==-1){
					c_end=document.cookie.length;
				}
				return document.cookie.substring(c_start,c_end);
			}
		}
		return "";
	}

	//插入留言内容到标签标签
	function insert(name,title,content,obj){
		//动态添加的标签没有样式，需要自己在内联自己再写---！
		var time = getDate()
		var html = `<li>
                    <dl>
                        <dt class="info" style='padding: 4px 0 4px 20px;border-bottom: 1px dotted #dedede;margin-bottom: 5px;color: #2c7199;'>【${name}】  ${title}
                            <span style='color: #999;padding-left: 8px;'> ${time}</span>
                        </dt>
                        <dd style='padding: 8px 5px;'>${content}</dd>
                    </dl>
                </li>`;
		obj.before(html);
	}
	
</script>

<style lang='sass' scoped rel="stylesheet/scss" >
	.right{
		width: 808px;
		float: right;
		overflow: hidden;
		.head{
			h2{
				background: url(../../dest/img/G_45.jpg) no-repeat;
				padding: 21px 0 0 55px;
				height:45px;
				line-height:45px;
				color:white;
				span{
					float: right;
					font-size: 12px;
					margin-right: 6px;
					a{
						color:white;
						&:hover{
							text-decoration:underline;
						};
					}
				}
			}
		}
		.body{
			padding: 10px;
			border: 1px solid #558f1a;
			line-height: 21.6px;
			.message_list{
				padding:15px;
				ul{
					padding: 5px;
					border: 6px solid #65c108;
					margin-bottom:10px;
					font-size: 12px;
					li{
						dt{
							padding: 4px 0 4px 20px;
							border-bottom: 1px dotted #dedede;
							margin-bottom: 5px;
							color: #2c7199;
							span{
								color: #999;
								padding-left: 8px;
							}
						}
						dd{
							padding: 8px 5px;
						}
					}
				}
			}
			h3{
				font-size: 14px;
				margin:14px 0;
				font-weight: bold;
			}
			table{
				font-size: 12px;
				.pre{
					width: 135px;
					height: 40px;text-align: right;
				}
			}
		}
	}	
	
</style>