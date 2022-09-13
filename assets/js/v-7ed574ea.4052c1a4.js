"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[6392],{9602:(e,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-7ed574ea",path:"/note/js/22.Constructor.html",title:"23. 构造函数",lang:"zh-CN",frontmatter:{title:"23. 构造函数",date:"2017-06-15T00:00:00.000Z",tags:["JS"]},excerpt:"",headers:[{level:2,title:"用于创建对象的函数",slug:"用于创建对象的函数",children:[]},{level:2,title:"new.target",slug:"new-target",children:[]}],filePathRelative:"note/js/22.Constructor.md",git:{updatedTime:1628577068e3,contributors:[{name:"n",email:"n@nannandeMacBook-Air.local",commits:1}]}}},6830:(e,a,n)=>{n.r(a),n.d(a,{default:()=>s});const t=(0,n(6252).uE)('<h1 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h1><blockquote><p>对象中的属性，如果是一个函数，也称该属性为对象的方法</p></blockquote><h2 id="用于创建对象的函数" tabindex="-1"><a class="header-anchor" href="#用于创建对象的函数" aria-hidden="true">#</a> 用于创建对象的函数</h2><p>用函数创建对象，可以减少繁琐的对象创建流程</p><ol><li>函数返回一个对象</li><li>构造函数</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token function">函数名</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果使用上面的方式创建对象，则该函数叫构造函数。</p><ul><li>函数名使用大驼峰命名法；</li><li>构造函数内部，会自动创建一个新对象，this 指向新创建的对象，并且自动返回新对象；</li><li>构造函数中如果出现返回值，如果返回值是原始类型，则直接忽略；如果返回的是引用类型，则使用返回的结果。</li><li>所有的对象，最终都是通过构造函数创建的</li></ul><h2 id="new-target" tabindex="-1"><a class="header-anchor" href="#new-target" aria-hidden="true">#</a> new.target</h2><p>该表达式在函数中使用，返回的是当前的构造函数，但是，如果该函数不是通过 new 调用的，则返回 undefined</p><p>通常用于判断某个函数是否是通过 new 在调用。</p>',11),s={render:function(e,a){return t}}}}]);