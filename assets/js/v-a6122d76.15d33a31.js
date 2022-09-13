"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[3193],{9876:(e,l,a)=>{a.r(l),a.d(l,{data:()=>i});const i={key:"v-a6122d76",path:"/note/js/18.Array.html",title:"19. 数组",lang:"zh-CN",frontmatter:{title:"19. 数组",date:"2017-06-15T00:00:00.000Z",tags:["JS"]},excerpt:"",headers:[{level:2,title:"创建一个数组",slug:"创建一个数组",children:[]},{level:2,title:"认识数组的本质",slug:"认识数组的本质",children:[]},{level:2,title:"下标",slug:"下标",children:[]},{level:2,title:"数组的常见操作",slug:"数组的常见操作",children:[{level:3,title:"添加数组项",slug:"添加数组项",children:[]},{level:3,title:"删除数据",slug:"删除数据",children:[]},{level:3,title:"其他操作",slug:"其他操作",children:[]}]},{level:2,title:"语法补充",slug:"语法补充",children:[{level:3,title:"in 关键字",slug:"in-关键字",children:[]},{level:3,title:"for-in、forEach 循环",slug:"for-in、foreach-循环",children:[]}]}],filePathRelative:"note/js/18.Array.md",git:{updatedTime:1628577068e3,contributors:[{name:"n",email:"n@nannandeMacBook-Air.local",commits:1}]}}},6003:(e,l,a)=>{a.r(l),a.d(l,{default:()=>n});const i=(0,a(6252).uE)('<h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h1><p>数组用于存放多个数据</p><h2 id="创建一个数组" tabindex="-1"><a class="header-anchor" href="#创建一个数组" aria-hidden="true">#</a> 创建一个数组</h2><ol><li><code>new Array(长度)</code></li></ol><p>长度，数组里面的数据总数，长度一定是一个非负正数</p><p>new Array(数据,数据,数据...)</p><p>创建一个数组,并初始化其每一项的值</p><p>数组项: 数组其中的一项数据</p><ol start="2"><li><code>[数据,数据,数据...]</code></li></ol><p>创建一个数组,并初始化每一项的值</p><h2 id="认识数组的本质" tabindex="-1"><a class="header-anchor" href="#认识数组的本质" aria-hidden="true">#</a> 认识数组的本质</h2><p>数组的本质是一个对象</p><ul><li>length 属性: 数组的长度,会自动变化,最大下标+1</li><li>数字字符串属性: 叫做下标,也叫做索引,相当于数组中每个数据的编号,下标从 0 开始</li></ul><p>连续下标的取值范围：0 ～ length -1，如果给 length 直接赋值，会导致数组可能被截断</p><p>实际开发中，不要给 length 赋值</p><h2 id="下标" tabindex="-1"><a class="header-anchor" href="#下标" aria-hidden="true">#</a> 下标</h2><p>通常情况下，下标是连续的，</p><p>下标不连续的数组，叫做稀松数组。</p><h2 id="数组的常见操作" tabindex="-1"><a class="header-anchor" href="#数组的常见操作" aria-hidden="true">#</a> 数组的常见操作</h2><h3 id="添加数组项" tabindex="-1"><a class="header-anchor" href="#添加数组项" aria-hidden="true">#</a> 添加数组项</h3><ul><li><code>数组[长度] = 数据</code>：向数组末尾添加一项数据</li><li><code>数组.push(数据)</code>：向数组末尾添加一项数据</li><li><code>数组.unshift(数据)</code>：向数组起始位置添加一项数据，会导致数组每一项的下标向后移动</li><li><code>数组.splice(下标,0,添加的数据)</code>：从指定下标位置开始，删除 0 个，然后在该位置插入添加的数据，如果下标超过数组下标的范围，则按照范围的边界进行处理。</li></ul><p>push、unshift、splice 可以添加多个数据</p><h3 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据" aria-hidden="true">#</a> 删除数据</h3><ul><li><code>delete 数组[下标]</code>：</li></ul><p>这种做法不会导致数组其他的属性发生变化，因此，该做法会导致产生稀松数组，所以不推荐使用该做法。</p><ul><li><code>数组.pop()</code>：</li></ul><p>删除数组的最后一项，该表达式返回最后一项的数据</p><ul><li><code>数组.shift()</code>：</li></ul><p>删除数组第一项，该表达式返回第一项的数据</p><ul><li><code>数组.splice(下标,删除的数量,添加的数据)</code>：</li></ul><p>从指定下标位置开始，删除指定数量，然后在该位置插入添加的数据，如果下标超过数组下标的范围，则按照范围的边界进行处理。该表达式返回一个新数组，新数组记录被删除的数据。</p><h3 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作" aria-hidden="true">#</a> 其他操作</h3><ul><li><code>数组.slice(起始位置下标，结束位置下标)</code>：</li></ul><p>将起始位置到结束位置下标(结束下标取不到)的数据删除，返回一个新数组，不会改变原数组；</p><p>下标可以是负数，如果是负数，则从数组的末尾开始计算。</p><p>如果不写结束下标，则直接取到末尾。</p><ul><li><p>数组清空</p><ul><li><code>数组.splice(0,数组.length)</code></li><li><code>数组.length = 0</code></li></ul></li><li><p>查找数组中某一项的下标</p><ul><li><p><code>数组.indexOf(数据)</code>：</p><p>从数组中依次查找对应的数据，查找时使用严格相等进行比较。找到第一个匹配的下标，返回。<strong>注意：如果没有找到，则返回-1；</strong></p></li><li><p><code>数组.laseIndexOf(数据)</code></p><p>功能和 indexOf 类似，只是查找的是最后一个匹配的下标</p></li></ul></li><li><p><code>数组.fill()</code></p><ul><li><p><code>数组.fill(数据)</code>：</p><p>将数组的所有项，填充为指定的数据</p></li><li><p><code>数组.fill(数据，开始下标)</code>：</p><p>将数组从开始下标，到数组的末尾，填充为指定的数据</p></li><li><p><code>数组.fill(数据，开始下标，结束下标)</code>：</p><p>将数组从开始下标，到数组的结束下标(取不到)，填充为指定的数据</p></li></ul></li></ul><h2 id="语法补充" tabindex="-1"><a class="header-anchor" href="#语法补充" aria-hidden="true">#</a> 语法补充</h2><h3 id="in-关键字" tabindex="-1"><a class="header-anchor" href="#in-关键字" aria-hidden="true">#</a> in 关键字</h3><p>判断某个属性名在对象中属否存在</p><p>属性名 in 对象</p><h3 id="for-in、foreach-循环" tabindex="-1"><a class="header-anchor" href="#for-in、foreach-循环" aria-hidden="true">#</a> for-in、forEach 循环</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> prop <span class="token keyword">in</span> 对象<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 循环体</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>取出对象的所有属性名，每次循环将其中一个属性名赋值给变量 prop，运行循环体。</p>',44),n={render:function(e,l){return i}}}}]);