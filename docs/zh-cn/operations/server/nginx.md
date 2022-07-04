---
lang: zh-CN
title: Nginx操作手册
description: Nginx操作手册
---

# Nginx操作手册

Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器。

## 安装 Nginx

### 二进制包安装

为了方便快速的安装软件，我们可以使用编译好的二进制软件包直接通过包管理器安装软件。

<CodeGroup>
  <CodeGroupItem title="CentOS" active>

```shell
# 更新
sudo yum update

# 安装
sudo yum install nginx
```

  </CodeGroupItem>
  <CodeGroupItem title="Ubuntu" active>

```shell
# 更新
sudo apt update

# 安装
sudo apt install nginx

# 查看运行状态
sudo systemctl status nginx
```

  </CodeGroupItem>
</CodeGroup>

### 源码编译安装

源码编译安装的好处是你需要什么模块就可以定制化编译出你需要的模块，所以很多时候我们也需要源码编译安装。

<CodeGroup>
  <CodeGroupItem title="CentOS" active>

```shell
# 安装依赖的环境
sudo yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel

# 下载 Nginx 源码 tar 包
wget http://nginx.org/download/nginx-1.22.0.tar.gz

# 解压源码包
tar -xvf nginx-1.22.0.tar.gz

# 进入源码
cd nginx-1.22.0

# 配置（如果需要定制化编译，在此处传参数开启相关模块，下方有参数说明）
sudo ./configure

# make
sudo make

# make install
sudo make install

# 打开配置文件
vi /usr/local/nginx/conf/nginx.conf

# 启动Nginx
/usr/local/nginx/sbin/nginx
```

  </CodeGroupItem>
  <CodeGroupItem title="Ubuntu" active>

```shell
# 更新
sudo apt-get update
# 安装依赖：gcc、g++依赖库
sudo apt-get install build-essential libtool
# 安装 pcre依赖库（http://www.pcre.org/）
sudo apt-get install libpcre3 libpcre3-dev
# 安装 zlib依赖库（http://www.zlib.net）
sudo apt-get install zlib1g-dev
# 安装ssl依赖库
sudo apt-get install openssl

# 下载 Nginx 源码 tar 包
wget http://nginx.org/download/nginx-1.22.0.tar.gz

# 解压源码包
tar -xvf nginx-1.22.0.tar.gz

# 进入源码
cd nginx-1.22.0

# 配置（如果需要定制化编译，在此处传参数开启相关模块，下方有参数说明）
sudo ./configure

# make
sudo make

# make install
sudo make install
```

  </CodeGroupItem>
</CodeGroup>

#### configure 编译参数说明

configure命令是用来检测你的安装平台的目标特征的。它定义了系统的各个方面，包括nginx的被允许使用的连接处理的方法，比如它会检测你是不是有CC或GCC，并不是需要CC或GCC，它是个shell脚本，执行结束时，它会创建一个Makefile文件。nginx的configure命令支持以下参数：

由于参数众多，此处折叠，请点击展开查看：

<details>
<summary>点此展开查看详情</summary>

* --prefix=path    定义一个目录，存放服务器上的文件 ，也就是nginx的安装目录。默认使用 /usr/local/nginx。
* --sbin-path=path 设置nginx的可执行文件的路径，默认为  prefix/sbin/nginx.
* --conf-path=path  设置在nginx.conf配置文件的路径。nginx允许使用不同的配置文件启动，通过命令行中的-c选项。默认为prefix/conf/nginx.conf.
* --pid-path=path  设置nginx.pid文件，将存储的主进程的进程号。安装完成后，可以随时改变的文件名 ， 在nginx.conf配置文件中使用 PID指令。默认情况下，文件名 为prefix/logs/nginx.pid.
* --error-log-path=path 设置主错误，警告，和诊断文件的名称。安装完成后，可以随时改变的文件名 ，在nginx.conf配置文件中 使用 的error_log指令。默认情况下，文件名 为prefix/logs/error.log.
* --http-log-path=path  设置主请求的HTTP服务器的日志文件的名称。安装完成后，可以随时改变的文件名 ，在nginx.conf配置文件中 使用 的access_log指令。默认情况下，文件名 为prefix/logs/access.log.
* --user=name  设置nginx工作进程的用户。安装完成后，可以随时更改的名称在nginx.conf配置文件中 使用的 user指令。默认的用户名是nobody。
* --group=name  设置nginx工作进程的用户组。安装完成后，可以随时更改的名称在nginx.conf配置文件中 使用的 user指令。默认的为非特权用户。
* --with-select_module --without-select_module 启用或禁用构建一个模块来允许服务器使用select()方法。该模块将自动建立，如果平台不支持的kqueue，epoll，rtsig或/dev/poll。
* --with-poll_module --without-poll_module 启用或禁用构建一个模块来允许服务器使用poll()方法。该模块将自动建立，如果平台不支持的kqueue，epoll，rtsig或/dev/poll。
* --without-http_gzip_module — 不编译压缩的HTTP服务器的响应模块。编译并运行此模块需要zlib库。
* --without-http_rewrite_module  不编译重写模块。编译并运行此模块需要PCRE库支持。
* --without-http_proxy_module — 不编译http_proxy模块。
* --with-http_ssl_module — 使用https协议模块。默认情况下，该模块没有被构建。建立并运行此模块的OpenSSL库是必需的。
* --with-pcre=path — 设置PCRE库的源码路径。PCRE库的源码（版本4.4 - 8.30）需要从PCRE网站下载并解压。其余的工作是Nginx的./ configure和make来完成。正则表达式使用在location指令和 ngx_http_rewrite_module 模块中。
* --with-pcre-jit —编译PCRE包含“just-in-time compilation”（1.1.12中， pcre_jit指令）。
* --with-zlib=path —设置的zlib库的源码路径。要下载从 zlib（版本1.1.3 - 1.2.5）的并解压。其余的工作是Nginx的./ configure和make完成。ngx_http_gzip_module模块需要使用zlib 。
* --with-cc-opt=parameters — 设置额外的参数将被添加到CFLAGS变量。例如,当你在FreeBSD上使用PCRE库时需要使用:--with-cc-opt="-I /usr/local/include。.如需要需要增加 select()支持的文件数量:--with-cc-opt="-D FD_SETSIZE=2048".
* --with-ld-opt=parameters —设置附加的参数，将用于在链接期间。例如，当在FreeBSD下使用该系统的PCRE库,应指定:--with-ld-opt="-L /usr/local/lib".

</details>

## 配置 Nginx

配置文件说明

```text
#运行用户
user nobody;
#启动进程,通常设置成和cpu的数量相等
worker_processes  1;

#全局错误日志及PID文件
#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;

#工作模式及连接数上限
events {
    #epoll是多路复用IO(I/O Multiplexing)中的一种方式,
    #仅用于linux2.6以上内核,可以大大提高nginx的性能
    use   epoll; 

    #单个后台worker process进程的最大并发链接数    
    worker_connections  1024;

    # 并发总数是 worker_processes 和 worker_connections 的乘积
    # 即 max_clients = worker_processes * worker_connections
    # 在设置了反向代理的情况下，max_clients = worker_processes * worker_connections / 4  为什么
    # 为什么上面反向代理要除以4，应该说是一个经验值
    # 根据以上条件，正常情况下的Nginx Server可以应付的最大连接数为：4 * 8000 = 32000
    # worker_connections 值的设置跟物理内存大小有关
    # 因为并发受IO约束，max_clients的值须小于系统可以打开的最大文件数
    # 而系统可以打开的最大文件数和内存大小成正比，一般1GB内存的机器上可以打开的文件数大约是10万左右
    # 我们来看看360M内存的VPS可以打开的文件句柄数是多少：
    # $ cat /proc/sys/fs/file-max
    # 输出 34336
    # 32000 < 34336，即并发连接总数小于系统可以打开的文件句柄总数，这样就在操作系统可以承受的范围之内
    # 所以，worker_connections 的值需根据 worker_processes 进程数目和系统可以打开的最大文件总数进行适当地进行设置
    # 使得并发总数小于操作系统可以打开的最大文件数目
    # 其实质也就是根据主机的物理CPU和内存进行配置
    # 当然，理论上的并发总数可能会和实际有所偏差，因为主机还有其他的工作进程需要消耗系统资源。
    # ulimit -SHn 65535

}


http {
    #设定mime类型,类型由mime.type文件定义
    include    mime.types;
    default_type  application/octet-stream;
    #设定日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  logs/access.log  main;

    #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，
    #对于普通应用，必须设为 on,
    #如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，
    #以平衡磁盘与网络I/O处理速度，降低系统的uptime.
    sendfile     on;
    #tcp_nopush     on;

    #连接超时时间
    #keepalive_timeout  0;
    keepalive_timeout  65;
    tcp_nodelay     on;

    #开启gzip压缩
    gzip  on;
    gzip_disable "MSIE [1-6].";

    #设定请求缓冲
    client_header_buffer_size    128k;
    large_client_header_buffers  4 128k;


    #设定虚拟主机配置
    server {
        #侦听80端口
        listen    80;
        #定义使用 www.nginx.cn访问
        server_name  www.nginx.cn;

        #定义服务器的默认网站根目录位置
        root html;

        #设定本虚拟主机的访问日志
        access_log  logs/nginx.access.log  main;

        #默认请求
        location / {
            
            #定义首页索引文件的名称
            index index.php index.html index.htm;   

        }

        # 定义错误提示页面
        error_page   500 502 503 504 /50x.html;
        location = /50x.html {
        }

        #静态文件，nginx自己处理
        location ~ ^/(images|javascript|js|css|flash|media|static)/ {
            
            #过期30天，静态文件不怎么更新，过期可以设大一点，
            #如果频繁更新，则可以设置得小一点。
            expires 30d;
        }

        #PHP 脚本请求全部转发到 FastCGI处理. 使用FastCGI默认配置.
        location ~ .php$ {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            include fastcgi_params;
        }

        #禁止访问 .htxxx 文件
            location ~ /.ht {
            deny all;
        }

    }
}
```

### 运行和控制 Nginx

#### Nginx 命令参数

不像许多其他软件系统，Nginx 仅有几个命令行参数，完全通过配置文件来配置

* -c </path/to/config> 为 Nginx 指定一个配置文件，来代替缺省的。
* -t 不运行，而仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。
* -v 显示 nginx 的版本。
* -V 显示 nginx 的版本，编译器版本和配置参数。

# Nginx 控制信号

可以使用信号系统来控制主进程。默认，nginx 将其主进程的 pid 写入到 /usr/local/nginx/nginx.pid 文件中。通过传递参数给 ./configure 或使用 pid 指令，来改变该文件的位置。

主进程可以处理以下的信号：

| 信号量       | 说明            |
|-----------|---------------|
| TERM, INT | 快速关闭          |
| QUIT      | 从容关闭          |
| HUP       | 重载配置          |
| -         | 用新的配置开始新的工作进程 |
| -         | 从容关闭旧的工作进程    |
| USR1      | 重新打开日志文件      |
| USR2      | 平滑升级可执行程序。    |
| WINCH     | 从容关闭工作进程      |

#### Nginx 启动、停止、重启命令

***Nginx 启动***

```shell
# nginx二进制文件绝对路径，可以根据自己安装路径实际决定
sudo /usr/local/nginx/nginx
```

***nginx从容停止命令，等所有请求结束后关闭服务***

```shell
ps -ef |grep nginx
kill -QUIT  nginx主进程号
````

***nginx 快速停止命令，立刻关闭nginx进程***

```shell
ps -ef |grep nginx
kill -TERM nginx主进程号
# 如果以上命令不管用，可以强制停止
kill -9 nginx主进程号
```

如果嫌麻烦可以不用查看进程号，直接使用命令进行操作
其中/usr/local/nginx/nginx.pid 为nginx.conf中pid命令设置的参数，用来存放nginx主进程号的文件

```shell
kill -信号类型(HUP|TERM|QUIT) cat /usr/local/nginx/nginx.pid
```

例如

```shell
kill -QUIT `cat /usr/local/nginx/nginx.pid`
```

***nginx重启命令***

nginx重启可以分成几种类型

* 简单型，先关闭进程，修改你的配置后，重启进程。

```shell
kill -QUIT cat /usr/local/nginx/nginx.pid
sudo /usr/local/nginx/nginx
```

* 重新加载配置文件，不重启进程，不会停止处理请求

```shell
# 重载之前务必先测试配置文件正确性
sudo /usr/local/nginx/nginx -t
# 重载配置
sudo /usr/local/nginx/nginx -s reload
```

* 平滑更新nginx二进制，不会停止处理请求

你可以在不中断服务的情况下 - 新的请求也不会丢失，使用新的 nginx 可执行程序替换旧的（当升级新版本或添加/删除服务器模块时）。

首先，使用新的可执行程序替换旧的（最好做好备份），然后，发送 USR2 (kill -USR2 pid)信号给主进程。主进程将重命名它的 .pid 文件为 .oldbin (
比如：/usr/local/nginx/logs/nginx.pid.oldbin)，然后执行新的可执行程序，依次启动新的主进程和新的工作进程：

```text
  PID  PPID USER    %CPU   VSZ WCHAN  COMMAND
33126     1 root     0.0  1164 pause  nginx: master process /usr/local/nginx/sbin/nginx
33134 33126 nobody   0.0  1368 kqread nginx: worker process (nginx)
33135 33126 nobody   0.0  1380 kqread nginx: worker process (nginx)
33136 33126 nobody   0.0  1368 kqread nginx: worker process (nginx)
36264 33126 root     0.0  1148 pause  nginx: master process /usr/local/nginx/sbin/nginx
36265 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36266 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36267 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
```

在这时，两个 nginx 实例会同时运行，一起处理输入的请求。要逐步停止旧的实例，你必须发送 WINCH 信号给旧的主进程，然后，它的工作进程就将开始从容关闭：

```text
  PID  PPID USER    %CPU   VSZ WCHAN  COMMAND
33126     1 root     0.0  1164 pause  nginx: master process /usr/local/nginx/sbin/nginx
33135 33126 nobody   0.0  1380 kqread nginx: worker process is shutting down (nginx)
36264 33126 root     0.0  1148 pause  nginx: master process /usr/local/nginx/sbin/nginx
36265 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36266 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36267 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
```

一段时间后，旧的工作进程处理了所有已连接的请求后退出，就仅由新的工作进程来处理输入的请求了：

```text
  PID  PPID USER    %CPU   VSZ WCHAN  COMMAND
33126     1 root     0.0  1164 pause  nginx: master process /usr/local/nginx/sbin/nginx
36264 33126 root     0.0  1148 pause  nginx: master process /usr/local/nginx/sbin/nginx
36265 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36266 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36267 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
```

这时，因为旧的服务器还尚未关闭它监听的套接字，所以，通过下面的几步，你仍可以恢复旧的服务器：

* 发送 HUP 信号给旧的主进程 - 它将在不重载配置文件的情况下启动它的工作进程
* 发送 QUIT 信号给新的主进程，要求其从容关闭其工作进程
* 发送 TERM 信号给新的主进程，迫使其退出
* 如果因为某些原因新的工作进程不能退出，向其发送 KILL 信号

新的主进程退出后，旧的主进程会由移除 .oldbin 前缀，恢复为它的 .pid 文件，这样，一切就都恢复到升级之前了。

如果尝试升级成功，而你也希望保留新的服务器时，发送 QUIT 信号给旧的主进程使其退出而只留下新的服务器运行：

```text
  PID  PPID USER    %CPU   VSZ WCHAN  COMMAND
36264     1 root     0.0  1148 pause  nginx: master process /usr/local/nginx/sbin/nginx
36265 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36266 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
36267 36264 nobody   0.0  1364 kqread nginx: worker process (nginx)
```

### 配置 SSL/HTTPS

首先，申请 SSL 证书不在此处赘述，此文主要讲述 Nginx 的配置，我们默认你已经取得了 SSL 证书（crt证书和Key）。

修改Nginx配置文件，example_com.crt和example_com.key就是SSL证书：

```text
server {  
    listen 80;
    listen [::]:80 ssl ipv6only=on; 
    listen 443 ssl;
    listen [::]:443 ssl ipv6only=on;
    server_name example.com;

    ssl on;
    ssl_certificate /etc/ssl/private/example_com.crt;
    ssl_certificate_key /etc/ssl/private/example_com.key;
}
```

检测配置文件没问题后重新读取 Nginx 即可

```shell
nginx -t && nginx -s reload
```

但是这么做并不安全，默认是 SHA-1 形式，而现在主流的方案应该都避免 SHA-1，为了确保更强的安全性，我们可以采取迪菲－赫尔曼密钥交换

首先，进入/etc/ssl/certs目录并生成一个dhparam.pem

```shell
cd /etc/ssl/certs  
openssl dhparam -out dhparam.pem 2048 # 如果你的机器性能足够强大，可以用 4096 位加密
```

生成完毕后，在 Nginx 的 SSL 配置后面加入

```text
ssl_prefer_server_ciphers on;
ssl_dhparam /etc/ssl/certs/dhparam.pem;
ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
ssl_ciphers ECDH+AESGCM:ECDH+AES256:ECDH+AES128:DHE+AES128:!ADH:!AECDH:!MD5;
keepalive_timeout 70;
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
```

同时，如果是全站 HTTPS 并且不考虑 HTTP 的话，可以加入 HSTS 告诉你的浏览器本网站全站加密，并且强制用 HTTPS 访问。

警告：一旦响应 HSTS，后续浏览器将强制 https 访问，如果退回 http 浏览器将无法打开。

```text
add_header Strict-Transport-Security max-age=63072000;
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
```

同时也可以单独开一个 Nginx 配置，把 HTTP 的访问请求都用 301 跳转到 HTTPS

```text
server {  
    listen 80;
    listen [::]:80 ssl ipv6only=on;
    server_name     example.com;
    return 301 https://example.com$request_uri;
}
```

#### 证书链

ssl证书有根证书直接签发，也用根证书签发的二三级证书签发证书，所以如果你的证书不是由顶级根证书直接签发的情况下，你需要补全中间的二三级证书和根证书到证书链文件里。顺序是：你的ssl证书＋中间证书＋根证书。

通常来说浏览起会内置顶级知名根证书，对于中间证书可能会不内置，例如安卓端会不认中间证书颁发的ssl证书证书，因为安卓没有内置这些中间证书，需要你把这些证书拼接到一个证书链文件中发给客户端。

```shell
cat nginx.crt bundle.crt > nginx.chain.crt
```

在 Nginx 配置里使用 nginx.chain.crt 即可解决不识别证书的问题，证书的顺序不能反了，反了会报错：

```text
SSL_CTX_use_PrivateKey_file(" ... /www.example.com.key") failed
   (SSL: error:0B080074:x509 certificate routines:
    X509_check_private_key:key values mismatch)
```

因为 nginx 中的私钥 key 是和证书链中的第一个证书验证，如果顺序反了，就变成和bundle.crt配对。

#### TLS SNI 多证书支持

在一个主机（IP）上配置多个域名，使用虚拟主机（virtual host）就可以解决了。但是申请TLS证书的时候，是绑定了具体的域名和IP地址。建立TLS连接的时候，服务器要下发哪个证书呢？

等等，证书明明和域名绑定，都知道了域名，为什么会有选择选择证书的问题？

那是因为，域名是http的概念。client和server先建立了tcp连接，再经过TLS握手，才能实现https通信。在最初，这个过程，是没有域名的概念的！

为了解决单个主机部署多个TLS证书的问题，带来了TLS的SNI扩展。

nginx开启TLS SNI ，只需要在编译时打开--with-openssl编译选项，具体可以参考nginx安装。

检查nginx是否支持TLS SNI，执行 nginx -V

```shell
[root@www ~]# /usr/local/nginx/sbin/nginx -V
nginx version: nginx/1.18.0
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-39) (GCC)
built with OpenSSL 1.1.1g  21 Apr 2020
TLS SNI support enabled
```

### Nginx location 匹配规则

```text
~      # 波浪线执行正则匹配，区分大小写
~*     # 波浪线带星执行正则匹配，不区分大小写
^~     # ^~ 普通字符匹配，如果该选项匹配，只匹配该选项，不匹配其它 location 选项，一般用来匹配目录
=      # 普通字符串精确匹配
空     # 普通字符串匹配，例如 location /abc {}
@      # "@" 定义一个命名的 location，使用在内部重定向时，例如 error_page, try_files
```

#### location 匹配的优先级

与 location 在配置文件中的顺序无关  
= 精确匹配会第一个被处理。如果发现精确匹配，nginx 停止搜索其他匹配。  
除了精确匹配，然后执行普通字符匹配(非正则表达式匹配)，按最长匹配执行，找到最长前缀匹配的 location。举例来说，请求的路径是 /abcde,那么 location /abc {} 即使匹配还要再看配置中有没有更长的匹配，比如  
location /abcd {}。找到这个最长匹配之后，如果他带有 ^~ 前缀，那么就不再继续查找。  
找到最长前缀匹配后，比如找到了 location /abcd {}，那么还要继续看有没有匹配的正则表达式，按正则表达式在配置文件中出现的顺序进行匹配，如果找到一个的正则表达式匹配，则nginx停止搜索其他匹配，执行该匹配
location。  
当没有正则表达式或者没有正则表达式被匹配的情况下，那么匹配程度最高的最长前缀匹配 location 会被使用。

简单来说 nginx 的 locatioin 按这个优先级规则：

```text
= > ^~ > ~ = ~* >最长前缀匹配 > /
```

#### Location处理逻辑

* 用uri测试所有的prefix string;
* Uri精确匹配到=定义的loacation，使用这个location，停止搜索；
* 匹配最长prefix string，如果这个最长prefix string带有^~修饰符，使用这个location，停止搜索，否则：
* 存储这个最长匹配；
* 然后匹配正则表达；
* 匹配到第一条正则表达式，使用这个location，停止搜索；
* 没有匹配到正则表达式，使用#4步存储的prefix string的location。

#### 案例

```text
location  = / {
  # 只匹配"/".
  [ configuration A ] 
}
location  / {
  # 匹配任何请求，因为所有请求都是以"/"开始
  # 但是更长字符匹配或者正则表达式匹配会优先匹配
  [ configuration B ] 
}
location ^~ /images/ {
  # 匹配任何以 /images/ 开始的请求，并停止匹配 其它location
  [ configuration C ] 
}
location ~* .(gif|jpg|jpeg)$ {
  # 匹配以 gif, jpg, or jpeg结尾的请求. 
  # 但是所有 /images/ 目录的请求将由 [Configuration C]处理.   
  [ configuration D ] 
}
```

请求URI例子:

* / -> 符合configuration A
* /documents/document.html -> 符合configuration B
* /images/1.gif -> 符合configuration C
* /documents/1.jpg ->符合 configuration D

### Nginx 负载均衡配置

使用负载均衡的话,可以修改配置http节点如下：

```text
#设定http服务器，利用它的反向代理功能提供负载均衡支持
http {

    #设定mime类型,类型由mime.type文件定义
    include             /etc/nginx/mime.types;
    default_type    application/octet-stream;

    #设定日志格式
    access_log        /var/log/nginx/access.log;

    #省略上文有的一些配置节点
    #。。。。。。。。。。

    #设定负载均衡的服务器列表
    upstream mysvr {
        #weigth参数表示权值，权值越高被分配到的几率越大
        server 192.168.8.1x:3128 weight=5;
        #本机上的Squid开启3128端口,不是必须要squid
        server 192.168.8.2x:80    weight=1;
        server 192.168.8.3x:80    weight=6;
    }
        
    upstream mysvr2 {
        #weigth参数表示权值，权值越高被分配到的几率越大
        server 192.168.8.x:80    weight=1;
        server 192.168.8.x:80    weight=6;
    }

    #第一个虚拟服务器
    server {
        #侦听192.168.8.x的80端口
        listen             80;
        server_name    192.168.8.x;

        #对aspx后缀的进行负载均衡请求
        location ~ .*.aspx$ {
            #定义服务器的默认网站根目录位置
            root     /root; 
            #定义首页索引文件的名称
            index index.php index.html index.htm;
            
            #请求转向mysvr 定义的服务器列表
            proxy_pass    http://mysvr ;

            #以下是一些反向代理的配置可删除.

            proxy_redirect off;

            #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            #允许客户端请求的最大单文件字节数
            client_max_body_size 10m; 

            #缓冲区代理缓冲用户端请求的最大字节数，
            client_body_buffer_size 128k;

            #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_connect_timeout 90;

            #连接成功后，后端服务器响应时间(代理接收超时)
            proxy_read_timeout 90;

            #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            proxy_buffer_size 4k;

            #proxy_buffers缓冲区，网页平均在32k以下的话，这样设置
            proxy_buffers 4 32k;

            #高负荷下缓冲大小（proxy_buffers*2）
            proxy_busy_buffers_size 64k; 

            #设定缓存文件夹大小，大于这个值，将从upstream服务器传
            proxy_temp_file_write_size 64k;    

        }
    }
}
```

### 协议跟随

这条内容是在这样的场景下产生的：

* Nginx 配置了 SSL 证书监听 443 端口的 https 协议，80 端口没有开。
* 后方是 Tomcat 没有配置 SSL 是 http 协议。
* Nginx 反代 Tomcat 让程序成为 https 的地址。
* Tomcat 重定向，但返回的响应头中是 http 协议，导致跳转后无响应。

根据上面的场景，我们就需要协议跟随，让后面的 Tomcat 知道我们前面客户端使用的协议，所以就需要添加 ```X-Forwarded-Proto``` 头。

#### Nginx增加协议头转发配置

我们编辑 Nginx 的配置文件，在反向代理配置中增加 ```proxy_set_header X-Forwarded-Proto $scheme;``` 配置，例如：

```text
location / {
  proxy_pass         http://localhost:8080;
  proxy_set_header   X-Forwarded-Proto $scheme;
  proxy_set_header   Host              $host;
  proxy_set_header   X-Real-IP         $remote_addr;
  proxy_set_header   X-Forwarded-For   $proxy_add_x_forwarded_for;
}
```

#### Tomcat 配置修改

修改 Tomcat 的配置文件 server.xml 的 Engine 模块下配置一个 Valve：

```xml

<Valve className="org.apache.catalina.valves.RemoteIpValve"
       remoteIpHeader="X-Forwarded-For"
       protocolHeader="X-Forwarded-Proto"
       protocolHeaderHttpsValue="https"/> 
```

如果您想了解更多 Tomcat
的配置知识，请参考：[https://tomcat.apache.org/tomcat-8.0-doc/config/valve.html#Remote_IP_Valve](https://tomcat.apache.org/tomcat-8.0-doc/config/valve.html#Remote_IP_Valve)
