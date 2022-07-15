import{_ as t,r as l,o,c as u,b as i,w as s,a as n,e as r,d as e}from"./app.ba87f1b1.js";const v={},m=r('<h1 id="nginx\u64CD\u4F5C\u624B\u518C" tabindex="-1"><a class="header-anchor" href="#nginx\u64CD\u4F5C\u624B\u518C" aria-hidden="true">#</a> Nginx\u64CD\u4F5C\u624B\u518C</h1><p>Nginx (engine x) \u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684HTTP\u548C\u53CD\u5411\u4EE3\u7406web\u670D\u52A1\u5668\u3002</p><h2 id="\u5B89\u88C5-nginx" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nginx" aria-hidden="true">#</a> \u5B89\u88C5 Nginx</h2><h3 id="\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5" aria-hidden="true">#</a> \u4E8C\u8FDB\u5236\u5305\u5B89\u88C5</h3><p>\u4E3A\u4E86\u65B9\u4FBF\u5FEB\u901F\u7684\u5B89\u88C5\u8F6F\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u7F16\u8BD1\u597D\u7684\u4E8C\u8FDB\u5236\u8F6F\u4EF6\u5305\u76F4\u63A5\u901A\u8FC7\u5305\u7BA1\u7406\u5668\u5B89\u88C5\u8F6F\u4EF6\u3002</p>',5),p=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u66F4\u65B0"),e(`
`),n("span",{class:"token function"},"sudo"),e(` yum update

`),n("span",{class:"token comment"},"# \u5B89\u88C5"),e(`
`),n("span",{class:"token function"},"sudo"),e(" yum "),n("span",{class:"token function"},"install"),e(` nginx
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u66F4\u65B0"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"apt"),e(` update

`),n("span",{class:"token comment"},"# \u5B89\u88C5"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"apt"),e(),n("span",{class:"token function"},"install"),e(` nginx

`),n("span",{class:"token comment"},"# \u67E5\u770B\u8FD0\u884C\u72B6\u6001"),e(`
`),n("span",{class:"token function"},"sudo"),e(` systemctl status nginx
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("h3",{id:"\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5","aria-hidden":"true"},"#"),e(" \u6E90\u7801\u7F16\u8BD1\u5B89\u88C5")],-1),x=n("p",null,"\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5\u7684\u597D\u5904\u662F\u4F60\u9700\u8981\u4EC0\u4E48\u6A21\u5757\u5C31\u53EF\u4EE5\u5B9A\u5236\u5316\u7F16\u8BD1\u51FA\u4F60\u9700\u8981\u7684\u6A21\u5757\uFF0C\u6240\u4EE5\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u4E5F\u9700\u8981\u6E90\u7801\u7F16\u8BD1\u5B89\u88C5\u3002",-1),h=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u5B89\u88C5\u4F9D\u8D56\u7684\u73AF\u5883"),e(`
`),n("span",{class:"token function"},"sudo"),e(" yum -y "),n("span",{class:"token function"},"install"),e(` gcc zlib zlib-devel pcre-devel openssl openssl-devel

`),n("span",{class:"token comment"},"# \u4E0B\u8F7D Nginx \u6E90\u7801 tar \u5305"),e(`
`),n("span",{class:"token function"},"wget"),e(` http://nginx.org/download/nginx-1.22.0.tar.gz

`),n("span",{class:"token comment"},"# \u89E3\u538B\u6E90\u7801\u5305"),e(`
`),n("span",{class:"token function"},"tar"),e(` -xvf nginx-1.22.0.tar.gz

`),n("span",{class:"token comment"},"# \u8FDB\u5165\u6E90\u7801"),e(`
`),n("span",{class:"token builtin class-name"},"cd"),e(` nginx-1.22.0

`),n("span",{class:"token comment"},"# \u914D\u7F6E\uFF08\u5982\u679C\u9700\u8981\u5B9A\u5236\u5316\u7F16\u8BD1\uFF0C\u5728\u6B64\u5904\u4F20\u53C2\u6570\u5F00\u542F\u76F8\u5173\u6A21\u5757\uFF0C\u4E0B\u65B9\u6709\u53C2\u6570\u8BF4\u660E\uFF09"),e(`
`),n("span",{class:"token function"},"sudo"),e(` ./configure

`),n("span",{class:"token comment"},"# make"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"make"),e(`

`),n("span",{class:"token comment"},"# make install"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"make"),e(),n("span",{class:"token function"},"install"),e(`

`),n("span",{class:"token comment"},"# \u6253\u5F00\u914D\u7F6E\u6587\u4EF6"),e(`
`),n("span",{class:"token function"},"vi"),e(` /usr/local/nginx/conf/nginx.conf

`),n("span",{class:"token comment"},"# \u542F\u52A8Nginx"),e(`
/usr/local/nginx/sbin/nginx
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),k=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u66F4\u65B0"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"apt-get"),e(` update
`),n("span",{class:"token comment"},"# \u5B89\u88C5\u4F9D\u8D56\uFF1Agcc\u3001g++\u4F9D\u8D56\u5E93"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"apt-get"),e(),n("span",{class:"token function"},"install"),e(` build-essential libtool
`),n("span",{class:"token comment"},"# \u5B89\u88C5 pcre\u4F9D\u8D56\u5E93\uFF08http://www.pcre.org/\uFF09"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"apt-get"),e(),n("span",{class:"token function"},"install"),e(` libpcre3 libpcre3-dev
`),n("span",{class:"token comment"},"# \u5B89\u88C5 zlib\u4F9D\u8D56\u5E93\uFF08http://www.zlib.net\uFF09"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"apt-get"),e(),n("span",{class:"token function"},"install"),e(` zlib1g-dev
`),n("span",{class:"token comment"},"# \u5B89\u88C5ssl\u4F9D\u8D56\u5E93"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"apt-get"),e(),n("span",{class:"token function"},"install"),e(` openssl

`),n("span",{class:"token comment"},"# \u4E0B\u8F7D Nginx \u6E90\u7801 tar \u5305"),e(`
`),n("span",{class:"token function"},"wget"),e(` http://nginx.org/download/nginx-1.22.0.tar.gz

`),n("span",{class:"token comment"},"# \u89E3\u538B\u6E90\u7801\u5305"),e(`
`),n("span",{class:"token function"},"tar"),e(` -xvf nginx-1.22.0.tar.gz

`),n("span",{class:"token comment"},"# \u8FDB\u5165\u6E90\u7801"),e(`
`),n("span",{class:"token builtin class-name"},"cd"),e(` nginx-1.22.0

`),n("span",{class:"token comment"},"# \u914D\u7F6E\uFF08\u5982\u679C\u9700\u8981\u5B9A\u5236\u5316\u7F16\u8BD1\uFF0C\u5728\u6B64\u5904\u4F20\u53C2\u6570\u5F00\u542F\u76F8\u5173\u6A21\u5757\uFF0C\u4E0B\u65B9\u6709\u53C2\u6570\u8BF4\u660E\uFF09"),e(`
`),n("span",{class:"token function"},"sudo"),e(` ./configure

`),n("span",{class:"token comment"},"# make"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"make"),e(`

`),n("span",{class:"token comment"},"# make install"),e(`
`),n("span",{class:"token function"},"sudo"),e(),n("span",{class:"token function"},"make"),e(),n("span",{class:"token function"},"install"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=r(`<h4 id="configure-\u7F16\u8BD1\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#configure-\u7F16\u8BD1\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> configure \u7F16\u8BD1\u53C2\u6570\u8BF4\u660E</h4><p>configure\u547D\u4EE4\u662F\u7528\u6765\u68C0\u6D4B\u4F60\u7684\u5B89\u88C5\u5E73\u53F0\u7684\u76EE\u6807\u7279\u5F81\u7684\u3002\u5B83\u5B9A\u4E49\u4E86\u7CFB\u7EDF\u7684\u5404\u4E2A\u65B9\u9762\uFF0C\u5305\u62ECnginx\u7684\u88AB\u5141\u8BB8\u4F7F\u7528\u7684\u8FDE\u63A5\u5904\u7406\u7684\u65B9\u6CD5\uFF0C\u6BD4\u5982\u5B83\u4F1A\u68C0\u6D4B\u4F60\u662F\u4E0D\u662F\u6709CC\u6216GCC\uFF0C\u5E76\u4E0D\u662F\u9700\u8981CC\u6216GCC\uFF0C\u5B83\u662F\u4E2Ashell\u811A\u672C\uFF0C\u6267\u884C\u7ED3\u675F\u65F6\uFF0C\u5B83\u4F1A\u521B\u5EFA\u4E00\u4E2AMakefile\u6587\u4EF6\u3002nginx\u7684configure\u547D\u4EE4\u652F\u6301\u4EE5\u4E0B\u53C2\u6570\uFF1A</p><p>\u7531\u4E8E\u53C2\u6570\u4F17\u591A\uFF0C\u6B64\u5904\u6298\u53E0\uFF0C\u8BF7\u70B9\u51FB\u5C55\u5F00\u67E5\u770B\uFF1A</p><details><summary>\u70B9\u6B64\u5C55\u5F00\u67E5\u770B\u8BE6\u60C5</summary><ul><li>--prefix=path \u5B9A\u4E49\u4E00\u4E2A\u76EE\u5F55\uFF0C\u5B58\u653E\u670D\u52A1\u5668\u4E0A\u7684\u6587\u4EF6 \uFF0C\u4E5F\u5C31\u662Fnginx\u7684\u5B89\u88C5\u76EE\u5F55\u3002\u9ED8\u8BA4\u4F7F\u7528 /usr/local/nginx\u3002</li><li>--sbin-path=path \u8BBE\u7F6Enginx\u7684\u53EF\u6267\u884C\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u4E3A prefix/sbin/nginx.</li><li>--conf-path=path \u8BBE\u7F6E\u5728nginx.conf\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84\u3002nginx\u5141\u8BB8\u4F7F\u7528\u4E0D\u540C\u7684\u914D\u7F6E\u6587\u4EF6\u542F\u52A8\uFF0C\u901A\u8FC7\u547D\u4EE4\u884C\u4E2D\u7684-c\u9009\u9879\u3002\u9ED8\u8BA4\u4E3Aprefix/conf/nginx.conf.</li><li>--pid-path=path \u8BBE\u7F6Enginx.pid\u6587\u4EF6\uFF0C\u5C06\u5B58\u50A8\u7684\u4E3B\u8FDB\u7A0B\u7684\u8FDB\u7A0B\u53F7\u3002\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u968F\u65F6\u6539\u53D8\u7684\u6587\u4EF6\u540D \uFF0C \u5728nginx.conf\u914D\u7F6E\u6587\u4EF6\u4E2D\u4F7F\u7528 PID\u6307\u4EE4\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6587\u4EF6\u540D \u4E3Aprefix/logs/nginx.pid.</li><li>--error-log-path=path \u8BBE\u7F6E\u4E3B\u9519\u8BEF\uFF0C\u8B66\u544A\uFF0C\u548C\u8BCA\u65AD\u6587\u4EF6\u7684\u540D\u79F0\u3002\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u968F\u65F6\u6539\u53D8\u7684\u6587\u4EF6\u540D \uFF0C\u5728nginx.conf\u914D\u7F6E\u6587\u4EF6\u4E2D \u4F7F\u7528 \u7684error_log\u6307\u4EE4\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6587\u4EF6\u540D \u4E3Aprefix/logs/error.log.</li><li>--http-log-path=path \u8BBE\u7F6E\u4E3B\u8BF7\u6C42\u7684HTTP\u670D\u52A1\u5668\u7684\u65E5\u5FD7\u6587\u4EF6\u7684\u540D\u79F0\u3002\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u968F\u65F6\u6539\u53D8\u7684\u6587\u4EF6\u540D \uFF0C\u5728nginx.conf\u914D\u7F6E\u6587\u4EF6\u4E2D \u4F7F\u7528 \u7684access_log\u6307\u4EE4\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u6587\u4EF6\u540D \u4E3Aprefix/logs/access.log.</li><li>--user=name \u8BBE\u7F6Enginx\u5DE5\u4F5C\u8FDB\u7A0B\u7684\u7528\u6237\u3002\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u968F\u65F6\u66F4\u6539\u7684\u540D\u79F0\u5728nginx.conf\u914D\u7F6E\u6587\u4EF6\u4E2D \u4F7F\u7528\u7684 user\u6307\u4EE4\u3002\u9ED8\u8BA4\u7684\u7528\u6237\u540D\u662Fnobody\u3002</li><li>--group=name \u8BBE\u7F6Enginx\u5DE5\u4F5C\u8FDB\u7A0B\u7684\u7528\u6237\u7EC4\u3002\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u968F\u65F6\u66F4\u6539\u7684\u540D\u79F0\u5728nginx.conf\u914D\u7F6E\u6587\u4EF6\u4E2D \u4F7F\u7528\u7684 user\u6307\u4EE4\u3002\u9ED8\u8BA4\u7684\u4E3A\u975E\u7279\u6743\u7528\u6237\u3002</li><li>--with-select_module --without-select_module \u542F\u7528\u6216\u7981\u7528\u6784\u5EFA\u4E00\u4E2A\u6A21\u5757\u6765\u5141\u8BB8\u670D\u52A1\u5668\u4F7F\u7528select()\u65B9\u6CD5\u3002\u8BE5\u6A21\u5757\u5C06\u81EA\u52A8\u5EFA\u7ACB\uFF0C\u5982\u679C\u5E73\u53F0\u4E0D\u652F\u6301\u7684kqueue\uFF0Cepoll\uFF0Crtsig\u6216/dev/poll\u3002</li><li>--with-poll_module --without-poll_module \u542F\u7528\u6216\u7981\u7528\u6784\u5EFA\u4E00\u4E2A\u6A21\u5757\u6765\u5141\u8BB8\u670D\u52A1\u5668\u4F7F\u7528poll()\u65B9\u6CD5\u3002\u8BE5\u6A21\u5757\u5C06\u81EA\u52A8\u5EFA\u7ACB\uFF0C\u5982\u679C\u5E73\u53F0\u4E0D\u652F\u6301\u7684kqueue\uFF0Cepoll\uFF0Crtsig\u6216/dev/poll\u3002</li><li>--without-http_gzip_module \u2014 \u4E0D\u7F16\u8BD1\u538B\u7F29\u7684HTTP\u670D\u52A1\u5668\u7684\u54CD\u5E94\u6A21\u5757\u3002\u7F16\u8BD1\u5E76\u8FD0\u884C\u6B64\u6A21\u5757\u9700\u8981zlib\u5E93\u3002</li><li>--without-http_rewrite_module \u4E0D\u7F16\u8BD1\u91CD\u5199\u6A21\u5757\u3002\u7F16\u8BD1\u5E76\u8FD0\u884C\u6B64\u6A21\u5757\u9700\u8981PCRE\u5E93\u652F\u6301\u3002</li><li>--without-http_proxy_module \u2014 \u4E0D\u7F16\u8BD1http_proxy\u6A21\u5757\u3002</li><li>--with-http_ssl_module \u2014 \u4F7F\u7528https\u534F\u8BAE\u6A21\u5757\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8BE5\u6A21\u5757\u6CA1\u6709\u88AB\u6784\u5EFA\u3002\u5EFA\u7ACB\u5E76\u8FD0\u884C\u6B64\u6A21\u5757\u7684OpenSSL\u5E93\u662F\u5FC5\u9700\u7684\u3002</li><li>--with-pcre=path \u2014 \u8BBE\u7F6EPCRE\u5E93\u7684\u6E90\u7801\u8DEF\u5F84\u3002PCRE\u5E93\u7684\u6E90\u7801\uFF08\u7248\u672C4.4 - 8.30\uFF09\u9700\u8981\u4ECEPCRE\u7F51\u7AD9\u4E0B\u8F7D\u5E76\u89E3\u538B\u3002\u5176\u4F59\u7684\u5DE5\u4F5C\u662FNginx\u7684./ configure\u548Cmake\u6765\u5B8C\u6210\u3002\u6B63\u5219\u8868\u8FBE\u5F0F\u4F7F\u7528\u5728location\u6307\u4EE4\u548C ngx_http_rewrite_module \u6A21\u5757\u4E2D\u3002</li><li>--with-pcre-jit \u2014\u7F16\u8BD1PCRE\u5305\u542B\u201Cjust-in-time compilation\u201D\uFF081.1.12\u4E2D\uFF0C pcre_jit\u6307\u4EE4\uFF09\u3002</li><li>--with-zlib=path \u2014\u8BBE\u7F6E\u7684zlib\u5E93\u7684\u6E90\u7801\u8DEF\u5F84\u3002\u8981\u4E0B\u8F7D\u4ECE zlib\uFF08\u7248\u672C1.1.3 - 1.2.5\uFF09\u7684\u5E76\u89E3\u538B\u3002\u5176\u4F59\u7684\u5DE5\u4F5C\u662FNginx\u7684./ configure\u548Cmake\u5B8C\u6210\u3002ngx_http_gzip_module\u6A21\u5757\u9700\u8981\u4F7F\u7528zlib \u3002</li><li>--with-cc-opt=parameters \u2014 \u8BBE\u7F6E\u989D\u5916\u7684\u53C2\u6570\u5C06\u88AB\u6DFB\u52A0\u5230CFLAGS\u53D8\u91CF\u3002\u4F8B\u5982,\u5F53\u4F60\u5728FreeBSD\u4E0A\u4F7F\u7528PCRE\u5E93\u65F6\u9700\u8981\u4F7F\u7528:--with-cc-opt=&quot;-I /usr/local/include\u3002.\u5982\u9700\u8981\u9700\u8981\u589E\u52A0 select()\u652F\u6301\u7684\u6587\u4EF6\u6570\u91CF:--with-cc-opt=&quot;-D FD_SETSIZE=2048&quot;.</li><li>--with-ld-opt=parameters \u2014\u8BBE\u7F6E\u9644\u52A0\u7684\u53C2\u6570\uFF0C\u5C06\u7528\u4E8E\u5728\u94FE\u63A5\u671F\u95F4\u3002\u4F8B\u5982\uFF0C\u5F53\u5728FreeBSD\u4E0B\u4F7F\u7528\u8BE5\u7CFB\u7EDF\u7684PCRE\u5E93,\u5E94\u6307\u5B9A:--with-ld-opt=&quot;-L /usr/local/lib&quot;.</li></ul></details><h2 id="\u914D\u7F6E-nginx" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-nginx" aria-hidden="true">#</a> \u914D\u7F6E Nginx</h2><p>\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u8FD0\u884C\u7528\u6237
user nobody;
#\u542F\u52A8\u8FDB\u7A0B,\u901A\u5E38\u8BBE\u7F6E\u6210\u548Ccpu\u7684\u6570\u91CF\u76F8\u7B49
worker_processes  1;

#\u5168\u5C40\u9519\u8BEF\u65E5\u5FD7\u53CAPID\u6587\u4EF6
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

#\u5DE5\u4F5C\u6A21\u5F0F\u53CA\u8FDE\u63A5\u6570\u4E0A\u9650
events {
    #epoll\u662F\u591A\u8DEF\u590D\u7528IO(I/O Multiplexing)\u4E2D\u7684\u4E00\u79CD\u65B9\u5F0F,
    #\u4EC5\u7528\u4E8Elinux2.6\u4EE5\u4E0A\u5185\u6838,\u53EF\u4EE5\u5927\u5927\u63D0\u9AD8nginx\u7684\u6027\u80FD
    use   epoll; 

    #\u5355\u4E2A\u540E\u53F0worker process\u8FDB\u7A0B\u7684\u6700\u5927\u5E76\u53D1\u94FE\u63A5\u6570    
    worker_connections  1024;

    # \u5E76\u53D1\u603B\u6570\u662F worker_processes \u548C worker_connections \u7684\u4E58\u79EF
    # \u5373 max_clients = worker_processes * worker_connections
    # \u5728\u8BBE\u7F6E\u4E86\u53CD\u5411\u4EE3\u7406\u7684\u60C5\u51B5\u4E0B\uFF0Cmax_clients = worker_processes * worker_connections / 4  \u4E3A\u4EC0\u4E48
    # \u4E3A\u4EC0\u4E48\u4E0A\u9762\u53CD\u5411\u4EE3\u7406\u8981\u9664\u4EE54\uFF0C\u5E94\u8BE5\u8BF4\u662F\u4E00\u4E2A\u7ECF\u9A8C\u503C
    # \u6839\u636E\u4EE5\u4E0A\u6761\u4EF6\uFF0C\u6B63\u5E38\u60C5\u51B5\u4E0B\u7684Nginx Server\u53EF\u4EE5\u5E94\u4ED8\u7684\u6700\u5927\u8FDE\u63A5\u6570\u4E3A\uFF1A4 * 8000 = 32000
    # worker_connections \u503C\u7684\u8BBE\u7F6E\u8DDF\u7269\u7406\u5185\u5B58\u5927\u5C0F\u6709\u5173
    # \u56E0\u4E3A\u5E76\u53D1\u53D7IO\u7EA6\u675F\uFF0Cmax_clients\u7684\u503C\u987B\u5C0F\u4E8E\u7CFB\u7EDF\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6\u6570
    # \u800C\u7CFB\u7EDF\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6\u6570\u548C\u5185\u5B58\u5927\u5C0F\u6210\u6B63\u6BD4\uFF0C\u4E00\u822C1GB\u5185\u5B58\u7684\u673A\u5668\u4E0A\u53EF\u4EE5\u6253\u5F00\u7684\u6587\u4EF6\u6570\u5927\u7EA6\u662F10\u4E07\u5DE6\u53F3
    # \u6211\u4EEC\u6765\u770B\u770B360M\u5185\u5B58\u7684VPS\u53EF\u4EE5\u6253\u5F00\u7684\u6587\u4EF6\u53E5\u67C4\u6570\u662F\u591A\u5C11\uFF1A
    # $ cat /proc/sys/fs/file-max
    # \u8F93\u51FA 34336
    # 32000 &lt; 34336\uFF0C\u5373\u5E76\u53D1\u8FDE\u63A5\u603B\u6570\u5C0F\u4E8E\u7CFB\u7EDF\u53EF\u4EE5\u6253\u5F00\u7684\u6587\u4EF6\u53E5\u67C4\u603B\u6570\uFF0C\u8FD9\u6837\u5C31\u5728\u64CD\u4F5C\u7CFB\u7EDF\u53EF\u4EE5\u627F\u53D7\u7684\u8303\u56F4\u4E4B\u5185
    # \u6240\u4EE5\uFF0Cworker_connections \u7684\u503C\u9700\u6839\u636E worker_processes \u8FDB\u7A0B\u6570\u76EE\u548C\u7CFB\u7EDF\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6\u603B\u6570\u8FDB\u884C\u9002\u5F53\u5730\u8FDB\u884C\u8BBE\u7F6E
    # \u4F7F\u5F97\u5E76\u53D1\u603B\u6570\u5C0F\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u53EF\u4EE5\u6253\u5F00\u7684\u6700\u5927\u6587\u4EF6\u6570\u76EE
    # \u5176\u5B9E\u8D28\u4E5F\u5C31\u662F\u6839\u636E\u4E3B\u673A\u7684\u7269\u7406CPU\u548C\u5185\u5B58\u8FDB\u884C\u914D\u7F6E
    # \u5F53\u7136\uFF0C\u7406\u8BBA\u4E0A\u7684\u5E76\u53D1\u603B\u6570\u53EF\u80FD\u4F1A\u548C\u5B9E\u9645\u6709\u6240\u504F\u5DEE\uFF0C\u56E0\u4E3A\u4E3B\u673A\u8FD8\u6709\u5176\u4ED6\u7684\u5DE5\u4F5C\u8FDB\u7A0B\u9700\u8981\u6D88\u8017\u7CFB\u7EDF\u8D44\u6E90\u3002
    # ulimit -SHn 65535

}


http {
    #\u8BBE\u5B9Amime\u7C7B\u578B,\u7C7B\u578B\u7531mime.type\u6587\u4EF6\u5B9A\u4E49
    include    mime.types;
    default_type  application/octet-stream;
    #\u8BBE\u5B9A\u65E5\u5FD7\u683C\u5F0F
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  logs/access.log  main;

    #sendfile \u6307\u4EE4\u6307\u5B9A nginx \u662F\u5426\u8C03\u7528 sendfile \u51FD\u6570\uFF08zero copy \u65B9\u5F0F\uFF09\u6765\u8F93\u51FA\u6587\u4EF6\uFF0C
    #\u5BF9\u4E8E\u666E\u901A\u5E94\u7528\uFF0C\u5FC5\u987B\u8BBE\u4E3A on,
    #\u5982\u679C\u7528\u6765\u8FDB\u884C\u4E0B\u8F7D\u7B49\u5E94\u7528\u78C1\u76D8IO\u91CD\u8D1F\u8F7D\u5E94\u7528\uFF0C\u53EF\u8BBE\u7F6E\u4E3A off\uFF0C
    #\u4EE5\u5E73\u8861\u78C1\u76D8\u4E0E\u7F51\u7EDCI/O\u5904\u7406\u901F\u5EA6\uFF0C\u964D\u4F4E\u7CFB\u7EDF\u7684uptime.
    sendfile     on;
    #tcp_nopush     on;

    #\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4
    #keepalive_timeout  0;
    keepalive_timeout  65;
    tcp_nodelay     on;

    #\u5F00\u542Fgzip\u538B\u7F29
    gzip  on;
    gzip_disable &quot;MSIE [1-6].&quot;;

    #\u8BBE\u5B9A\u8BF7\u6C42\u7F13\u51B2
    client_header_buffer_size    128k;
    large_client_header_buffers  4 128k;


    #\u8BBE\u5B9A\u865A\u62DF\u4E3B\u673A\u914D\u7F6E
    server {
        #\u4FA6\u542C80\u7AEF\u53E3
        listen    80;
        #\u5B9A\u4E49\u4F7F\u7528 www.nginx.cn\u8BBF\u95EE
        server_name  www.nginx.cn;

        #\u5B9A\u4E49\u670D\u52A1\u5668\u7684\u9ED8\u8BA4\u7F51\u7AD9\u6839\u76EE\u5F55\u4F4D\u7F6E
        root html;

        #\u8BBE\u5B9A\u672C\u865A\u62DF\u4E3B\u673A\u7684\u8BBF\u95EE\u65E5\u5FD7
        access_log  logs/nginx.access.log  main;

        #\u9ED8\u8BA4\u8BF7\u6C42
        location / {
            
            #\u5B9A\u4E49\u9996\u9875\u7D22\u5F15\u6587\u4EF6\u7684\u540D\u79F0
            index index.php index.html index.htm;   

        }

        # \u5B9A\u4E49\u9519\u8BEF\u63D0\u793A\u9875\u9762
        error_page   500 502 503 504 /50x.html;
        location = /50x.html {
        }

        #\u9759\u6001\u6587\u4EF6\uFF0Cnginx\u81EA\u5DF1\u5904\u7406
        location ~ ^/(images|javascript|js|css|flash|media|static)/ {
            
            #\u8FC7\u671F30\u5929\uFF0C\u9759\u6001\u6587\u4EF6\u4E0D\u600E\u4E48\u66F4\u65B0\uFF0C\u8FC7\u671F\u53EF\u4EE5\u8BBE\u5927\u4E00\u70B9\uFF0C
            #\u5982\u679C\u9891\u7E41\u66F4\u65B0\uFF0C\u5219\u53EF\u4EE5\u8BBE\u7F6E\u5F97\u5C0F\u4E00\u70B9\u3002
            expires 30d;
        }

        #PHP \u811A\u672C\u8BF7\u6C42\u5168\u90E8\u8F6C\u53D1\u5230 FastCGI\u5904\u7406. \u4F7F\u7528FastCGI\u9ED8\u8BA4\u914D\u7F6E.
        location ~ .php$ {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include fastcgi_params;
        }

        #\u7981\u6B62\u8BBF\u95EE .htxxx \u6587\u4EF6
            location ~ /.ht {
            deny all;
        }

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8FD0\u884C\u548C\u63A7\u5236-nginx" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u548C\u63A7\u5236-nginx" aria-hidden="true">#</a> \u8FD0\u884C\u548C\u63A7\u5236 Nginx</h3><h4 id="nginx-\u547D\u4EE4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#nginx-\u547D\u4EE4\u53C2\u6570" aria-hidden="true">#</a> Nginx \u547D\u4EE4\u53C2\u6570</h4><p>\u4E0D\u50CF\u8BB8\u591A\u5176\u4ED6\u8F6F\u4EF6\u7CFB\u7EDF\uFF0CNginx \u4EC5\u6709\u51E0\u4E2A\u547D\u4EE4\u884C\u53C2\u6570\uFF0C\u5B8C\u5168\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u6765\u914D\u7F6E</p><ul><li>-c &lt;/path/to/config&gt; \u4E3A Nginx \u6307\u5B9A\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u6765\u4EE3\u66FF\u7F3A\u7701\u7684\u3002</li><li>-t \u4E0D\u8FD0\u884C\uFF0C\u800C\u4EC5\u4EC5\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u3002nginx \u5C06\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u7684\u8BED\u6CD5\u7684\u6B63\u786E\u6027\uFF0C\u5E76\u5C1D\u8BD5\u6253\u5F00\u914D\u7F6E\u6587\u4EF6\u4E2D\u6240\u5F15\u7528\u5230\u7684\u6587\u4EF6\u3002</li><li>-v \u663E\u793A nginx \u7684\u7248\u672C\u3002</li><li>-V \u663E\u793A nginx \u7684\u7248\u672C\uFF0C\u7F16\u8BD1\u5668\u7248\u672C\u548C\u914D\u7F6E\u53C2\u6570\u3002</li></ul><h1 id="nginx-\u63A7\u5236\u4FE1\u53F7" tabindex="-1"><a class="header-anchor" href="#nginx-\u63A7\u5236\u4FE1\u53F7" aria-hidden="true">#</a> Nginx \u63A7\u5236\u4FE1\u53F7</h1><p>\u53EF\u4EE5\u4F7F\u7528\u4FE1\u53F7\u7CFB\u7EDF\u6765\u63A7\u5236\u4E3B\u8FDB\u7A0B\u3002\u9ED8\u8BA4\uFF0Cnginx \u5C06\u5176\u4E3B\u8FDB\u7A0B\u7684 pid \u5199\u5165\u5230 /usr/local/nginx/nginx.pid \u6587\u4EF6\u4E2D\u3002\u901A\u8FC7\u4F20\u9012\u53C2\u6570\u7ED9 ./configure \u6216\u4F7F\u7528 pid \u6307\u4EE4\uFF0C\u6765\u6539\u53D8\u8BE5\u6587\u4EF6\u7684\u4F4D\u7F6E\u3002</p><p>\u4E3B\u8FDB\u7A0B\u53EF\u4EE5\u5904\u7406\u4EE5\u4E0B\u7684\u4FE1\u53F7\uFF1A</p><table><thead><tr><th>\u4FE1\u53F7\u91CF</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>TERM, INT</td><td>\u5FEB\u901F\u5173\u95ED</td></tr><tr><td>QUIT</td><td>\u4ECE\u5BB9\u5173\u95ED</td></tr><tr><td>HUP</td><td>\u91CD\u8F7D\u914D\u7F6E</td></tr><tr><td>-</td><td>\u7528\u65B0\u7684\u914D\u7F6E\u5F00\u59CB\u65B0\u7684\u5DE5\u4F5C\u8FDB\u7A0B</td></tr><tr><td>-</td><td>\u4ECE\u5BB9\u5173\u95ED\u65E7\u7684\u5DE5\u4F5C\u8FDB\u7A0B</td></tr><tr><td>USR1</td><td>\u91CD\u65B0\u6253\u5F00\u65E5\u5FD7\u6587\u4EF6</td></tr><tr><td>USR2</td><td>\u5E73\u6ED1\u5347\u7EA7\u53EF\u6267\u884C\u7A0B\u5E8F\u3002</td></tr><tr><td>WINCH</td><td>\u4ECE\u5BB9\u5173\u95ED\u5DE5\u4F5C\u8FDB\u7A0B</td></tr></tbody></table><h4 id="nginx-\u542F\u52A8\u3001\u505C\u6B62\u3001\u91CD\u542F\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#nginx-\u542F\u52A8\u3001\u505C\u6B62\u3001\u91CD\u542F\u547D\u4EE4" aria-hidden="true">#</a> Nginx \u542F\u52A8\u3001\u505C\u6B62\u3001\u91CD\u542F\u547D\u4EE4</h4><p><em><strong>Nginx \u542F\u52A8</strong></em></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># nginx\u4E8C\u8FDB\u5236\u6587\u4EF6\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u5B89\u88C5\u8DEF\u5F84\u5B9E\u9645\u51B3\u5B9A</span>
<span class="token function">sudo</span> /usr/local/nginx/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>nginx\u4ECE\u5BB9\u505C\u6B62\u547D\u4EE4\uFF0C\u7B49\u6240\u6709\u8BF7\u6C42\u7ED3\u675F\u540E\u5173\u95ED\u670D\u52A1</strong></em></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> -ef <span class="token operator">|</span><span class="token function">grep</span> nginx
<span class="token function">kill</span> -QUIT  nginx\u4E3B\u8FDB\u7A0B\u53F7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>nginx \u5FEB\u901F\u505C\u6B62\u547D\u4EE4\uFF0C\u7ACB\u523B\u5173\u95EDnginx\u8FDB\u7A0B</strong></em></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ps</span> -ef <span class="token operator">|</span><span class="token function">grep</span> nginx
<span class="token function">kill</span> -<span class="token environment constant">TERM</span> nginx\u4E3B\u8FDB\u7A0B\u53F7
<span class="token comment"># \u5982\u679C\u4EE5\u4E0A\u547D\u4EE4\u4E0D\u7BA1\u7528\uFF0C\u53EF\u4EE5\u5F3A\u5236\u505C\u6B62</span>
<span class="token function">kill</span> -9 nginx\u4E3B\u8FDB\u7A0B\u53F7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u5ACC\u9EBB\u70E6\u53EF\u4EE5\u4E0D\u7528\u67E5\u770B\u8FDB\u7A0B\u53F7\uFF0C\u76F4\u63A5\u4F7F\u7528\u547D\u4EE4\u8FDB\u884C\u64CD\u4F5C \u5176\u4E2D/usr/local/nginx/nginx.pid \u4E3Anginx.conf\u4E2Dpid\u547D\u4EE4\u8BBE\u7F6E\u7684\u53C2\u6570\uFF0C\u7528\u6765\u5B58\u653Enginx\u4E3B\u8FDB\u7A0B\u53F7\u7684\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">kill</span> -\u4FE1\u53F7\u7C7B\u578B<span class="token punctuation">(</span>HUP<span class="token operator">|</span><span class="token environment constant">TERM</span><span class="token operator">|</span>QUIT<span class="token punctuation">)</span> <span class="token function">cat</span> /usr/local/nginx/nginx.pid
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F8B\u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">kill</span> -QUIT <span class="token variable"><span class="token variable">\`</span><span class="token function">cat</span> /usr/local/nginx/nginx.pid<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><em><strong>nginx\u91CD\u542F\u547D\u4EE4</strong></em></p><p>nginx\u91CD\u542F\u53EF\u4EE5\u5206\u6210\u51E0\u79CD\u7C7B\u578B</p><ul><li>\u7B80\u5355\u578B\uFF0C\u5148\u5173\u95ED\u8FDB\u7A0B\uFF0C\u4FEE\u6539\u4F60\u7684\u914D\u7F6E\u540E\uFF0C\u91CD\u542F\u8FDB\u7A0B\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">kill</span> -QUIT <span class="token function">cat</span> /usr/local/nginx/nginx.pid
<span class="token function">sudo</span> /usr/local/nginx/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u4E0D\u91CD\u542F\u8FDB\u7A0B\uFF0C\u4E0D\u4F1A\u505C\u6B62\u5904\u7406\u8BF7\u6C42</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u91CD\u8F7D\u4E4B\u524D\u52A1\u5FC5\u5148\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6\u6B63\u786E\u6027</span>
<span class="token function">sudo</span> /usr/local/nginx/nginx -t
<span class="token comment"># \u91CD\u8F7D\u914D\u7F6E</span>
<span class="token function">sudo</span> /usr/local/nginx/nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5E73\u6ED1\u66F4\u65B0nginx\u4E8C\u8FDB\u5236\uFF0C\u4E0D\u4F1A\u505C\u6B62\u5904\u7406\u8BF7\u6C42</li></ul><p>\u4F60\u53EF\u4EE5\u5728\u4E0D\u4E2D\u65AD\u670D\u52A1\u7684\u60C5\u51B5\u4E0B - \u65B0\u7684\u8BF7\u6C42\u4E5F\u4E0D\u4F1A\u4E22\u5931\uFF0C\u4F7F\u7528\u65B0\u7684 nginx \u53EF\u6267\u884C\u7A0B\u5E8F\u66FF\u6362\u65E7\u7684\uFF08\u5F53\u5347\u7EA7\u65B0\u7248\u672C\u6216\u6DFB\u52A0/\u5220\u9664\u670D\u52A1\u5668\u6A21\u5757\u65F6\uFF09\u3002</p><p>\u9996\u5148\uFF0C\u4F7F\u7528\u65B0\u7684\u53EF\u6267\u884C\u7A0B\u5E8F\u66FF\u6362\u65E7\u7684\uFF08\u6700\u597D\u505A\u597D\u5907\u4EFD\uFF09\uFF0C\u7136\u540E\uFF0C\u53D1\u9001 USR2 (kill -USR2 pid)\u4FE1\u53F7\u7ED9\u4E3B\u8FDB\u7A0B\u3002\u4E3B\u8FDB\u7A0B\u5C06\u91CD\u547D\u540D\u5B83\u7684 .pid \u6587\u4EF6\u4E3A .oldbin ( \u6BD4\u5982\uFF1A/usr/local/nginx/logs/nginx.pid.oldbin)\uFF0C\u7136\u540E\u6267\u884C\u65B0\u7684\u53EF\u6267\u884C\u7A0B\u5E8F\uFF0C\u4F9D\u6B21\u542F\u52A8\u65B0\u7684\u4E3B\u8FDB\u7A0B\u548C\u65B0\u7684\u5DE5\u4F5C\u8FDB\u7A0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  PID  PPID USER    %CPU   VSZ WCHAN  COMMAND
33126     1 root     0.0  1164 pause  nginx: master process /usr/local/nginx/sbin/nginx
33134 33126 nobody   0.0  1368 kqread nginx: worker process (nginx)
33135 33126 nobody   0.0  1380 kqread nginx: worker process (nginx)
33136 33126 nobody   0.0  1368 kqread nginx: worker process (nginx)
36264 33126 root     0.0  1148 pause  nginx: master process /usr/local/nginx/sbin/nginx
36265 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36266 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36267 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u8FD9\u65F6\uFF0C\u4E24\u4E2A nginx \u5B9E\u4F8B\u4F1A\u540C\u65F6\u8FD0\u884C\uFF0C\u4E00\u8D77\u5904\u7406\u8F93\u5165\u7684\u8BF7\u6C42\u3002\u8981\u9010\u6B65\u505C\u6B62\u65E7\u7684\u5B9E\u4F8B\uFF0C\u4F60\u5FC5\u987B\u53D1\u9001 WINCH \u4FE1\u53F7\u7ED9\u65E7\u7684\u4E3B\u8FDB\u7A0B\uFF0C\u7136\u540E\uFF0C\u5B83\u7684\u5DE5\u4F5C\u8FDB\u7A0B\u5C31\u5C06\u5F00\u59CB\u4ECE\u5BB9\u5173\u95ED\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  PID  PPID USER    %CPU   VSZ WCHAN  COMMAND
33126     1 root     0.0  1164 pause  nginx: master process /usr/local/nginx/sbin/nginx
33135 33126 nobody   0.0  1380 kqread nginx: worker process is shutting down (nginx)
36264 33126 root     0.0  1148 pause  nginx: master process /usr/local/nginx/sbin/nginx
36265 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36266 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36267 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u65E7\u7684\u5DE5\u4F5C\u8FDB\u7A0B\u5904\u7406\u4E86\u6240\u6709\u5DF2\u8FDE\u63A5\u7684\u8BF7\u6C42\u540E\u9000\u51FA\uFF0C\u5C31\u4EC5\u7531\u65B0\u7684\u5DE5\u4F5C\u8FDB\u7A0B\u6765\u5904\u7406\u8F93\u5165\u7684\u8BF7\u6C42\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  PID  PPID USER    %CPU   VSZ WCHAN  COMMAND
33126     1 root     0.0  1164 pause  nginx: master process /usr/local/nginx/sbin/nginx
36264 33126 root     0.0  1148 pause  nginx: master process /usr/local/nginx/sbin/nginx
36265 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36266 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36267 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u65F6\uFF0C\u56E0\u4E3A\u65E7\u7684\u670D\u52A1\u5668\u8FD8\u5C1A\u672A\u5173\u95ED\u5B83\u76D1\u542C\u7684\u5957\u63A5\u5B57\uFF0C\u6240\u4EE5\uFF0C\u901A\u8FC7\u4E0B\u9762\u7684\u51E0\u6B65\uFF0C\u4F60\u4ECD\u53EF\u4EE5\u6062\u590D\u65E7\u7684\u670D\u52A1\u5668\uFF1A</p><ul><li>\u53D1\u9001 HUP \u4FE1\u53F7\u7ED9\u65E7\u7684\u4E3B\u8FDB\u7A0B - \u5B83\u5C06\u5728\u4E0D\u91CD\u8F7D\u914D\u7F6E\u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\u542F\u52A8\u5B83\u7684\u5DE5\u4F5C\u8FDB\u7A0B</li><li>\u53D1\u9001 QUIT \u4FE1\u53F7\u7ED9\u65B0\u7684\u4E3B\u8FDB\u7A0B\uFF0C\u8981\u6C42\u5176\u4ECE\u5BB9\u5173\u95ED\u5176\u5DE5\u4F5C\u8FDB\u7A0B</li><li>\u53D1\u9001 TERM \u4FE1\u53F7\u7ED9\u65B0\u7684\u4E3B\u8FDB\u7A0B\uFF0C\u8FEB\u4F7F\u5176\u9000\u51FA</li><li>\u5982\u679C\u56E0\u4E3A\u67D0\u4E9B\u539F\u56E0\u65B0\u7684\u5DE5\u4F5C\u8FDB\u7A0B\u4E0D\u80FD\u9000\u51FA\uFF0C\u5411\u5176\u53D1\u9001 KILL \u4FE1\u53F7</li></ul><p>\u65B0\u7684\u4E3B\u8FDB\u7A0B\u9000\u51FA\u540E\uFF0C\u65E7\u7684\u4E3B\u8FDB\u7A0B\u4F1A\u7531\u79FB\u9664 .oldbin \u524D\u7F00\uFF0C\u6062\u590D\u4E3A\u5B83\u7684 .pid \u6587\u4EF6\uFF0C\u8FD9\u6837\uFF0C\u4E00\u5207\u5C31\u90FD\u6062\u590D\u5230\u5347\u7EA7\u4E4B\u524D\u4E86\u3002</p><p>\u5982\u679C\u5C1D\u8BD5\u5347\u7EA7\u6210\u529F\uFF0C\u800C\u4F60\u4E5F\u5E0C\u671B\u4FDD\u7559\u65B0\u7684\u670D\u52A1\u5668\u65F6\uFF0C\u53D1\u9001 QUIT \u4FE1\u53F7\u7ED9\u65E7\u7684\u4E3B\u8FDB\u7A0B\u4F7F\u5176\u9000\u51FA\u800C\u53EA\u7559\u4E0B\u65B0\u7684\u670D\u52A1\u5668\u8FD0\u884C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  PID  PPID USER    %CPU   VSZ WCHAN  COMMAND
36264     1 root     0.0  1148 pause  nginx: master process /usr/local/nginx/sbin/nginx
36265 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36266 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36267 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E-ssl-https" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-ssl-https" aria-hidden="true">#</a> \u914D\u7F6E SSL/HTTPS</h3><p>\u9996\u5148\uFF0C\u7533\u8BF7 SSL \u8BC1\u4E66\u4E0D\u5728\u6B64\u5904\u8D58\u8FF0\uFF0C\u6B64\u6587\u4E3B\u8981\u8BB2\u8FF0 Nginx \u7684\u914D\u7F6E\uFF0C\u6211\u4EEC\u9ED8\u8BA4\u4F60\u5DF2\u7ECF\u53D6\u5F97\u4E86 SSL \u8BC1\u4E66\uFF08crt\u8BC1\u4E66\u548CKey\uFF09\u3002</p><p>\u4FEE\u6539Nginx\u914D\u7F6E\u6587\u4EF6\uFF0Cexample_com.crt\u548Cexample_com.key\u5C31\u662FSSL\u8BC1\u4E66\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {  
    listen 80;
    listen [::]:80 ssl ipv6only=on; 
    listen 443 ssl;
    listen [::]:443 ssl ipv6only=on;
    server_name example.com;

    ssl on;
    ssl_certificate /etc/ssl/private/example_com.crt;
    ssl_certificate_key /etc/ssl/private/example_com.key;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u68C0\u6D4B\u914D\u7F6E\u6587\u4EF6\u6CA1\u95EE\u9898\u540E\u91CD\u65B0\u8BFB\u53D6 Nginx \u5373\u53EF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nginx -t <span class="token operator">&amp;&amp;</span> nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F46\u662F\u8FD9\u4E48\u505A\u5E76\u4E0D\u5B89\u5168\uFF0C\u9ED8\u8BA4\u662F SHA-1 \u5F62\u5F0F\uFF0C\u800C\u73B0\u5728\u4E3B\u6D41\u7684\u65B9\u6848\u5E94\u8BE5\u90FD\u907F\u514D SHA-1\uFF0C\u4E3A\u4E86\u786E\u4FDD\u66F4\u5F3A\u7684\u5B89\u5168\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u53D6\u8FEA\u83F2\uFF0D\u8D6B\u5C14\u66FC\u5BC6\u94A5\u4EA4\u6362</p><p>\u9996\u5148\uFF0C\u8FDB\u5165/etc/ssl/certs\u76EE\u5F55\u5E76\u751F\u6210\u4E00\u4E2Adhparam.pem</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/ssl/certs  
openssl dhparam -out dhparam.pem <span class="token number">2048</span> <span class="token comment"># \u5982\u679C\u4F60\u7684\u673A\u5668\u6027\u80FD\u8DB3\u591F\u5F3A\u5927\uFF0C\u53EF\u4EE5\u7528 4096 \u4F4D\u52A0\u5BC6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u751F\u6210\u5B8C\u6BD5\u540E\uFF0C\u5728 Nginx \u7684 SSL \u914D\u7F6E\u540E\u9762\u52A0\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ssl_prefer_server_ciphers on;
ssl_dhparam /etc/ssl/certs/dhparam.pem;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DHE+AES128:!ADH:!AECDH:!MD5;
keepalive_timeout 70;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\uFF0C\u5982\u679C\u662F\u5168\u7AD9 HTTPS \u5E76\u4E14\u4E0D\u8003\u8651 HTTP \u7684\u8BDD\uFF0C\u53EF\u4EE5\u52A0\u5165 HSTS \u544A\u8BC9\u4F60\u7684\u6D4F\u89C8\u5668\u672C\u7F51\u7AD9\u5168\u7AD9\u52A0\u5BC6\uFF0C\u5E76\u4E14\u5F3A\u5236\u7528 HTTPS \u8BBF\u95EE\u3002</p><p>\u8B66\u544A\uFF1A\u4E00\u65E6\u54CD\u5E94 HSTS\uFF0C\u540E\u7EED\u6D4F\u89C8\u5668\u5C06\u5F3A\u5236 https \u8BBF\u95EE\uFF0C\u5982\u679C\u9000\u56DE http \u6D4F\u89C8\u5668\u5C06\u65E0\u6CD5\u6253\u5F00\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>add_header Strict-Transport-Security max-age=63072000;
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\u4E5F\u53EF\u4EE5\u5355\u72EC\u5F00\u4E00\u4E2A Nginx \u914D\u7F6E\uFF0C\u628A HTTP \u7684\u8BBF\u95EE\u8BF7\u6C42\u90FD\u7528 301 \u8DF3\u8F6C\u5230 HTTPS</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {  
    listen 80;
    listen [::]:80 ssl ipv6only=on;
    server_name     example.com;
    return 301 https://example.com$request_uri;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u8BC1\u4E66\u94FE" tabindex="-1"><a class="header-anchor" href="#\u8BC1\u4E66\u94FE" aria-hidden="true">#</a> \u8BC1\u4E66\u94FE</h4><p>ssl\u8BC1\u4E66\u6709\u6839\u8BC1\u4E66\u76F4\u63A5\u7B7E\u53D1\uFF0C\u4E5F\u7528\u6839\u8BC1\u4E66\u7B7E\u53D1\u7684\u4E8C\u4E09\u7EA7\u8BC1\u4E66\u7B7E\u53D1\u8BC1\u4E66\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u7684\u8BC1\u4E66\u4E0D\u662F\u7531\u9876\u7EA7\u6839\u8BC1\u4E66\u76F4\u63A5\u7B7E\u53D1\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F60\u9700\u8981\u8865\u5168\u4E2D\u95F4\u7684\u4E8C\u4E09\u7EA7\u8BC1\u4E66\u548C\u6839\u8BC1\u4E66\u5230\u8BC1\u4E66\u94FE\u6587\u4EF6\u91CC\u3002\u987A\u5E8F\u662F\uFF1A\u4F60\u7684ssl\u8BC1\u4E66\uFF0B\u4E2D\u95F4\u8BC1\u4E66\uFF0B\u6839\u8BC1\u4E66\u3002</p><p>\u901A\u5E38\u6765\u8BF4\u6D4F\u89C8\u8D77\u4F1A\u5185\u7F6E\u9876\u7EA7\u77E5\u540D\u6839\u8BC1\u4E66\uFF0C\u5BF9\u4E8E\u4E2D\u95F4\u8BC1\u4E66\u53EF\u80FD\u4F1A\u4E0D\u5185\u7F6E\uFF0C\u4F8B\u5982\u5B89\u5353\u7AEF\u4F1A\u4E0D\u8BA4\u4E2D\u95F4\u8BC1\u4E66\u9881\u53D1\u7684ssl\u8BC1\u4E66\u8BC1\u4E66\uFF0C\u56E0\u4E3A\u5B89\u5353\u6CA1\u6709\u5185\u7F6E\u8FD9\u4E9B\u4E2D\u95F4\u8BC1\u4E66\uFF0C\u9700\u8981\u4F60\u628A\u8FD9\u4E9B\u8BC1\u4E66\u62FC\u63A5\u5230\u4E00\u4E2A\u8BC1\u4E66\u94FE\u6587\u4EF6\u4E2D\u53D1\u7ED9\u5BA2\u6237\u7AEF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> nginx.crt bundle.crt <span class="token operator">&gt;</span> nginx.chain.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728 Nginx \u914D\u7F6E\u91CC\u4F7F\u7528 nginx.chain.crt \u5373\u53EF\u89E3\u51B3\u4E0D\u8BC6\u522B\u8BC1\u4E66\u7684\u95EE\u9898\uFF0C\u8BC1\u4E66\u7684\u987A\u5E8F\u4E0D\u80FD\u53CD\u4E86\uFF0C\u53CD\u4E86\u4F1A\u62A5\u9519\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>SSL_CTX_use_PrivateKey_file(&quot; ... /www.example.com.key&quot;) failed
   (SSL: error:0B080074:x509 certificate routines:
    X509_check_private_key:key values mismatch)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u56E0\u4E3A nginx \u4E2D\u7684\u79C1\u94A5 key \u662F\u548C\u8BC1\u4E66\u94FE\u4E2D\u7684\u7B2C\u4E00\u4E2A\u8BC1\u4E66\u9A8C\u8BC1\uFF0C\u5982\u679C\u987A\u5E8F\u53CD\u4E86\uFF0C\u5C31\u53D8\u6210\u548Cbundle.crt\u914D\u5BF9\u3002</p><h4 id="tls-sni-\u591A\u8BC1\u4E66\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#tls-sni-\u591A\u8BC1\u4E66\u652F\u6301" aria-hidden="true">#</a> TLS SNI \u591A\u8BC1\u4E66\u652F\u6301</h4><p>\u5728\u4E00\u4E2A\u4E3B\u673A\uFF08IP\uFF09\u4E0A\u914D\u7F6E\u591A\u4E2A\u57DF\u540D\uFF0C\u4F7F\u7528\u865A\u62DF\u4E3B\u673A\uFF08virtual host\uFF09\u5C31\u53EF\u4EE5\u89E3\u51B3\u4E86\u3002\u4F46\u662F\u7533\u8BF7TLS\u8BC1\u4E66\u7684\u65F6\u5019\uFF0C\u662F\u7ED1\u5B9A\u4E86\u5177\u4F53\u7684\u57DF\u540D\u548CIP\u5730\u5740\u3002\u5EFA\u7ACBTLS\u8FDE\u63A5\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u5668\u8981\u4E0B\u53D1\u54EA\u4E2A\u8BC1\u4E66\u5462\uFF1F</p><p>\u7B49\u7B49\uFF0C\u8BC1\u4E66\u660E\u660E\u548C\u57DF\u540D\u7ED1\u5B9A\uFF0C\u90FD\u77E5\u9053\u4E86\u57DF\u540D\uFF0C\u4E3A\u4EC0\u4E48\u4F1A\u6709\u9009\u62E9\u9009\u62E9\u8BC1\u4E66\u7684\u95EE\u9898\uFF1F</p><p>\u90A3\u662F\u56E0\u4E3A\uFF0C\u57DF\u540D\u662Fhttp\u7684\u6982\u5FF5\u3002client\u548Cserver\u5148\u5EFA\u7ACB\u4E86tcp\u8FDE\u63A5\uFF0C\u518D\u7ECF\u8FC7TLS\u63E1\u624B\uFF0C\u624D\u80FD\u5B9E\u73B0https\u901A\u4FE1\u3002\u5728\u6700\u521D\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\uFF0C\u662F\u6CA1\u6709\u57DF\u540D\u7684\u6982\u5FF5\u7684\uFF01</p><p>\u4E3A\u4E86\u89E3\u51B3\u5355\u4E2A\u4E3B\u673A\u90E8\u7F72\u591A\u4E2ATLS\u8BC1\u4E66\u7684\u95EE\u9898\uFF0C\u5E26\u6765\u4E86TLS\u7684SNI\u6269\u5C55\u3002</p><p>nginx\u5F00\u542FTLS SNI \uFF0C\u53EA\u9700\u8981\u5728\u7F16\u8BD1\u65F6\u6253\u5F00--with-openssl\u7F16\u8BD1\u9009\u9879\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003nginx\u5B89\u88C5\u3002</p><p>\u68C0\u67E5nginx\u662F\u5426\u652F\u6301TLS SNI\uFF0C\u6267\u884C nginx -V</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># /usr/local/nginx/sbin/nginx -V</span>
nginx version: nginx/1.18.0
built by gcc <span class="token number">4.8</span>.5 <span class="token number">20150623</span> <span class="token punctuation">(</span>Red Hat <span class="token number">4.8</span>.5-39<span class="token punctuation">)</span> <span class="token punctuation">(</span>GCC<span class="token punctuation">)</span>
built with OpenSSL <span class="token number">1.1</span>.1g  <span class="token number">21</span> Apr <span class="token number">2020</span>
TLS SNI support enabled
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx-location-\u5339\u914D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#nginx-location-\u5339\u914D\u89C4\u5219" aria-hidden="true">#</a> Nginx location \u5339\u914D\u89C4\u5219</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>~      # \u6CE2\u6D6A\u7EBF\u6267\u884C\u6B63\u5219\u5339\u914D\uFF0C\u533A\u5206\u5927\u5C0F\u5199
~*     # \u6CE2\u6D6A\u7EBF\u5E26\u661F\u6267\u884C\u6B63\u5219\u5339\u914D\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199
^~     # ^~ \u666E\u901A\u5B57\u7B26\u5339\u914D\uFF0C\u5982\u679C\u8BE5\u9009\u9879\u5339\u914D\uFF0C\u53EA\u5339\u914D\u8BE5\u9009\u9879\uFF0C\u4E0D\u5339\u914D\u5176\u5B83 location \u9009\u9879\uFF0C\u4E00\u822C\u7528\u6765\u5339\u914D\u76EE\u5F55
=      # \u666E\u901A\u5B57\u7B26\u4E32\u7CBE\u786E\u5339\u914D
\u7A7A     # \u666E\u901A\u5B57\u7B26\u4E32\u5339\u914D\uFF0C\u4F8B\u5982 location /abc {}
@      # &quot;@&quot; \u5B9A\u4E49\u4E00\u4E2A\u547D\u540D\u7684 location\uFF0C\u4F7F\u7528\u5728\u5185\u90E8\u91CD\u5B9A\u5411\u65F6\uFF0C\u4F8B\u5982 error_page, try_files
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="location-\u5339\u914D\u7684\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#location-\u5339\u914D\u7684\u4F18\u5148\u7EA7" aria-hidden="true">#</a> location \u5339\u914D\u7684\u4F18\u5148\u7EA7</h4><p>\u4E0E location \u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u987A\u5E8F\u65E0\u5173<br> = \u7CBE\u786E\u5339\u914D\u4F1A\u7B2C\u4E00\u4E2A\u88AB\u5904\u7406\u3002\u5982\u679C\u53D1\u73B0\u7CBE\u786E\u5339\u914D\uFF0Cnginx \u505C\u6B62\u641C\u7D22\u5176\u4ED6\u5339\u914D\u3002<br> \u9664\u4E86\u7CBE\u786E\u5339\u914D\uFF0C\u7136\u540E\u6267\u884C\u666E\u901A\u5B57\u7B26\u5339\u914D(\u975E\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D)\uFF0C\u6309\u6700\u957F\u5339\u914D\u6267\u884C\uFF0C\u627E\u5230\u6700\u957F\u524D\u7F00\u5339\u914D\u7684 location\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F /abcde,\u90A3\u4E48 location /abc {} \u5373\u4F7F\u5339\u914D\u8FD8\u8981\u518D\u770B\u914D\u7F6E\u4E2D\u6709\u6CA1\u6709\u66F4\u957F\u7684\u5339\u914D\uFF0C\u6BD4\u5982<br> location /abcd {}\u3002\u627E\u5230\u8FD9\u4E2A\u6700\u957F\u5339\u914D\u4E4B\u540E\uFF0C\u5982\u679C\u4ED6\u5E26\u6709 ^~ \u524D\u7F00\uFF0C\u90A3\u4E48\u5C31\u4E0D\u518D\u7EE7\u7EED\u67E5\u627E\u3002<br> \u627E\u5230\u6700\u957F\u524D\u7F00\u5339\u914D\u540E\uFF0C\u6BD4\u5982\u627E\u5230\u4E86 location /abcd {}\uFF0C\u90A3\u4E48\u8FD8\u8981\u7EE7\u7EED\u770B\u6709\u6CA1\u6709\u5339\u914D\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u6309\u6B63\u5219\u8868\u8FBE\u5F0F\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u51FA\u73B0\u7684\u987A\u5E8F\u8FDB\u884C\u5339\u914D\uFF0C\u5982\u679C\u627E\u5230\u4E00\u4E2A\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u5219nginx\u505C\u6B62\u641C\u7D22\u5176\u4ED6\u5339\u914D\uFF0C\u6267\u884C\u8BE5\u5339\u914D location\u3002<br> \u5F53\u6CA1\u6709\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\u8005\u6CA1\u6709\u6B63\u5219\u8868\u8FBE\u5F0F\u88AB\u5339\u914D\u7684\u60C5\u51B5\u4E0B\uFF0C\u90A3\u4E48\u5339\u914D\u7A0B\u5EA6\u6700\u9AD8\u7684\u6700\u957F\u524D\u7F00\u5339\u914D location \u4F1A\u88AB\u4F7F\u7528\u3002</p><p>\u7B80\u5355\u6765\u8BF4 nginx \u7684 locatioin \u6309\u8FD9\u4E2A\u4F18\u5148\u7EA7\u89C4\u5219\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>= &gt; ^~ &gt; ~ = ~* &gt;\u6700\u957F\u524D\u7F00\u5339\u914D &gt; /
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="location\u5904\u7406\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#location\u5904\u7406\u903B\u8F91" aria-hidden="true">#</a> Location\u5904\u7406\u903B\u8F91</h4><ul><li>\u7528uri\u6D4B\u8BD5\u6240\u6709\u7684prefix string;</li><li>Uri\u7CBE\u786E\u5339\u914D\u5230=\u5B9A\u4E49\u7684loacation\uFF0C\u4F7F\u7528\u8FD9\u4E2Alocation\uFF0C\u505C\u6B62\u641C\u7D22\uFF1B</li><li>\u5339\u914D\u6700\u957Fprefix string\uFF0C\u5982\u679C\u8FD9\u4E2A\u6700\u957Fprefix string\u5E26\u6709^~\u4FEE\u9970\u7B26\uFF0C\u4F7F\u7528\u8FD9\u4E2Alocation\uFF0C\u505C\u6B62\u641C\u7D22\uFF0C\u5426\u5219\uFF1A</li><li>\u5B58\u50A8\u8FD9\u4E2A\u6700\u957F\u5339\u914D\uFF1B</li><li>\u7136\u540E\u5339\u914D\u6B63\u5219\u8868\u8FBE\uFF1B</li><li>\u5339\u914D\u5230\u7B2C\u4E00\u6761\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u4F7F\u7528\u8FD9\u4E2Alocation\uFF0C\u505C\u6B62\u641C\u7D22\uFF1B</li><li>\u6CA1\u6709\u5339\u914D\u5230\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u4F7F\u7528#4\u6B65\u5B58\u50A8\u7684prefix string\u7684location\u3002</li></ul><h4 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location  = / {
  # \u53EA\u5339\u914D&quot;/&quot;.
  [ configuration A ] 
}
location  / {
  # \u5339\u914D\u4EFB\u4F55\u8BF7\u6C42\uFF0C\u56E0\u4E3A\u6240\u6709\u8BF7\u6C42\u90FD\u662F\u4EE5&quot;/&quot;\u5F00\u59CB
  # \u4F46\u662F\u66F4\u957F\u5B57\u7B26\u5339\u914D\u6216\u8005\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u4F1A\u4F18\u5148\u5339\u914D
  [ configuration B ] 
}
location ^~ /images/ {
  # \u5339\u914D\u4EFB\u4F55\u4EE5 /images/ \u5F00\u59CB\u7684\u8BF7\u6C42\uFF0C\u5E76\u505C\u6B62\u5339\u914D \u5176\u5B83location
  [ configuration C ] 
}
location ~* .(gif|jpg|jpeg)$ {
  # \u5339\u914D\u4EE5 gif, jpg, or jpeg\u7ED3\u5C3E\u7684\u8BF7\u6C42. 
  # \u4F46\u662F\u6240\u6709 /images/ \u76EE\u5F55\u7684\u8BF7\u6C42\u5C06\u7531 [Configuration C]\u5904\u7406.   
  [ configuration D ] 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF7\u6C42URI\u4F8B\u5B50:</p><ul><li>/ -&gt; \u7B26\u5408configuration A</li><li>/documents/document.html -&gt; \u7B26\u5408configuration B</li><li>/images/1.gif -&gt; \u7B26\u5408configuration C</li><li>/documents/1.jpg -&gt;\u7B26\u5408 configuration D</li></ul><h3 id="nginx-\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx-\u8D1F\u8F7D\u5747\u8861\u914D\u7F6E" aria-hidden="true">#</a> Nginx \u8D1F\u8F7D\u5747\u8861\u914D\u7F6E</h3><p>\u4F7F\u7528\u8D1F\u8F7D\u5747\u8861\u7684\u8BDD,\u53EF\u4EE5\u4FEE\u6539\u914D\u7F6Ehttp\u8282\u70B9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u8BBE\u5B9Ahttp\u670D\u52A1\u5668\uFF0C\u5229\u7528\u5B83\u7684\u53CD\u5411\u4EE3\u7406\u529F\u80FD\u63D0\u4F9B\u8D1F\u8F7D\u5747\u8861\u652F\u6301
http {

    #\u8BBE\u5B9Amime\u7C7B\u578B,\u7C7B\u578B\u7531mime.type\u6587\u4EF6\u5B9A\u4E49
    include             /etc/nginx/mime.types;
    default_type    application/octet-stream;

    #\u8BBE\u5B9A\u65E5\u5FD7\u683C\u5F0F
    access_log        /var/log/nginx/access.log;

    #\u7701\u7565\u4E0A\u6587\u6709\u7684\u4E00\u4E9B\u914D\u7F6E\u8282\u70B9
    #\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002\u3002

    #\u8BBE\u5B9A\u8D1F\u8F7D\u5747\u8861\u7684\u670D\u52A1\u5668\u5217\u8868
    upstream mysvr {
        #weigth\u53C2\u6570\u8868\u793A\u6743\u503C\uFF0C\u6743\u503C\u8D8A\u9AD8\u88AB\u5206\u914D\u5230\u7684\u51E0\u7387\u8D8A\u5927
        server 192.168.8.1x:3128 weight=5;
        #\u672C\u673A\u4E0A\u7684Squid\u5F00\u542F3128\u7AEF\u53E3,\u4E0D\u662F\u5FC5\u987B\u8981squid
        server 192.168.8.2x:80    weight=1;
        server 192.168.8.3x:80    weight=6;
    }
        
    upstream mysvr2 {
        #weigth\u53C2\u6570\u8868\u793A\u6743\u503C\uFF0C\u6743\u503C\u8D8A\u9AD8\u88AB\u5206\u914D\u5230\u7684\u51E0\u7387\u8D8A\u5927
        server 192.168.8.x:80    weight=1;
        server 192.168.8.x:80    weight=6;
    }

    #\u7B2C\u4E00\u4E2A\u865A\u62DF\u670D\u52A1\u5668
    server {
        #\u4FA6\u542C192.168.8.x\u768480\u7AEF\u53E3
        listen             80;
        server_name    192.168.8.x;

        #\u5BF9aspx\u540E\u7F00\u7684\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861\u8BF7\u6C42
        location ~ .*.aspx$ {
            #\u5B9A\u4E49\u670D\u52A1\u5668\u7684\u9ED8\u8BA4\u7F51\u7AD9\u6839\u76EE\u5F55\u4F4D\u7F6E
            root     /root; 
            #\u5B9A\u4E49\u9996\u9875\u7D22\u5F15\u6587\u4EF6\u7684\u540D\u79F0
            index index.php index.html index.htm;
            
            #\u8BF7\u6C42\u8F6C\u5411mysvr \u5B9A\u4E49\u7684\u670D\u52A1\u5668\u5217\u8868
            proxy_pass    http://mysvr ;

            #\u4EE5\u4E0B\u662F\u4E00\u4E9B\u53CD\u5411\u4EE3\u7406\u7684\u914D\u7F6E\u53EF\u5220\u9664.

            proxy_redirect off;

            #\u540E\u7AEF\u7684Web\u670D\u52A1\u5668\u53EF\u4EE5\u901A\u8FC7X-Forwarded-For\u83B7\u53D6\u7528\u6237\u771F\u5B9EIP
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            #\u5141\u8BB8\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5355\u6587\u4EF6\u5B57\u8282\u6570
            client_max_body_size 10m; 

            #\u7F13\u51B2\u533A\u4EE3\u7406\u7F13\u51B2\u7528\u6237\u7AEF\u8BF7\u6C42\u7684\u6700\u5927\u5B57\u8282\u6570\uFF0C
            client_body_buffer_size 128k;

            #nginx\u8DDF\u540E\u7AEF\u670D\u52A1\u5668\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4(\u4EE3\u7406\u8FDE\u63A5\u8D85\u65F6)
            proxy_connect_timeout 90;

            #\u8FDE\u63A5\u6210\u529F\u540E\uFF0C\u540E\u7AEF\u670D\u52A1\u5668\u54CD\u5E94\u65F6\u95F4(\u4EE3\u7406\u63A5\u6536\u8D85\u65F6)
            proxy_read_timeout 90;

            #\u8BBE\u7F6E\u4EE3\u7406\u670D\u52A1\u5668\uFF08nginx\uFF09\u4FDD\u5B58\u7528\u6237\u5934\u4FE1\u606F\u7684\u7F13\u51B2\u533A\u5927\u5C0F
            proxy_buffer_size 4k;

            #proxy_buffers\u7F13\u51B2\u533A\uFF0C\u7F51\u9875\u5E73\u5747\u572832k\u4EE5\u4E0B\u7684\u8BDD\uFF0C\u8FD9\u6837\u8BBE\u7F6E
            proxy_buffers 4 32k;

            #\u9AD8\u8D1F\u8377\u4E0B\u7F13\u51B2\u5927\u5C0F\uFF08proxy_buffers*2\uFF09
            proxy_busy_buffers_size 64k; 

            #\u8BBE\u5B9A\u7F13\u5B58\u6587\u4EF6\u5939\u5927\u5C0F\uFF0C\u5927\u4E8E\u8FD9\u4E2A\u503C\uFF0C\u5C06\u4ECEupstream\u670D\u52A1\u5668\u4F20
            proxy_temp_file_write_size 64k;    

        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u534F\u8BAE\u8DDF\u968F" tabindex="-1"><a class="header-anchor" href="#\u534F\u8BAE\u8DDF\u968F" aria-hidden="true">#</a> \u534F\u8BAE\u8DDF\u968F</h3><p>\u8FD9\u6761\u5185\u5BB9\u662F\u5728\u8FD9\u6837\u7684\u573A\u666F\u4E0B\u4EA7\u751F\u7684\uFF1A</p><ul><li>Nginx \u914D\u7F6E\u4E86 SSL \u8BC1\u4E66\u76D1\u542C 443 \u7AEF\u53E3\u7684 https \u534F\u8BAE\uFF0C80 \u7AEF\u53E3\u6CA1\u6709\u5F00\u3002</li><li>\u540E\u65B9\u662F Tomcat \u6CA1\u6709\u914D\u7F6E SSL \u662F http \u534F\u8BAE\u3002</li><li>Nginx \u53CD\u4EE3 Tomcat \u8BA9\u7A0B\u5E8F\u6210\u4E3A https \u7684\u5730\u5740\u3002</li><li>Tomcat \u91CD\u5B9A\u5411\uFF0C\u4F46\u8FD4\u56DE\u7684\u54CD\u5E94\u5934\u4E2D\u662F http \u534F\u8BAE\uFF0C\u5BFC\u81F4\u8DF3\u8F6C\u540E\u65E0\u54CD\u5E94\u3002</li></ul><p>\u6839\u636E\u4E0A\u9762\u7684\u573A\u666F\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u534F\u8BAE\u8DDF\u968F\uFF0C\u8BA9\u540E\u9762\u7684 Tomcat \u77E5\u9053\u6211\u4EEC\u524D\u9762\u5BA2\u6237\u7AEF\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u6240\u4EE5\u5C31\u9700\u8981\u6DFB\u52A0 <code>X-Forwarded-Proto</code> \u5934\u3002</p><h4 id="nginx\u589E\u52A0\u534F\u8BAE\u5934\u8F6C\u53D1\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx\u589E\u52A0\u534F\u8BAE\u5934\u8F6C\u53D1\u914D\u7F6E" aria-hidden="true">#</a> Nginx\u589E\u52A0\u534F\u8BAE\u5934\u8F6C\u53D1\u914D\u7F6E</h4><p>\u6211\u4EEC\u7F16\u8F91 Nginx \u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5728\u53CD\u5411\u4EE3\u7406\u914D\u7F6E\u4E2D\u589E\u52A0 <code>proxy_set_header X-Forwarded-Proto $scheme;</code> \u914D\u7F6E\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location / {
  proxy_pass         http://localhost:8080;
  proxy_set_header   X-Forwarded-Proto $scheme;
  proxy_set_header   Host              $host;
  proxy_set_header   X-Real-IP         $remote_addr;
  proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="tomcat-\u914D\u7F6E\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#tomcat-\u914D\u7F6E\u4FEE\u6539" aria-hidden="true">#</a> Tomcat \u914D\u7F6E\u4FEE\u6539</h4><p>\u4FEE\u6539 Tomcat \u7684\u914D\u7F6E\u6587\u4EF6 server.xml \u7684 Engine \u6A21\u5757\u4E0B\u914D\u7F6E\u4E00\u4E2A Valve\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Valve</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.apache.catalina.valves.RemoteIpValve<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">remoteIpHeader</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-Forwarded-For<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">protocolHeader</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-Forwarded-Proto<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">protocolHeaderHttpsValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,101),f=e("\u5982\u679C\u60A8\u60F3\u4E86\u89E3\u66F4\u591A Tomcat \u7684\u914D\u7F6E\u77E5\u8BC6\uFF0C\u8BF7\u53C2\u8003\uFF1A"),w={href:"https://tomcat.apache.org/tomcat-8.0-doc/config/valve.html#Remote_IP_Valve",target:"_blank",rel:"noopener noreferrer"},y=e("https://tomcat.apache.org/tomcat-8.0-doc/config/valve.html#Remote_IP_Valve");function S(q,T){const a=l("CodeGroupItem"),d=l("CodeGroup"),c=l("ExternalLinkIcon");return o(),u("div",null,[m,i(d,null,{default:s(()=>[i(a,{title:"CentOS",active:""},{default:s(()=>[p]),_:1}),i(a,{title:"Ubuntu",active:""},{default:s(()=>[b]),_:1})]),_:1}),g,x,i(d,null,{default:s(()=>[i(a,{title:"CentOS",active:""},{default:s(()=>[h]),_:1}),i(a,{title:"Ubuntu",active:""},{default:s(()=>[k]),_:1})]),_:1}),_,n("p",null,[f,n("a",w,[y,i(c)])])])}var P=t(v,[["render",S],["__file","nginx.html.vue"]]);export{P as default};
