import{_ as s,c as a,o as n,a as e}from"./app.90754e78.js";const d=JSON.parse('{"title":"TypeScript \u76F8\u5173\u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8D4B\u503C","slug":"\u8D4B\u503C","link":"#\u8D4B\u503C","children":[]}],"relativePath":"arco_pro/arco_ts_assignment.md"}'),l={name:"arco_pro/arco_ts_assignment.md"},p=e(`<h1 id="typescript-\u76F8\u5173\u4F7F\u7528" tabindex="-1">TypeScript \u76F8\u5173\u4F7F\u7528 <a class="header-anchor" href="#typescript-\u76F8\u5173\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="\u8D4B\u503C" tabindex="-1">\u8D4B\u503C <a class="header-anchor" href="#\u8D4B\u503C" aria-hidden="true">#</a></h2><p>\u539F\u59CB\u5BF9\u8C61\u8D4B\u503C \uFF08TS\u652F\u6301\u50CFJS\u4E00\u6837\u7684\u5BF9\u8C61\u8D4B\u503C\uFF09</p><div class="language-TypeScript"><button class="copy"></button><span class="lang">TypeScript</span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> mayouchen </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">yoga</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">eat</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1234567890</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(mayouchen</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">eat</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u5F15\u7528\u6570\u636E\u7C7B\u578B\u5E38\u89C1\u7684\uFF1A</p><pre><code>  array    String     Date    RegExp 
</code></pre><p>\u5F15\u7528\u7C7B\u578B\u53D8\u91CF \u5B9A\u4E49</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">    let arr1:number []; //\u6570\u503C\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">    let arr2:Array&lt;string&gt;; //\u5B57\u7B26\u4E32\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u5B50\u9762\u91CF \u8D4B\u503C</p><pre><code>let arr3:number[] = [];
let arr4:number[] = [111,22,33];

let arr5:Array&lt;string&gt; = [&#39;mayouchen&#39;,&#39;coloa&#39;];
let arr6:Array&lt;boolean&gt; = [false,true];
</code></pre><p>\u6784\u5EFA\u51FD\u6570 \u8D4B\u503C</p><pre><code>let arr7:number[] = new Array();
let arr8:number[] = new Array(1,2,3,4);

let arr9:Array&lt;string&gt; = new Array(&#39;mayouchen&#39;,&#39;coloa&#39;);
let arr0:Array&lt;boolean&gt; = new Array(false,true,false);
</code></pre><p>\u5143\u7EC4 \u8D4B\u503C</p><pre><code>let M:[string,number];
M = [&#39;hello TS&#39;,10000]
</code></pre>`,14),o=[p];function r(t,c,y,D,i,F){return n(),a("div",null,o)}const C=s(l,[["render",r]]);export{d as __pageData,C as default};
