"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[2497],{115:(e,l,a)=>{a.r(l),a.d(l,{data:()=>i});const i={key:"v-1a71cb3e",path:"/note/js/3.Variable1.html",title:"4. 变量",lang:"zh-CN",frontmatter:{title:"4. 变量",date:"2017-06-12T00:00:00.000Z",tags:["JS"]},excerpt:"",headers:[{level:2,title:"什么是变量",slug:"什么是变量",children:[]},{level:2,title:"如何使用变量",slug:"如何使用变量",children:[]}],filePathRelative:"note/js/3.Variable1.md",git:{updatedTime:1628577068e3,contributors:[{name:"n",email:"n@nannandeMacBook-Air.local",commits:1}]}}},3273:(e,l,a)=>{a.r(l),a.d(l,{default:()=>t});const i=(0,a(6252).uE)('<h1 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h1><h2 id="什么是变量" tabindex="-1"><a class="header-anchor" href="#什么是变量" aria-hidden="true">#</a> 什么是变量</h2><p>变量是一块内存空间，用于保存数据</p><h2 id="如何使用变量" tabindex="-1"><a class="header-anchor" href="#如何使用变量" aria-hidden="true">#</a> 如何使用变量</h2><ol><li>声明（定义）变量</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> 变量名；\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>变量声明后，它的值为undefined</strong></p><ol start="2"><li>给变量赋值</li></ol><p>向变量的内存空间中存放数据</p><ul><li><p>变量的值是可变的 变量可以被重新赋值，新的值会覆盖原来的值</p></li><li><p>变量的名称 在开发中，凡是需要自行命名的位置，叫做标识符</p></li></ul><p>标识符的规范：</p><ol><li>[<strong>必</strong>]只能以英文字母、下划线、$开头</li><li>[<strong>必</strong>]其他位置可以出现数字、英文字母、下划线、$</li><li>[<strong>必</strong>]不可以与关键字、保留字重复</li><li>[选]标识符应该做到望文知义</li><li>[选]如果由多个单词，使用驼峰命名法，首字母大写</li></ol><blockquote><p>大驼峰：每个单词首字母大写 小驼峰：除第一个单词外，首字母大写 目前，使用的标识符都是小驼峰命名法。</p></blockquote><blockquote><p>例如： 宽度：width 高度：height 区域：area 矩形的宽度：rectangleWidth</p></blockquote><ul><li><p>声明和赋值合并，变量的声明和赋值可以一条语句书写。</p></li><li><p>多个变量可以合并声明并赋值</p></li></ul><p>语法糖。</p><p>语法糖仅仅是为了方便代码书写或记忆，并不会有实质性的改变。</p><ul><li><p><strong>任何可以书写数据的地方，都可以书写变量</strong></p></li><li><p>若使用一个未声明的变量，会导致错误</p></li></ul><p>例外：使用typeof得到类型时，可以是未声明的变量</p><ul><li><strong>JS中存在变量提升</strong></li></ul><p>所有变量的声明，会自动提到代码的最顶部</p><p>但是，这种提升，不会超越脚本块</p><ul><li>JS中允许定义多个同名变量</li></ul><p>同名变量，提升后会变成一个</p>',24),t={render:function(e,l){return i}}}}]);