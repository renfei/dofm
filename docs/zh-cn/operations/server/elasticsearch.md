---
lang: zh-CN
title: ElasticSearch操作手册
description: ElasticSearch操作手册
---

# ElasticSearch操作手册

## 安装 ElasticSearch

待完善

## Docker 运行 ElasticSearch

### 本地数据环境准备

首先准备和新建本地挂载的数据目录和配置文件：

* /opt/docker/elasticsearch/plugins/
* /opt/docker/elasticsearch/data
* /opt/docker/elasticsearch/config/elasticsearch.yml

编辑配置文件`/opt/docker/elasticsearch/config/elasticsearch.yml`：

```text
http.host: 0.0.0.0
http.cors.enabled: true
http.cors.allow-origin: "*"
http.cors.allow-headers: Authorization
```

注意：文件夹的权限要改成使用`chmod -R 777`修改文件读写权限

```shell
sudo chmod -R 777 /opt/docker/elasticsearch
```

### 启动 Docker 容器

使用 Docker 运行 ElasticSearch命令：

```shell
docker run \
-p 9200:9200 \
-p 9300:9300 \
--name elasticsearch \
-e "discovery.type=single-node" \
-e "cluster.name=elasticsearch" \
-v /opt/docker/elasticsearch/plugins:/usr/share/elasticsearch/plugins \
-v /opt/docker/elasticsearch/data:/usr/share/elasticsearch/data \
-v /opt/docker/elasticsearch/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml \
-d elasticsearch:8.2.3
```

命令详解:

* `-p`: 端口映射
* `--name`: 容器命名
* `-e`: 环境变量，`discovery.type=single-node`为单节点模式
* `-v`: 挂载存储，这里挂载了插件目录、数据目录和配置文件
* `-d`: 后台运行

### 进入容器设置密码

使用以下命令进入容器，其中`elasticsearch`是我们容器的名字：

```shell
docker exec -it elasticsearch /bin/sh
```

进入容器以后执行：

```shell
bin/elasticsearch-setup-passwords interactive
```

重设密码，操作记录如下：

[![elasticsearch-setup-passwords interactive](/image/docs/20220704145802.webp)

### 进入容器安装分词插件

使用以下命令进入容器，其中`elasticsearch`是我们容器的名字：

```shell
docker exec -it elasticsearch /bin/sh
```

安装分词插件，注意`版本号`要匹配：

```shell
bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v8.2.3/elasticsearch-analysis-ik-8.2.3.zip
```
