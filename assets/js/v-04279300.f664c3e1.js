"use strict";(self.webpackChunkvuepress_starter=self.webpackChunkvuepress_starter||[]).push([[325],{5352:(p,e,i)=>{i.r(e),i.d(e,{data:()=>l});const l={key:"v-04279300",path:"/note/js/0.Overview.html",title:"1. JS语言概述",lang:"zh-CN",frontmatter:{title:"1. JS语言概述",date:"2017-06-12",tags:["JS"]},excerpt:"",headers:[{level:2,title:"JS语言简史",slug:"js语言简史",children:[]},{level:2,title:"JS语言特性",slug:"js语言特性",children:[]}],filePathRelative:"note/js/0.Overview.md",git:{updatedTime:1628577068e3,contributors:[{name:"n",email:"n@nannandeMacBook-Air.local",commits:1}]}}},2360:(p,e,i)=>{i.r(e),i.d(e,{default:()=>t});const l=(0,i(6252).uE)('<h1 id="js语言概述" tabindex="-1"><a class="header-anchor" href="#js语言概述" aria-hidden="true">#</a> JS语言概述</h1><h2 id="js语言简史" tabindex="-1"><a class="header-anchor" href="#js语言简史" aria-hidden="true">#</a> JS语言简史</h2><ol><li>JS语言的起源</li></ol><p>网景（Netscape Communication Corperstion）, 1994年，推出第一款商用浏览器，网景浏览器（Netscape Navigator）</p><p>1995年，网景公司决定在浏览器中加入一门语言，可以作交互效果，提高用户体验。</p><p>最终决定独立开发一门新的语言，聘请Brendan Eich, 10天后，新的语言诞生。</p><p>LiveScript -&gt; JavaScript(JS)</p><p><strong>JS语言之父：Brendan Eich</strong></p><ol start="2"><li>第一次浏览器大战</li></ol><p>网景公司打算在浏览器中加入网络操作系统，影响到微软的利益，引起了微软的注意</p><p>1995年，微软发布IE浏览器。</p><p>JS语言推出之后，网景获得极大的竞争优势。</p><p>微软对JS语言反编译，借鉴JS语言，推出了JScript,VBScript</p><p>第一次浏览器大战是标准之争</p><p>1997年，网景公司将javascript1.1版本提交给ECMA（欧洲计算机制造协会）</p><p>IE3发布，并绑定windows操作系统</p><p>1998年，网景公司，被收购。</p><p><strong>ECMA收录了javascript，并提交给ISO，经过修改，成为了第一个JS的标准版本，成为ECMAScript，简称ES</strong></p><ol start="3"><li>第二次浏览器大战</li></ol><p>IE4、IE5、IE6（windows xp）</p><p>微软决定解散浏览器团队</p><p>Branch Eich,带领团队成立Mozilla基金会，并决定，将网景浏览器开源。</p><p>长时间内，世界的技术爱好者，对网景浏览器，进行维护和打补丁</p><p>2002，Mozilla推出firefox浏览器</p><p>2008,谷歌推出chrome浏览器，苹果推出safari,ASA公司Opera</p><p>chrome浏览器搭建JS执行引擎V8(v8引擎，可以将JS代码直接转换为字节码，理论上,js代码的执行速度已经接近汇编语言)</p><p>于是，JS具备了编写大型应用程序的能力，甚至服务器应用</p><blockquote><p>Ranya Dahl 准备些一个服务器的框架，直接利用V8引擎 完成了该框架，该框架，称为nodejs</p></blockquote><p><strong>v8,将JS的执行推向了一个新的台阶</strong></p><ol start="4"><li>ES标准的发展</li></ol><ul><li><p>ES1, 1997年</p></li><li><p>ES2, 1998年</p></li><li><p>ES3, 1999年</p></li><li><p>ES5, 2009年 习惯上，不再区分 JS 和 ECMAScript（ES）</p></li><li><p>ES6, 2015年 ECMA宣布，从ES6开始，使用年号作为版本号，ES6的真正称呼为：ES2015</p></li><li><p>ES7, 2016年 ES2016</p></li></ul><p><strong>非常重要， ES制定语言标准，不涉及语言的运行环境。正是因为ES避免了运行环境，就让ES有机会在各种环境中运行。ES成为了通用编程语言</strong></p><p><strong>本课程学习的是，ES的通用语法，浏览器环境为其注入的新功能</strong></p><p><strong>通常，把ES运行的环境称为，宿主环境</strong></p><h2 id="js语言特性" tabindex="-1"><a class="header-anchor" href="#js语言特性" aria-hidden="true">#</a> JS语言特性</h2><ul><li>解释性语言</li></ul><p>编译型语言：C语言、C++、java语言、C#语言</p><p>编译型语言会经力一个编译的过程，负责翻译的叫做编译器，翻译的结果，叫做编译结果。</p><pre><code>1. 优点：执行速度快\n2. 缺点：某个编译结果，难以适用于各种环境（跨平台障碍）；部署繁琐；\n</code></pre><p>解释型语言：JavaScript、PHP</p><p>解释型语言没有编译结果</p><pre><code>1. 优点：跨平台；部署简单；\n2. 缺点：执行速度稍慢\n</code></pre><ul><li>弱类型语言</li></ul><p>弱类型：存放的数据类型可变。 优点：灵活、易上手； 缺点：不严谨、</p><p>强类型：存放的数据类型不可变。 优点：严谨； 缺点：不灵活、不易上手</p><blockquote><p>通常，将弱类型的解释型语言，称为脚本语言</p></blockquote><ul><li>单线程</li></ul><p>同步现象：上一件事没有做完，下一件事情必须等待。</p><ul><li>异步</li></ul><p>提高单线程的执行效率。</p>',50),t={render:function(p,e){return l}}}}]);