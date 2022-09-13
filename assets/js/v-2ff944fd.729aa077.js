"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[2944],{4441:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-2ff944fd",path:"/note/js/19.Function.html",title:"20. 函数语法",lang:"zh-CN",frontmatter:{title:"20. 函数语法",date:"2017-06-15T00:00:00.000Z",tags:["JS"]},excerpt:"",headers:[{level:2,title:"创建函数（定义、声明）函数",slug:"创建函数-定义、声明-函数",children:[]},{level:2,title:"调用函数",slug:"调用函数",children:[]},{level:2,title:"函数提升",slug:"函数提升",children:[]},{level:2,title:"其他特点",slug:"其他特点",children:[]},{level:2,title:"参数",slug:"参数",children:[]},{level:2,title:"返回值",slug:"返回值",children:[]},{level:2,title:"文档注释",slug:"文档注释",children:[]}],filePathRelative:"note/js/19.Function.md",git:{updatedTime:1628577068e3,contributors:[{name:"n",email:"n@nannandeMacBook-Air.local",commits:1}]}}},1808:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const e=(0,s(6252).uE)('<h1 id="函数语法" tabindex="-1"><a class="header-anchor" href="#函数语法" aria-hidden="true">#</a> 函数语法</h1><p>重复代码：让程序难以修改</p><p>函数主要用于减少重复代码</p><h2 id="创建函数-定义、声明-函数" tabindex="-1"><a class="header-anchor" href="#创建函数-定义、声明-函数" aria-hidden="true">#</a> 创建函数（定义、声明）函数</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">函数名</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 函数体</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>函数体的代码不会直接运行，必须手动调用函数，才能运行其中的代码。</p><h2 id="调用函数" tabindex="-1"><a class="header-anchor" href="#调用函数" aria-hidden="true">#</a> 调用函数</h2><p>运行函数体</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">函数名</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="函数提升" tabindex="-1"><a class="header-anchor" href="#函数提升" aria-hidden="true">#</a> 函数提升</h2><p>通过字面量声明的函数，会提升到脚本块的顶部。</p><p>通过字面量声明的函数，会成为全局对象(window)的属性。</p><h2 id="其他特点" tabindex="-1"><a class="header-anchor" href="#其他特点" aria-hidden="true">#</a> 其他特点</h2><p>通过 typeof 函数名 得到的结果是 &#39;function&#39;</p><p>函数内部声明的变量：</p><ol><li>如果不使用 var 声明，和全局变量一致，表示给全局对象(window)添加属性</li><li>如果使用 var 声明，变量提升到所在函数的顶部，函数外部不可以使用该变量</li></ol><p><strong>函数中声明的变量，只能在函数中使用，在外部无效</strong></p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><p>参数表示函数运行的未知条件，需要调用者告知的数据</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">函数名</span><span class="token punctuation">(</span><span class="token parameter">形参<span class="token number">1</span><span class="token punctuation">,</span>形参<span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">...</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token function">函数名</span><span class="token punctuation">(</span>实参<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果实参没有传递，则对应的形参为 undefined</p><h2 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h2><p>函数运行后，得到的结果，调用函数时，调用表达式的值就是函数的返回值</p><p>return 会直接结束函数的整个运行</p><p>return 后面如果不跟任何数据，返回 undefined</p><p>如果函数中没有书写 return，则该函数会在末尾自动 return undefined</p><h2 id="文档注释" tabindex="-1"><a class="header-anchor" href="#文档注释" aria-hidden="true">#</a> 文档注释</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">a</span> 第1个相加的数\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">b</span> 第2个相加的数\n * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> 返回前2个数的和\n */</span>\n\n<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">//函数体</span>\n  <span class="token keyword">return</span> a <span class="token operator">+</span> b\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',28),p={render:function(n,a){return e}}}}]);