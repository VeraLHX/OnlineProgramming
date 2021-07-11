<template lang="">
    <div>
         <p ref="p">I AM ROUTERTEST</p>
         <h1>获取到的参数：{{userID}}</h1>
         <h1>我的名字是：{{userName}}</h1> 
         <router-link v-bind:to="{name:'HelloWorld'}" tag="button" replace>回到首页</router-link>
         <button @click = "changeshow">点我</button>
         <!-- <transition>
          <p v-show="show" v-bind:style="styleobj">hello!</p> 
         </transition>-->
         <br><br><br><br><br><br>
         <transition v-on:enter="enter" v-on:leave="leave"
          v-bind:css="false"  
         >   <!-- 跳过css检验-->
           
           <p v-show="show">Testing enter in methods</p>
         </transition>
         <transition name="on" mode="out-in">
             <button v-if="show" key="but1">on</button>

             <button v-else key="but2">off</button>
         </transition>
         <button @click="additem">add</button>
         <button @click="removeitem">remove</button>
         <button @click="shuffle">shuffle</button>
         <transition-group id="testlist" tag='p'>
             <span v-for="item in items" v-bind:key="item">{{item}}</span>
         </transition-group>
         <!--<input v-model='query'>-->
         <!-- <transition-group>
            <li v-for="()"></li>
         </transition-group>
        <router-link to="/pro">Go to pro</router-link>
         <router-link to="/bag">Go to bag</router-link> -->
    </div>
</template>
 
<script>
import * as Velocity from 'velocity' 
import * as _ from 'lodash'
//import func from 'vue-editor-bridge'
import {mixin} from '../mixins/mixin'
export default {
    name: 'RouterTest',
    mixins:[mixin],
    data(){
        return {
        show:true,
        message:true,
        items:[1,2,3,4,5],
        num:100,
        styleobj:{
            color:'red',
            fontSize:'30px'
        }}
    },
    methods:{
        changeshow:function(){
            console.log(this.$refs.p)
            this.show=!this.show
        },
        additem:function(){
            this.items.splice(0,0,this.num++)
        },
        removeitem:function(){
            this.num--
            this.items.splice(0,1)
            
        },
        shuffle:function(){
            this.items=_.shuffle(this.items)
        },
        getmessage:function(){
            this.message=!this.message  
        },
        enter:function(el,done){
            Velocity(el,{opacity:1,fontSize:'1.4em'},{duration:300})
            Velocity(el,{fontSize:'1em'},{complete:done})
        },
        leave: function (el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        }
    },
    computed:{
        userID() {
            return this.$route.params.userID
        },
        userName(){
            return this.$route.params.userName
        }

    }
}

$(document).find("div>p").html()
//axios
//  .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//  .then(response => (this.info = response.data.bpi))
 
</script>
<style lang="">
 
.on-enter-active{
    transition: 2s ease;
}
.on-leave-active{
    transition: 3s ease;
}
.on-enter,.on-leave-to{
    opacity: 0;
}
</style>