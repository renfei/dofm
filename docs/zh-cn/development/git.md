---
lang: zh-CN
title: Git使用手册
description: Git使用手册
---

# Git使用手册

Git 是目前最流行的源代码管理工具。为规范开发，保持代码提交记录以及 git 分支结构清晰，方便后续维护，现规范 git 的相关操作。

## Git基础

### Git 安装

<CodeGroup>
  <CodeGroupItem title="Debian/Ubuntu" active>

```bash
$ apt-get install libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev

$ apt-get install git

$ git --version
git version 1.8.1.2
```

  </CodeGroupItem>
  <CodeGroupItem title="Centos/RedHat">

```bash
$ yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel

$ yum -y install git-core

$ git --version
git version 1.7.1
```

  </CodeGroupItem>
</CodeGroup>

### 创建仓库

Git 使用 git init 命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行，所以 git init 是使用 Git 的第一个命令。

在执行完成 git init 命令后，Git 仓库会生成一个 .git 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。

```shell
$ git init
```

该命令执行完后会在当前目录生成一个 .git 目录。

如果当前目录下有几个文件想要纳入版本控制，需要先用 git add 命令告诉 Git 开始对这些文件进行跟踪，然后提交：

```shell
$ git add *.c
$ git add README
$ git commit -m '初始化项目版本'
```

以上命令将目录下以 .c 结尾及 README 文件提交到仓库中。

> 注： 在 Linux 系统中，commit 信息使用单引号 '，Windows 系统，commit 信息使用双引号 "。
>
> 所以在 git bash 中 git commit -m '提交说明' 这样是可以的，在 Windows 命令行中就要使用双引号 git commit -m "提交说明"。

### 设置用户信息

Git 自带一个 git config 的工具来帮助设置控制 Git 外观和行为的配置变量

安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改：

```shell
$ git config --global user.name "Ren Fei"
$ git config --global user.email i@renfei.net
```

再次强调，如果使用了 --global 选项，那么该命令只需要运行一次，因为之后无论你在该系统上做任何事情， Git 都会使用那些信息。 当你想针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 --global
选项的命令来配置。

如果想要检查你的配置，可以使用 git config --list 命令来列出所有 Git 当时能找到的配置。

```shell
$ git config --list
user.name=Ren Fei
user.email=i@renfei.net
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
```

### 工作区、暂存区、版本库

* 工作区：就是你在电脑里能看到的目录。
* 暂存区：英文叫 stage 或 index。一般存放在 .git 目录下的 index 文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。
* 版本库：工作区有一个隐藏目录 .git，这个不算工作区，而是 Git 的版本库。

## Git分支规范

Git建分支是非常cheap的，我们可以任意建立分支，对任意分支再分支，分支开发完后再合并。

良好的分支结构会保证各位开发人员不会相互影响。

### Git Flow

Git Flow是一套基于git的工作流程，这个工作流程围绕着project的发布(release)定义了一个严格的如何建立分支的模型。

* master 分支：master 为主分支，也是用于部署生产环境的分支，确保master分支稳定性， master 分支一般由develop以及hotfix分支合并，任何时间都不能直接修改代码。
* develop 分支：develop 为开发分支，始终保持最新完成以及bug修复后的代码，一般开发的新功能时，feature分支都是基于develop分支下创建的。
* feature 分支：开发新功能时，以develop为基础创建feature分支。分支命名: feature/ 开头的为特性分支， 命名规则: feature/user_module、 feature/cart_module。
* release分支：release
  为预上线分支，发布提测阶段，会release分支代码为基准提测。当有一组feature开发完成，首先会合并到develop分支，进入提测时会创建release分支。如果测试过程中若存在bug需要修复，则直接由开发者在release分支修复并提交。当测试完成之后，合并release分支到master和develop分支，此时master为最新代码，用作上线。
* hotfix 分支：分支命名: hotfix/
  开头的为修复分支，它的命名规则与feature分支类似。线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支，修复完成后，需要合并到master分支和develop分支

![git-flow](/image/docs/git-flow.png)

## Git Commit 规范

在每次 Commit 时都需要填写 Git Commit Message（提交说明），用来记录提交版本的变动摘要。

良好的 Git Commit 规范会让其他人更简单和方便的了解你的变动影响情况。

### 提交格式

一个 Commit Message 主要由 Header + Body + Footer 组成：

```text
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<BREAKING CHANGE>
<BLANK LINE>
<footer>
```

#### type

【必填】commit 的类别，主要有以下类别：

* feat: 新增功能
* fix: 修复错误
* docs: 仅更改文档
* style: 不影响代码含义的更改（空格、格式、缺少分号等）
* refactor: 既不修复bug也不添加功能的代码更改
* perf: 提高性能的代码更改
* test: 添加缺失测试或更正现有测试
* build: 影响构建系统或外部依赖关系的更改（示例范围：gulp, broccoli, npm）
* ci: 更改ci配置文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）
* chore: 不修改sre或测试文件的其他更改
* revert: 还原以前的提交

#### scope

【可选】commit 受影响的范围，举个例子，我更新了 maven 依赖的版本，那么 commit 就可以这样写：

```text
build(deps): update xxx maven version
```

#### subject

【必填】对你本次提交进行简短的描述，不要超过50个字、结尾不加句号。

#### body

【可选】对你本次提交进行详细的描述，可以解释为什么这么做、怎么做，可以多行

#### BREAKING CHANGE

【可选】如果你的修改是破坏性的，会影响到其他人，需要填写此处说明

#### footer

【可选】可以填写关联的 issue 编号

### 完整的案例

一个完整的 Commit 提交案例：

```text
build(deps): update xxx maven version

更新了 xxx 的依赖版本到最新版，因为需要 xxxx 特性

BREAKING CHANGE: 最新版移除了 xxx 接口

Closes issue #132
```