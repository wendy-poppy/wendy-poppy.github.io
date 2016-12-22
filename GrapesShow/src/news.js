/*组件必须在头部(最顶端)就引入，不能在函数体内引入*/ 
import Vue from "vue";	
Vue.config.debug = true;//开启错误提示

import myHead from "../route/myHead";
import Left from "../route/left";
import News from '../route/component/news'; 
import Newlist from '../route/component/news_list'; 

import new1 from '../route/news_detail/new1'; 
import new2 from '../route/news_detail/new2'; 
import new3 from '../route/news_detail/new3'; 
import new4 from '../route/news_detail/new4'; 
import new5 from '../route/news_detail/new5'; 
import new6 from '../route/news_detail/new6'; 
import new7 from '../route/news_detail/new7'; 


/******   页面头部    *********/
var head = new Vue({
	el:'#head',
	components:{
		myHead,
	}
})

/***** container组件 ******/
var container = new Vue({  
    el:'#container',
    data:{
        show:'list',
        left:'',
        news:{
            pagination:{
                pageNum:1
            }
        },
        
    },
    components:{
        Left,
        News,
        Newlist,
        new1,new2,new3,new4,new5,new6,new7,
    },
    methods:{
        changeView:function(n){
            console.log(n)
            this.show = n;
        }
    },
    mounted:function(){
        var index = location.href.indexOf('?')
        var str = location.href.slice(index+1)
        if(index !== -1){
            this.show = str;
        }
    },
    computed:{
        list:function(){
            if(this.show =='list'){
                return true
            }else{
                return false
            }
        },
        new1:function(){
            if(this.show=='new1'){
                return true
            }else{
                return false
            }
        },
        new2:function(){
            if(this.show=='new2'){
                return true
            }else{
                return false
            }
        },
        new3:function(){
            if(this.show=='new3'){
                return true
            }else{
                return false
            }
        },
        new4:function(){
            if(this.show=='new4'){
                return true
            }else{
                return false
            }
        },
        new5:function(){
            if(this.show=='new5'){
                return true
            }else{
                return false
            }
        },
        new6:function(){
            if(this.show=='new6'){
                return true
            }else{
                return false
            }
        },
        new7:function(){
            if(this.show=='new7'){
                return true
            }else{
                return false
            }
        },
    }
});