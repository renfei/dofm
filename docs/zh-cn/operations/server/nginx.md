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

# 配置（如果需要定制化编译，在此处传参数开启相关模块）
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

# make
sudo make

# make install
sudo make install
```

  </CodeGroupItem>
</CodeGroup>

## 配置 Nginx

待完善

### 配置 SSL/HTTPS

待完善

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
