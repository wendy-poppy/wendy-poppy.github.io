/*组件必须在头部(最顶端)就引入，不能在函数体内引入*/ 
import Vue from "vue";	
Vue.config.debug = true;//开启错误提示

import myHead from "../route/myHead";
import Left from "../route/left";
import Product from '../route/component/product'; 
import All from '../route/product_detail/all'; 

import Hutai from '../route/product_detail/hutai'; 
import Jisi from '../route/product_detail/jisi'; 
import Dongfang from '../route/product_detail/dongfang'; 
import Chaokang from '../route/product_detail/chaokang'; 
import Hanxiang from '../route/product_detail/hanxiang'; 
import Putao from '../route/product_detail/putao'; 

import Md1 from '../route/product_detail/md1'; 
import Md2 from '../route/product_detail/md2'; 
import Md3 from '../route/product_detail/md3'; 
import Md4 from '../route/product_detail/md4'; 
import Md5 from '../route/product_detail/md5'; 
import Md6 from '../route/product_detail/md6'; 

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
        show:'all',
        left:'',
        product:{
            right:'',
            title:'',
        },
        allData:{
            pagination:{
                pageNum:3
            }
        },    
        listData:{
            pagination:{
                pageNum:1
            }
        },
        todetail:[], 
    },
    components:{
        Left,
        Product,
        All,
        Hutai,Jisi,Dongfang,Chaokang,Hanxiang,Putao,
        Md1,Md2,Md3,Md4,Md5,Md6,
    },
    methods:{
        changeView:function(obj){
            this.show = obj;
            this.product = {right:'',title:''}
        },
    },
    computed:{
        all:function(){
            if(this.show=='all'){
                return true;
            }else{
                return false;
            }
        },
        hutai:function(){
            if(this.show=='hutai'){
                return true;
            }else{
                return false;
            }
        },
        jisi:function(){
            if(this.show=='jisi'){
                return true;
            }else{
                return false;
            }
        },
        dongfang:function(){
            if(this.show=='dongfang'){
                return true;
            }else{
                return false;
            }
        },
        chaokang:function(){
            if(this.show=='chaokang'){
                return true;
            }else{
                return false;
            }
        },
        hanxiang:function(){
            if(this.show=='hanxiang'){
                return true;
            }else{
                return false;
            }
        },
        putao:function(){
            if(this.show=='putao'){
                return true;
            }else{
                return false;
            }
        },
        md1:function(){
            if(this.show=='md1'){
                return true;
            }else{
                return false;
            }
        },
        md2:function(){
            if(this.show=='md2'){
                return true;
            }else{
                return false;
            }
        },
        md3:function(){
            if(this.show=='md3'){
                return true;
            }else{
                return false;
            }
        },
        md4:function(){
            if(this.show=='md4'){
                return true;
            }else{
                return false;
            }
        },
        md5:function(){
            if(this.show=='md5'){
                return true;
            }else{
                return false;
            }
        },
        md6:function(){
            if(this.show=='md6'){
                return true;
            }else{
                return false;
            }
        },
    },
    mounted:function(){
        var index = location.href.indexOf('?_')
        var str = location.href.slice(index+2)
        if(index !== -1){
            this.show = str;
        }

        var index2 = location.href.indexOf('?+') 
        var str1 = location.href.slice(index2+2)
        if(str1<=12 && str1){
            this.show = 'md1';
            this.product = {right:'>',title:'沪太8号'}
        }else if(str1>12 && str1<=16){
            this.show = 'md2';
            this.product = {right:'>',title:'吉斯玛早'}
        }else if(str1>16 && str1<=19){
            this.show = 'md3';
            this.product = {right:'>',title:'东方之星'}
        }else if(str1>19 && str1<=24){
            this.show = 'md4';
            this.product = {right:'>',title:'超康早'}
        }else if(str1>24 && str1<=27){
            this.show = 'md5';
            this.product = {right:'>',title:'寒香蜜'}
        }else if(str1>27 && str1<=31){
            this.show = 'md6';
            this.product = {right:'>',title:'葡萄酒'}
        }

        if(str1=='1'){
            this.todetail = ['2015-9-30 9:52:14  浏览次数：52',`../../dest/img/pro${str1}.jpg`,'','?+2']; 
        }
        if(str1=='2'){
            this.todetail = ['2015-9-30 9:51:51  浏览次数：19',`../../dest/img/pro${str1}.jpg`,'?+1','?+3'];
        }
        if(str1=='3'){
            this.todetail = ['2015-9-30 9:51:27  浏览次数：21',`../../dest/img/pro${str1}.jpg`,'?+2','?+4'];
        }
        if(str1=='4'){
            this.todetail = ['2015-9-30 9:50:49  浏览次数：27',`../../dest/img/pro${str1}.jpg`,'?+3','?+5'];
        }
        if(str1=='5'){
            this.todetail = ['2015-9-30 9:50:28  浏览次数：27',`../../dest/img/pro${str1}.jpg`,'?+4','?+6'];
        }
        if(str1=='6'){
            this.todetail = ['2015-9-30 9:50:09  浏览次数：15',`../../dest/img/pro${str1}.jpg`,'?+5','?+7'];
        }
        if(str1=='7'){
            this.todetail = ['2015-9-30 9:49:49  浏览次数：11',`../../dest/img/pro${str1}.jpg`,'?+6','?+8'];
        }
        if(str1=='8'){
            this.todetail = ['2015-9-30 9:49:15  浏览次数：12',`../../dest/img/pro${str1}.jpg`,'?+7','?+9'];
        }
        if(str1=='9'){
            this.todetail = ['2015-9-30 9:27:07  浏览次数：14',`../../dest/img/pro${str1}.jpg`,'?+8','?+10'];
        }
        if(str1=='10'){
            this.todetail = ['2015-9-30 9:26:50  浏览次数：16',`../../dest/img/pro${str1}.jpg`,'?+9','?+11'];
        }
        if(str1=='11'){
            this.todetail = ['2015-9-30 8:59:56  浏览次数：10',`../../dest/img/pro${str1}.jpg`,'?+10','?+12'];
        }
        if(str1=='12'){
            this.todetail = ['2015-9-30 8:59:21  浏览次数：13',`../../dest/img/pro${str1}.jpg`,'?+11','?+13'];
        }
         if(str1=='13'){
            this.todetail = ['2015-9-28 15:03:48  浏览次数：21',`../../dest/img/pro${str1}.jpg`,'?+12','?+14'];
        }
        if(str1=='14'){
            this.todetail = ['2015-9-28 15:01:54  浏览次数：9',`../../dest/img/pro${str1}.jpg`,'?+13','?+15'];
        }
        if(str1=='15'){
            this.todetail = ['2015-9-28 14:56:50  浏览次数：6',`../../dest/img/pro${str1}.jpg`,'?+14','?+16'];
        }
        if(str1=='16'){
            this.todetail = ['2015-9-28 14:48:11  浏览次数：7',`../../dest/img/pro${str1}.jpg`,'?+15','?+17'];
        }
        if(str1=='17'){
            this.todetail = ['2015-9-30 9:26:50  浏览次数：16',`../../dest/img/pro${str1}.jpg`,'?+16','?+18'];
        }
        if(str1=='18'){
            this.todetail = ['2015-9-30 8:59:56  浏览次数：10',`../../dest/img/pro${str1}.jpg`,'?+17','?+19'];
        }
        if(str1=='19'){
            this.todetail = ['2015-9-30 8:59:21  浏览次数：13',`../../dest/img/pro${str1}.jpg`,'?+18','?+20'];
        }
         if(str1=='20'){
            this.todetail = ['2015-9-28 15:03:48  浏览次数：21',`../../dest/img/pro${str1}.jpg`,'?+9','?+21'];
        }
        if(str1=='21'){
            this.todetail = ['2015-9-28 15:01:54  浏览次数：9',`../../dest/img/pro${str1}.jpg`,'?+20','?+22'];
        }
        if(str1=='22'){
            this.todetail = ['2015-9-28 14:56:50  浏览次数：6',`../../dest/img/pro${str1}.jpg`,'?+21','?+23'];
        }
        if(str1=='23'){
            this.todetail = ['2015-9-28 14:48:11  浏览次数：7',`../../dest/img/pro${str1}.jpg`,'?+22','?+24'];
        }
        if(str1=='24'){
            this.todetail = ['2015-9-30 9:26:50  浏览次数：16',`../../dest/img/pro${str1}.jpg`,'?+23','?+25'];
        }
        if(str1=='25'){
            this.todetail = ['2015-9-30 8:59:56  浏览次数：10',`../../dest/img/pro${str1}.jpg`,'?+24','?+26'];
        }
        if(str1=='26'){
            this.todetail = ['2015-9-30 8:59:21  浏览次数：13',`../../dest/img/pro${str1}.jpg`,'?+25','?+27'];
        }
         if(str1=='27'){
            this.todetail = ['2015-9-28 15:03:48  浏览次数：21',`../../dest/img/pro${str1}.jpg`,'?+26','?+28'];
        }
        if(str1=='28'){
            this.todetail = ['2015-9-28 15:01:54  浏览次数：9',`../../dest/img/pro${str1}.jpg`,'?+27','?+29'];
        }
        if(str1=='29'){
            this.todetail = ['2015-9-28 14:56:50  浏览次数：6',`../../dest/img/pro${str1}.jpg`,'?+28','?+30'];
        }
        if(str1=='30'){
            this.todetail = ['2015-9-28 14:48:11  浏览次数：7',`../../dest/img/pro${str1}.jpg`,'?+29','?+31'];
        }
        if(str1=='31'){
            this.todetail = ['2015-9-28 14:48:11  浏览次数：7',`../../dest/img/pro${str1}.jpg`,'?+30',''];
        }
    },
});