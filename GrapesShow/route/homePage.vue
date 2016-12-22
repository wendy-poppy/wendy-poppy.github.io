<script>
	export default {
        data () {
            return {
                name:"guowen",
                age:"212"
            }
        },
        props:['pdata'],
    }
</script>


<template>
	<!-- 首页 -->
    <div class="homePage">
        <div class="myBody">
            <div class="product_show">
                <div class="top">
                    <h2>{{pdata.title}}<small>/Product display</small></h2>
                    <a href="product.html"> >>更多&nbsp;&nbsp;</a>
                </div>
                <div class="bottom">
                    <ul>
                        <li class="first">
                            <a ><img src="http://www.ahgxny.com/upLoad/product/month_1510/201510220846577514.jpg" alt=""></a>
                            <div><a href="product.html">产品展示</a></div>
                        </li>
                        <li>
                            <a><img src="../dest/img/PTS2.jpg" alt=""></a>
                            <div><a href="product.html?+1">沪太8号</a></div>
                        </li>
                        <li>
                            <a><img src="../dest/img/PTS3.jpg" alt=""></a>
                            <div><a href="product.html?+2">沪太8号</a></div>
                        </li>
                        <li>
                            <a><img src="../dest/img/PTS4.jpg" alt=""></a>
                            <div><a href="product.html?+3">沪太8号</a></div>
                        </li>
                        <li>
                            <a><img src="../dest/img/PTS5.jpg" alt=""></a>
                            <div><a href="product.html?+4">沪太8号</a></div>
                        </li>
                        <li>
                            <a><img src="../dest/img/PTS6.jpg" alt=""></a>
                            <div><a href="product.html?+5">沪太8号</a></div>
                        </li>
                        <li>
                            <a><img src="../dest/img/PTS7.jpg" alt=""></a>
                            <div><a href="product.html?+6">沪太8号</a></div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="middle">
                <div class="left">
                    <div class="head">
                        <h2>庄园简介</h2>
                        <a href="manor.html">>>更多&nbsp;&nbsp;</a>
                    </div>
                    <div class="body">
                        <img src="../dest/img/io1.png" alt=""/>
                        <span>
                            &nbsp;&nbsp; 安徽国星生态农业有限公司成立于2011年5月，坐落在淮南市谢家集区孙庙乡刘庙村，濒临瓦埠湖畔。公司帮助更多农户发家致富，实现葡萄种植的基地化、规模化、效益化。公司具有雄厚的技术资源，已与多个地市建立了销售渠道。我们一贯坚持“绿色生态”的生产理念，以打造“健康食品”、造福一方百姓为宗旨把企业做大做强。    园区一期占地500亩投资3000万元。引进陕西葡萄基地研究所培育的国内外名优葡萄。以“户太8号、吉斯玛早、东方之星”系列为主。全部苗木施有机肥料使之生产优质高、品味纯，绿色的有机营养果品，该品种每亩年产优质果品50…
                        </span>
                    </div>
                </div>
                <div class="right">
                    <div class="head">
                        <h2>新闻资讯</h2>
                        <a href="news.html">>>更多&nbsp;&nbsp;</a>
                    </div>
                    <dl>
                        <a href="news.html?new7">
                            <dt>沪太8号</dt>
                            <dd>  新品种名称：户太八号（hu tai ba hao）  审定时间：1996年1月10日  亲本：奥林匹亚葡萄芽变的欧美杂交品种  果实性状介绍：成熟期7月中旬（一次果）至9月上中旬（三次果）。果穗园...</dd>
                        </a>
                    </dl>
                    <ul>
                        <li><a href="news.html?new7">沪太8号</a></li>
                        <li><a href="news.html?new6">养生专家提示初秋多吃葡萄可助排毒解内热</a></li>
                        <li><a href="news.html?new5">秋季多吃葡萄 可预防脂肪肝</a></li>
                        <li><a href="news.html?new4">吃葡萄，有利于补血滋肾健脾</a></li>
                    </ul>
                </div>
            </div>

            <div class="list">
                <div class="head">
                    <h2>葡萄园风光</h2>
                    <a href='grape.html'>>>更多&nbsp;&nbsp;</a>
                </div>
                <ul>
                    <li><a href='grape.html?_1'><img src="../dest/img/1.jpg" alt=""></a></li>
                    <li><a href='grape.html?_2'><img src="../dest/img/2.jpg" alt=""></a></li>
                    <li><a href='grape.html?_3'><img src="../dest/img/3.jpg" alt=""></a></li>
                    <li><a href='grape.html?_4'><img src="../dest/img/4.jpg" alt=""></a></li>
                    <li><a href='grape.html?_5'><img src="../dest/img/5.jpg" alt=""></a></li>
                    <li><a href='grape.html?_6'><img src="../dest/img/6.jpg" alt=""></a></li>
                    <li><a href='grape.html?_7'><img src="../dest/img/7.jpg" alt=""></a></li>
                    <li><a href='grape.html?_8'><img src="../dest/img/8.jpg" alt=""></a></li>
                    <li><a href='grape.html?_9'><img src="../dest/img/9.jpg" alt=""></a></li>
                    <li><a href='grape.html?_10'><img src="../dest/img/10.jpg" alt=""></a></li>
                </ul>
            </div>
        </div>
    </div> 
</template>





<style lang="sass" scoped> /*必须是sass   scoped封闭作用域，只在本vue中有效*/

    /*一定要加lang不然无法编译scoped使得css只是在当前页面的标签有效，不会影响其他界面*/
    /*测试一下对sass的编译,虽然提示报错，但是是支持scss写法的，可以设置取消报错
	$color: #000;
    */
    $themColor:#558f1a;
    .homePage{
		.myBody{
			h2{
				font-size:24px;
				float:left;
			}
			a{
				font-size:12px;
				margin-right:6px;
				&:hover{
					text-decoration:underline;
				}
			}
			overflow:hidden;
			.product_show{
				overflow:hidden;
				.top{
					padding: 21px 0 0 65px;
					height:55px;
					width:1058px; 
					background: url(../dest/img/G_11.jpg) no-repeat;
					h2{
						float: left;
						line-height:50px;
						small{
							font-size:18px;
							color:#919191;
						}
					}
					a{
						float:right;
						color:#333;
						line-height:55px;
						margin-right: 6px;
						&:hover{
							color:$themColor;
							text-decoration:underline;
						}
					}
				}
				.bottom{
					a:hover{
						text-decoration:none;
					};
					li{
						position:relative;
						float:left;
						a{
							display: block;
							margin: 5px 0 0 4px;
							width:245px;
							height:196px;
							img{
								width:100%;
								height:100%;
							}
						}
						
						div{
							position:absolute;
							top:0;
							width:100%;
							height:100%;
							background: rgba(0,0,0,.3);
							display:none;
							a{
								font-size:24px;
								color:white;
								text-align:center;
								line-height:196px;
							}
						}
						&:hover div{
							display:block;
						}
					}
					.first{
						a{
							width:375px;
							height:396px;
							margin-left:0;
							img{
								width: 100%;
								height: 100%;
							}
						}
						div a{
							line-height:396px;
						}
					}
					
				}
				
			}

			.middle{
				overflow:hidden;
				.head{
					overflow:hidden;
					float:left;
					padding: 21px 0 0 55px;
					height:45px;
					line-height:45px;
					color:white;
					a{
						float:right;
						color:white;
					}
				}
				.left{
					overflow:hidden;
					float: left;
					.head{
						width:447px;
						background: url(../dest/img/G_32.jpg) no-repeat;
					}
					.body{
						width:502px;
						color:#636363;
						font-size:12px;
						line-height:25px;
						img{
							padding: 1px;
							border:1px solid $themColor;
							width:228px;
							height:151px;
							margin:10px 10px 0 0;
							float:left;
						}
					}
					
				}
				.right{
					float: right;
					overflow:hidden;
					.head{
						width:542px;
						background: url(../dest/img/G_34.jpg) no-repeat;
						float:none;
					}

					dl{
						a{
							margin:0;
							display:block;
							&:hover{
								text-decoration:none;
							}
						}
						margin:5px 0;
						width: 597px;
						text-align: center;
						dt{
							height: 47px;
							color:$themColor;
							font-size:14px;
							line-height:47px;
						}
						dd{
							height:40px;
							padding:5px;
							background: #ebebeb;
							line-height:20px;
							text-align:left;
						}
					}
					ul{
						li{
							background: url(../dest/img/G_41.jpg) no-repeat 2px 12px;
							border-bottom: 1px dotted #636363;
							padding-left:15px;
							a{
								line-height:35px;
								&:hover{
									color:$themColor;
								}
							}
						}
					}
				}	
			}
			.list{
				.head{
					background: url(../dest/img/G_45.jpg) no-repeat;
					padding: 21px 0 0 55px;
					height:45px;
					line-height:45px;
					margin-top: 18px;
					color:white;
					a{
						float:right;
						color:white;
					}
				}
				ul{
					padding-bottom: 13px;
					border: 1px solid $themColor;
					overflow:hidden;
					li{
						float:left;
						padding:1px;
						margin:13px 0 0 9px;
						border:1px solid #a3a3a3;
						width:209px;
						height:140px;
					}img{
						width:100%;
						height:100%;
					}
				}
			}
		}
	}
</style>
