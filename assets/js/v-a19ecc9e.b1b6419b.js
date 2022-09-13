"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[775],{7504:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-a19ecc9e",path:"/note/js/50.Event-loop.html",title:"51. 事件循环",lang:"zh-CN",frontmatter:{title:"51. 事件循环",date:"2017-06-28T00:00:00.000Z",tags:["JS进阶"]},excerpt:"",headers:[{level:2,title:"浏览器的线程：",slug:"浏览器的线程",children:[]},{level:2,title:"事件队列",slug:"事件队列",children:[]}],filePathRelative:"note/js/50.Event-loop.md",git:{updatedTime:1663028798e3,contributors:[{name:"Nathan",email:"niu_nn@outlook.com",commits:1},{name:"n",email:"n@nannandeMacBook-Air.local",commits:1}]}}},8219:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var e=a(6252),t=a(7840);const l=(0,e._)("h1",{id:"事件循环",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#事件循环","aria-hidden":"true"},"#"),(0,e.Uk)(" 事件循环")],-1),o=(0,e._)("blockquote",null,[(0,e._)("p",null,"异步：某些函数不会立即执行，需要等到某个时机成熟后才会执行，该函数叫做异步函数。")],-1),u=(0,e._)("h2",{id:"浏览器的线程",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#浏览器的线程","aria-hidden":"true"},"#"),(0,e.Uk)(" 浏览器的线程：")],-1),c=(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,"JS 执行引擎：负责执行 JS 代码")]),(0,e._)("li",null,[(0,e._)("p",null,"渲染线程：负责渲染页面")]),(0,e._)("li",null,[(0,e._)("p",null,"计时器线程：负责计时")]),(0,e._)("li",null,[(0,e._)("p",null,"事件监听线程：负责监听事件")]),(0,e._)("li",null,[(0,e._)("p",null,"http 网络线程：负责网络通信")])],-1),p=(0,e._)("h2",{id:"事件队列",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#事件队列","aria-hidden":"true"},"#"),(0,e.Uk)(" 事件队列")],-1),i=(0,e._)("p",null,"一块内存空间，用于存放执行时机到达的异步函数。",-1),_=(0,e._)("p",null,"当JS引擎空闲时（执行栈没有可执行的上下文），它会从事件队列中拿出第一个函数执行。",-1),r=(0,e._)("p",null,"事件循环：event loop，是指函数在执行栈、宿主线程、事件队列中的循环移动。",-1),k=(0,e._)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,e._)("pre",{class:"language-javascript"},[(0,e._)("code",null,[(0,e._)("span",{class:"token function"},"setTimeout"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token keyword"},"function"),(0,e.Uk)(),(0,e._)("span",{class:"token constant"},"A"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  console"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"log"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token string"},"'异步代码'"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("，"),(0,e._)("span",{class:"token number"},"1000"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n\n"),(0,e._)("span",{class:"token keyword"},"for"),(0,e._)("span",{class:"token punctuation"},"("),(0,e._)("span",{class:"token keyword"},"var"),(0,e.Uk)(" i "),(0,e._)("span",{class:"token operator"},"="),(0,e.Uk)(),(0,e._)("span",{class:"token number"},"0"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("i"),(0,e._)("span",{class:"token operator"},"<"),(0,e._)("span",{class:"token number"},"10000"),(0,e._)("span",{class:"token punctuation"},";"),(0,e.Uk)("i"),(0,e._)("span",{class:"token operator"},"++"),(0,e._)("span",{class:"token punctuation"},")"),(0,e._)("span",{class:"token punctuation"},"{"),(0,e.Uk)("\n  console"),(0,e._)("span",{class:"token punctuation"},"."),(0,e._)("span",{class:"token function"},"log"),(0,e._)("span",{class:"token punctuation"},"("),(0,e.Uk)("i"),(0,e._)("span",{class:"token punctuation"},")"),(0,e.Uk)("\n"),(0,e._)("span",{class:"token punctuation"},"}"),(0,e.Uk)("\n")])]),(0,e._)("div",{class:"line-numbers"},[(0,e._)("span",{class:"line-number"},"1"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"2"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"3"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"4"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"5"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"6"),(0,e._)("br"),(0,e._)("span",{class:"line-number"},"7"),(0,e._)("br")])],-1),d=(0,e._)("p",null,"图示：",-1),m=(0,e._)("p",null,[(0,e._)("img",{src:t,alt:"事件队列"})],-1),h={render:function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,o,u,c,p,i,_,r,k,d,m],64)}}},7840:(n,s,a)=>{n.exports=a.p+"assets/img/eventQueue.6a3f1839.png"}}]);