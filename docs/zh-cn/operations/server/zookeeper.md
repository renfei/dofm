---
lang: zh-CN
title: Zookeeper操作手册
description: Zookeeper操作手册
---

# Zookeeper操作手册

## 安装 Zookeeper

要下载 Zookeeper 请访问：[https://zookeeper.apache.org/releases.html](https://zookeeper.apache.org/releases.html)

ZooKeeper的安装包括单机模式安装，以及集群模式安装。 开发情况下由于资源有限一般用单机模式。

下载并解压后，我们进入`zookeeper`的`conf`配置目录，修改zoo_sample.cfg文件：

```text
# The number of milliseconds of each tick
tickTime=2000
# The number of ticks that the initial
# synchronization phase can take
initLimit=10
# The number of ticks that can pass between
# sending a request and getting an acknowledgement
syncLimit=5
# the directory where the snapshot is stored.
# do not use /tmp for storage, /tmp here is just
# example sakes.
dataDir=/tmp/zookeeper（修改为自己的目录）

dataLogDir=/tmp/zookeeper（修改为自己的目录）
# the port at which the clients will connect
clientPort=2181
# the maximum number of client connections.
# increase this if you need to handle more clients
#maxClientCnxns=60
#
# Be sure to read the maintenance section of the
# administrator guide before turning on autopurge.
#
# http://zookeeper.apache.org/doc/current/zookeeperAdmin.html#sc_maintenance
#
# The number of snapshots to retain in dataDir
#autopurge.snapRetainCount=3
# Purge task interval in hours
# Set to "0" to disable auto purge feature
#autopurge.purgeInterval=1
```

主要修改项为dataDir和dataLogDir，dataDir是zookeeper存放数据的地方，dataLogDir是存放zookeeper日志的地方。

如果只配置dataDir，则数据和日志都会创建在dataDir目录下。默认情况下zookeeper会占有8080端口，如果你不想8080端口被占用，增加一行admin.serverPort=8082，指定你自己的端口。

其他配置项的意思我们留到后面再说。

注意：如果你是在windows下使用zookeeper，需要将zoo_sample.cfg改名为zoo.cfg

### Docker 安装 Zookeeper 单机版

在开发环境中，我们只需要单机版的 Zookeeper 即可，那么使用 Docker 是绝佳的选择，可以快速构建 Zookeeper 服务。

搜索 Zookeeper 镜像：

```shell
docker search zookeeper
```

运行 Zookeeper 容器

```shell
docker run -d \
-p 2181:2181 \
-v /opt/zookeeper/data/:/data/ \
--name=zookeeper  \
--privileged zookeeper
```

此处挂载了一个存储卷`/opt/zookeeper/data/` 到容器中的 `/data/` 来确保数据不会丢失，请改为你自己的本地路径。

## 启动 Zookeeper

我们需要先启动zookeeper服务端，再启动客户端。

首先进入`zookeeper`的`bin`目录，执行：

```shell
./zkServer.sh start
```

接下来启动客户端，-server参数就代表我们要连接哪个zookeeper服务端。

```shell
./zkCli.sh -server 127.0.0.1:2181
```

## 集群搭建

如果你需要搭建集群，那么你机器的数量应该为奇数，所以最少需要`3`台服务器。

### 集群安装

给每一台服务器都安装好 Zookeeper，安装方式参考上面的内容，此处不再赘述。

### 集群配置

分别修改 zoo.cfg 配置信息，zookeeper 的三个端口作用：

* `2181` : 对 client 端提供服务
* `2888` : 集群内机器通信使用
* `3888` : 选举 leader 使用

按 `server.id = ip:port:port` 修改集群配置文件:

三台虚拟机 zoo.cfg 文件末尾添加配置:

```text
server.1=192.168.3.33:2888:3888
server.2=192.168.3.35:2888:3888
server.3=192.168.3.37:2888:3888
```

根据 id 和对应的地址分别配置 myid

```shell
vim /tmp/zookeeper/myid
```

本案例使用的是 1、2、3 的名称，那么`/tmp/zookeeper/myid`里各自写各自的编号即可。

### 启动集群

启动前需要关闭防火墙(生产环境需要打开对应端口)

```shell
systemctl stop firewalld
```

分别启动三台 Zookeeper 服务，查看三台机器状态，显示`Mode：leader` 代表主节点，`follower` 代表从节点，一主二从。
