import{_ as e,o as a,c as s,e as n}from"./app.ba87f1b1.js";var c="/image/docs/20220704145802.webp";const i={},l=n(`<h1 id="elasticsearch\u64CD\u4F5C\u624B\u518C" tabindex="-1"><a class="header-anchor" href="#elasticsearch\u64CD\u4F5C\u624B\u518C" aria-hidden="true">#</a> ElasticSearch\u64CD\u4F5C\u624B\u518C</h1><h2 id="\u5B89\u88C5-elasticsearch" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-elasticsearch" aria-hidden="true">#</a> \u5B89\u88C5 ElasticSearch</h2><p>\u5F85\u5B8C\u5584</p><h2 id="docker-\u8FD0\u884C-elasticsearch" tabindex="-1"><a class="header-anchor" href="#docker-\u8FD0\u884C-elasticsearch" aria-hidden="true">#</a> Docker \u8FD0\u884C ElasticSearch</h2><h3 id="\u672C\u5730\u6570\u636E\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u672C\u5730\u6570\u636E\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> \u672C\u5730\u6570\u636E\u73AF\u5883\u51C6\u5907</h3><p>\u9996\u5148\u51C6\u5907\u548C\u65B0\u5EFA\u672C\u5730\u6302\u8F7D\u7684\u6570\u636E\u76EE\u5F55\u548C\u914D\u7F6E\u6587\u4EF6\uFF1A</p><ul><li>/opt/docker/elasticsearch/plugins/</li><li>/opt/docker/elasticsearch/data</li><li>/opt/docker/elasticsearch/config/elasticsearch.yml</li></ul><p>\u7F16\u8F91\u914D\u7F6E\u6587\u4EF6<code>/opt/docker/elasticsearch/config/elasticsearch.yml</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http.host: 0.0.0.0
http.cors.enabled: true
http.cors.allow-origin: &quot;*&quot;
http.cors.allow-headers: Authorization
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF1A\u6587\u4EF6\u5939\u7684\u6743\u9650\u8981\u6539\u6210\u4F7F\u7528<code>chmod -R 777</code>\u4FEE\u6539\u6587\u4EF6\u8BFB\u5199\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> -R <span class="token number">777</span> /opt/docker/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u542F\u52A8-docker-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-docker-\u5BB9\u5668" aria-hidden="true">#</a> \u542F\u52A8 Docker \u5BB9\u5668</h3><p>\u4F7F\u7528 Docker \u8FD0\u884C ElasticSearch\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">\\</span>
-p <span class="token number">9200</span>:9200 <span class="token punctuation">\\</span>
-p <span class="token number">9300</span>:9300 <span class="token punctuation">\\</span>
--name elasticsearch <span class="token punctuation">\\</span>
-e <span class="token string">&quot;discovery.type=single-node&quot;</span> <span class="token punctuation">\\</span>
-e <span class="token string">&quot;cluster.name=elasticsearch&quot;</span> <span class="token punctuation">\\</span>
-v /opt/docker/elasticsearch/plugins:/usr/share/elasticsearch/plugins <span class="token punctuation">\\</span>
-v /opt/docker/elasticsearch/data:/usr/share/elasticsearch/data <span class="token punctuation">\\</span>
-v /opt/docker/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml <span class="token punctuation">\\</span>
-d elasticsearch:8.2.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u547D\u4EE4\u8BE6\u89E3:</p><ul><li><code>-p</code>: \u7AEF\u53E3\u6620\u5C04</li><li><code>--name</code>: \u5BB9\u5668\u547D\u540D</li><li><code>-e</code>: \u73AF\u5883\u53D8\u91CF\uFF0C<code>discovery.type=single-node</code>\u4E3A\u5355\u8282\u70B9\u6A21\u5F0F</li><li><code>-v</code>: \u6302\u8F7D\u5B58\u50A8\uFF0C\u8FD9\u91CC\u6302\u8F7D\u4E86\u63D2\u4EF6\u76EE\u5F55\u3001\u6570\u636E\u76EE\u5F55\u548C\u914D\u7F6E\u6587\u4EF6</li><li><code>-d</code>: \u540E\u53F0\u8FD0\u884C</li></ul><h3 id="\u8FDB\u5165\u5BB9\u5668\u8BBE\u7F6E\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165\u5BB9\u5668\u8BBE\u7F6E\u5BC6\u7801" aria-hidden="true">#</a> \u8FDB\u5165\u5BB9\u5668\u8BBE\u7F6E\u5BC6\u7801</h3><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u5165\u5BB9\u5668\uFF0C\u5176\u4E2D<code>elasticsearch</code>\u662F\u6211\u4EEC\u5BB9\u5668\u7684\u540D\u5B57\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it elasticsearch /bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FDB\u5165\u5BB9\u5668\u4EE5\u540E\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/elasticsearch-setup-passwords interactive
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u8BBE\u5BC6\u7801\uFF0C\u64CD\u4F5C\u8BB0\u5F55\u5982\u4E0B\uFF1A</p><p>[<img src="`+c+`" alt="elasticsearch-setup-passwords interactive"></p><h3 id="\u8FDB\u5165\u5BB9\u5668\u5B89\u88C5\u5206\u8BCD\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u5165\u5BB9\u5668\u5B89\u88C5\u5206\u8BCD\u63D2\u4EF6" aria-hidden="true">#</a> \u8FDB\u5165\u5BB9\u5668\u5B89\u88C5\u5206\u8BCD\u63D2\u4EF6</h3><p>\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u5165\u5BB9\u5668\uFF0C\u5176\u4E2D<code>elasticsearch</code>\u662F\u6211\u4EEC\u5BB9\u5668\u7684\u540D\u5B57\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it elasticsearch /bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u5206\u8BCD\u63D2\u4EF6\uFF0C\u6CE8\u610F<code>\u7248\u672C\u53F7</code>\u8981\u5339\u914D\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>bin/elasticsearch-plugin <span class="token function">install</span> https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v8.2.3/elasticsearch-analysis-ik-8.2.3.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,28),d=[l];function r(t,o){return a(),s("div",null,d)}var p=e(i,[["render",r],["__file","elasticsearch.html.vue"]]);export{p as default};
