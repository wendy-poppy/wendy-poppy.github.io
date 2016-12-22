/*组件必须在头部(最顶端)就引入，不能在函数体内引入*/ 
import Vue from "vue";	
Vue.config.debug = true;//开启错误提示

import myHead from "../route/myHead";
import Left from "../route/left";
import Grape from '../route/component/grape'; 
import Grapelist from '../route/component/grape_list'; 
import Grapemd from '../route/component/grapeMD'; 


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
        grape:{
            pagination:{
                pageNum:2
            }
        }, 
        todetail:[],   
    },
    components:{
        Left,
        Grape,
        Grapelist,
        Grapemd,
    },
    computed:{
        list:function(){
            if(this.show=='list'){
                return true;
            }else{
                return false
            }
        },
        md:function(){
            if(this.show=='md'){
                return true;
            }else{
                return false
            }
        }
    },
    mounted:function(){
        var index = location.href.indexOf('?_')
        var str = location.href.slice(index+2)
        if(index !== -1){
            this.show = 'md';
        }
        if(str=='1'){
            this.todetail = ['2015-9-19 11:49:09  浏览次数：50',`../../dest/img/${str}.jpg`,'','?+2']; 
        }
        if(str=='2'){
            this.todetail = ['2015-9-19 11:47:46  浏览次数：41',`../../dest/img/${str}.jpg`,'?+1','?+3'];
        }
        if(str=='3'){
            this.todetail = ['2015-9-19 11:47:21  浏览次数：30',`../../dest/img/${str}.jpg`,'?+2','?+4'];
        }
        if(str=='4'){
            this.todetail = ['2015-9-19 11:46:43  浏览次数：27',`../../dest/img/${str}.jpg`,'?+3','?+5'];
        }
        if(str=='5'){
            this.todetail = ['2015-9-19 11:45:35  浏览次数：26',`../../dest/img/${str}.jpg`,'?+4','?+6'];
        }
        if(str=='6'){
            this.todetail = ['2015-9-19 11:26:49  浏览次数：24',`../../dest/img/${str}.jpg`,'?+5','?+7'];
        }
        if(str=='7'){
            this.todetail = ['2015-9-19 11:24:24  浏览次数：32',`../../dest/img/${str}.jpg`,'?+6','?+8'];
        }
        if(str=='8'){
            this.todetail = ['2015-9-19 11:23:29  浏览次数：26',`../../dest/img/${str}.jpg`,'?+7','?+9'];
        }
        if(str=='9'){
            this.todetail = ['2015-7-17 14:34:02  浏览次数：23',`../../dest/img/${str}.jpg`,'?+8','?+10'];
        }
        if(str=='10'){
            this.todetail = ['2015-7-17 14:28:46  浏览次数：25',`../../dest/img/${str}.jpg`,'?+9','?+11','基地'];
        }
        if(str=='11'){
            this.todetail = ['2015-7-17 14:27:22  浏览次数：13',`../../dest/img/${str}.jpg`,'?+10','?+12','基地'];
        }
        if(str=='12'){
            this.todetail = ['2015-7-17 14:26:14  浏览次数：15',`../../dest/img/${str}.jpg`,'?+11','?+13','基地'];
        }
         if(str=='13'){
            this.todetail = ['2015-7-17 8:53:09  浏览次数：11',`../../dest/img/${str}.jpg`,'?+12','?+14','基地'];
        }
        if(str=='14'){
            this.todetail = ['2015-7-17 8:48:17  浏览次数：10',`../../dest/img/${str}.jpg`,'?+13','?+15','基地'];
        }
        if(str=='15'){
            this.todetail = ['2015-7-17 8:47:34  浏览次数：12',`../../dest/img/${str}.jpg`,'?+14','','基地'];
        }
    }
});