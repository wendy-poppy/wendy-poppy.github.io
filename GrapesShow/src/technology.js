/*组件必须在头部(最顶端)就引入，不能在函数体内引入*/ 
import Vue from "vue";	
Vue.config.debug = true;//开启错误提示

import myHead from "../route/myHead";
import Left from "../route/left";
import Technology from '../route/component/technology'; 
import tecview from '../route/technology_detail/tecView'; 
import tec1 from '../route/technology_detail/tec1'; 
import tec2 from '../route/technology_detail/tec2'; 
import tec3 from '../route/technology_detail/tec3'; 
import tec4 from '../route/technology_detail/tec4'; 
import tec5 from '../route/technology_detail/tec5'; 


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
        show:'view',
        left:'',
        view:{
            pagination:{
                pageNum:1
            }
        },       
    },
    methods:{
        changeView:function(obj){
            this.show = obj
        }
    },
    computed:{
        view:function(){
            if(this.show == 'view'){
                return true;
            }else{
                return false;
            }
        },
        tec1:function(){
            if(this.show == 'tec1'){
                return true;
            }else{
                return false;
            }
        },
        tec2:function(){
            if(this.show == 'tec2'){
                return true;
            }else{
                return false;
            }
        },
        tec3:function(){
            if(this.show == 'tec3'){
                return true;
            }else{
                return false;
            }
        },
        tec4:function(){
            if(this.show == 'tec4'){
                return true;
            }else{
                return false;
            }
        },
        tec5:function(){
            if(this.show == 'tec5'){
                return true;
            }else{
                return false;
            }
        },
    },
    components:{
        Left,
        Technology,
        tecview,
        tec1,tec2,tec3,tec4,tec5,
    },
    mounted:function(){
        var index = location.href.indexOf('?_')
        var str = location.href.slice(index+2)
        console.log(str)
        if(index !== -1){
            this.show = str;
        }
    }
});