---
lang: zh-CN
title: Docker操作手册
description: Docker操作手册
---

# Docker操作手册

"Docker" 一词指代了多个概念，包括开源社区项目、开源项目使用的工具、主导支持此类项目的公司 Docker Inc. 以及该公司官方支持的工具。技术产品和公司使用同一名称，的确让人有点困惑。

* IT 软件中所说的 "Docker" ，是指容器化技术，用于支持创建和使用 Linux 容器。
* 开源 Docker 社区致力于改进这类技术，并免费提供给所有用户，使之获益。
* Docker Inc. 公司凭借 Docker 社区产品起家，它主要负责提升社区版本的安全性，并将技术进步与广大技术社区分享。此外，它还专门对这些技术产品进行完善和安全固化，以服务于企业客户。

Docker 技术使用 Linux 内核和内核功能（例如 Cgroups 和 namespaces）来分隔进程，以便各进程相互独立运行。这种独立性正是采用容器的目的所在；它可以独立运行多种进程、多个应用，更加充分地发挥基础设施的作用，同时保持各个独立系统的安全性。

容器工具（包括 Docker）可提供基于镜像的部署模式。这使得它能够轻松跨多种环境，与其依赖程序共享应用或服务组。Docker 还可在这一容器环境中自动部署应用（或者合并多种流程，以构建单个应用）。

此外，由于这些工具基于 Linux 容器构建，使得 Docker 既易于使用，又别具一格——它可为用户提供前所未有的高度应用程访问权限、快速部署以及版本控制和分发能力。

## Docker Engine 安装

### 在 CentOS 上安装 Docker 

要在 CentOS 上开始使用 Docker 引擎，请确保 满足先决条件，然后 安装 Docker。

#### 先决条件

要安装 Docker Engine，您需要 CentOS 7、CentOS 8（stream）或 CentOS 9（stream）的维护版本。存档版本不受支持或测试。

centos-extras必须启用存储库。此存储库默认启用，但如果您已禁用它，则需要 重新启用它。

推荐使用`overlay2`存储驱动。

#### 使用存储库安装

在新主机上首次安装 Docker Engine 之前，您需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。

##### 设置存储库

安装`yum-utils`包（提供`yum-config-manager`实用程序）并设置存储库。

```shell
sudo yum install -y yum-utils
sudo yum-config-manager \
   --add-repo \
   https://download.docker.com/linux/centos/docker-ce.repo
```

##### 安装 Docker 引擎

安装最新版本的 Docker Engine、containerd 和 Docker Compose 或进入下一步安装特定版本：

```shell
sudo yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

如果提示接受 GPG 密钥，请验证指纹是否匹配 060A 61C5 1B55 8A7F 742B 77AA C52F EB6B 621E 9F35，如果是，则接受它。

此命令会安装 Docker，但不会启动 Docker。它还会创建一个 docker组，但是默认情况下它不会将任何用户添加到该组中。

启动 Docker

```shell
sudo systemctl start docker
```

#### 从 RPM 包安装

前往[https://download.docker.com/linux/centos/](https://download.docker.com/linux/centos/) 并选择您的 CentOS 版本。然后浏览x86_64/stable/Packages/ 并下载.rpm要安装的 Docker 版本的文件。

安装 Docker Engine，将下面的路径更改为您下载 Docker 包的路径。

```shell
sudo yum install /path/to/package.rpm
```

Docker 已安装但未启动。该docker组已创建，但没有用户添加到该组。

启动 Docker

```shell
sudo systemctl start docker
```

### 在 Ubuntu 上安装 Docker

要在 Ubuntu 上开始使用 Docker Engine，请确保 满足先决条件，然后 安装 Docker。

#### 先决条件

要安装 Docker Engine，您需要以下 Ubuntu 版本之一的 64 位版本：

* Ubuntu Jammy 22.04 (LTS)
* Ubuntu Impish 21.10
* Ubuntu Focal 20.04 (LTS)
* Ubuntu Bionic 18.04 (LTS)

Docker Engine 支持 `x86_64` (or `amd64`), `armhf`, `arm64`, `s390x` 架构.

#### 使用存储库安装

在新主机上首次安装 Docker Engine 之前，您需要设置 Docker 存储库。之后，您可以从存储库安装和更新 Docker。

##### 设置存储库

更新apt包索引并安装包以允许apt通过 HTTPS 使用存储库：

```shell
sudo apt-get update
sudo apt-get install \
   ca-certificates \
   curl \
   gnupg \
   lsb-release
```
添加 Docker 的官方 GPG 密钥：

```shell
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

使用以下命令设置存储库：

```shell
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

##### 安装 Docker 引擎

更新apt包索引，安装最新版本的 Docker Engine、containerd 和 Docker Compose：

```shell
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

#### 从 DEB 包安装

如果您无法使用 Docker 的存储库来安装 Docker Engine，您可以下载 .deb您的版本的文件并手动安装。每次升级 Docker 时都需要下载一个新文件。

转到[https://download.docker.com/linux/ubuntu/dists/](https://download.docker.com/linux/ubuntu/dists/)，选择您的 Ubuntu 版本，然后浏览到pool/stable/、选择amd64、 armhf、arm64或s390x，然后下载.deb您要安装的 Docker 引擎版本的文件。

安装 Docker Engine，将下面的路径更改为您下载 Docker 包的路径。

```shell
sudo dpkg -i /path/to/package.deb
```

Docker 守护进程自动启动。

## Docker Desktop 安装

警告：在大型企业（超过 250 名员工或年收入超过 1000 万美元）中商业使用 Docker Desktop 现在需要付费订阅。

### 在 macOS 上安装 Docker

Mac 分为 英特尔芯片和苹果芯片，安装是不同的，请注意分辨。

#### 在配备英特尔芯片的Mac上安装

* macOS 必须是 10.15 或更高版本。即Catalina， Big Sur， 或 Monterey。我们建议升级到最新版本的 macOS。
* 至少 4 GB 的 RAM。
* 不得安装 4.3.30 之前的 VirtualBox，因为它与 Docker Desktop 不兼容。

您可以[点击此处](https://desktop.docker.com/mac/main/amd64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-amd64)下载应用程序。

双击`Docker.dmg`打开安装程序，然后将 `Docker` 图标拖到 `Applications` 文件夹。

在 `Applications` 文件夹里双击 `Docker.app` 以启动 Docker。

#### 在配备苹果芯片的Mac上安装

从 Docker Desktop 4.3.0 开始，我们删除了安装Rosetta 2的硬性要求。在使用 Darwin/AMD64 时，有一些可选的命令行工具仍然需要 Rosetta 2。请参阅[已知问题部分](https://docs.docker.com/desktop/mac/apple-silicon/#known-issues)。但是，为了获得最佳体验，我们建议您安装 Rosetta 2。要从命令行手动安装 Rosetta 2，请运行以下命令：

```shell
softwareupdate --install-rosetta
```

有关更多信息，请参阅[适用于 Apple 芯片的 Docker 桌面](https://docs.docker.com/desktop/mac/apple-silicon/)。

您可以[点击此处](https://desktop.docker.com/mac/main/arm64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-arm64)下载应用程序。

双击`Docker.dmg`打开安装程序，然后将 `Docker` 图标拖到 `Applications` 文件夹。

在 `Applications` 文件夹里双击 `Docker.app` 以启动 Docker。

### 在 Windows 上安装 Docker

警告：在大型企业（超过 250 名员工或年收入超过 1000 万美元）中商业使用 Docker Desktop 现在需要付费订阅。

待完善
