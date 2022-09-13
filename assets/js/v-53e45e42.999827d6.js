"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[5405],{3379:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-53e45e42",path:"/note/js/4.Variable2.html",title:"5. 变量和对象",lang:"zh-CN",frontmatter:{title:"5. 变量和对象",date:"2017-06-12T00:00:00.000Z",tags:["JS"]},excerpt:"",headers:[{level:2,title:"在变量中存放对象",slug:"在变量中存放对象",children:[]},{level:2,title:"全局对象",slug:"全局对象",children:[]}],filePathRelative:"note/js/4.Variable2.md",git:{updatedTime:1628577068e3,contributors:[{name:"n",email:"n@nannandeMacBook-Air.local",commits:1}]}}},7015:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const e=(0,a(6252).uE)('<h1 id="变量和对象" tabindex="-1"><a class="header-anchor" href="#变量和对象" aria-hidden="true">#</a> 变量和对象</h1><p>原始类型：number、string、boolean、null、undefined</p><p>引用类型：object、function 函数</p><h2 id="在变量中存放对象" tabindex="-1"><a class="header-anchor" href="#在变量中存放对象" aria-hidden="true">#</a> 在变量中存放对象</h2><ol><li>通过变量，读取对象中的某个属性</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>变量名<span class="token punctuation">.</span>属性名\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>当读取的属性不存在时，会得到undefined</strong></p><p><strong>当读取属性的对象不存在（undefined 或 null）时，程序报错</strong></p><ol start="2"><li>通过变量，更改对象中的某个属性</li></ol><p><strong>当赋值的属性不存在时，会添加属性</strong></p><ol start="3"><li>删除属性</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1.</span> <span class="token keyword">delete</span> 变量名<span class="token punctuation">.</span>属性名\n<span class="token number">2.</span> 变量名<span class="token punctuation">.</span>属性名<span class="token operator">=</span><span class="token keyword">undefined</span>  <span class="token comment">// 通常用第二种</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>属性表达式</li></ol><p>给属性赋值，或读取属性时，可以使用过下面的格式操作</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>对象变量<span class="token punctuation">[</span><span class="token string">&quot;属性名&quot;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>某些属性名中包含特殊字符</li></ul><p>实际上，JS对属性名的命名要求并不严格，属性可以是任何形式的名字</p><p><strong>属性的名字只能是字符串，如果书写的是数字，会自动转为字符串</strong></p><h2 id="全局对象" tabindex="-1"><a class="header-anchor" href="#全局对象" aria-hidden="true">#</a> 全局对象</h2><p>JS大部分的宿主环境，都会提供一个特殊的对象，该对象可以直接在JS代码中访问，该对象叫全局对象</p><p>在浏览器环境中，全局对象为<strong>window</strong>，表示整个窗口</p><p>全局对象中的所有属性，可以直接使用，而不需要写上全局对象名。</p><p><strong>开发者，定义的所有变量，实际上，会成为window对象的属性。</strong></p><p><strong>如果变量没有被赋值，则变量不会覆盖window上的同名属性</strong></p>',24),t={render:function(n,s){return e}}}}]);