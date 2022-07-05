---
lang: zh-CN
title: 技术文档撰写手册
description: 技术文档撰写手册
---

# 技术文档撰写手册

高质量的文档对于一个组织或团队来说有非常多的益处，比如让代码和API更容易理解、错误更少；让团队成员更专注于目标；也可以让一些手工操作更容易；另外如果有新成员加入的话有文档也会让他们更快融入……

## 为什么不喜欢写文档

主要文档有收益滞后性的原因，如果你跑单元测试代码立即就可以得到结果，但文档初期是没有什么收益的，但到了后期维护时会大大降低维护成本。

其次是工程师习惯将代码和文档分为两个不同的工作，但其实他们应该是同一件事，在构建代码的同时文档可以帮你再次梳理你的思路。

## 如何写一份好的技术文档

本文仅针对技术文档中的技术为主，文档的格式规范各家都不相同，在此处不做体现。

### 明确读者是谁

很多开发者写出的文档被别人吐槽看不懂，这种情况比较常见，最大的问题就是没有明确读者是谁，写的文档成为给自己看的文档。

所以，在开始之前需要明确你的文档是给谁阅读的？是其他开发工程师？是运维工程师？是客户？根据不同的技术水平需要有不同的重点。

#### 针对新手或非技术专业人员

在文档的开始，除了介绍项目的大致功能以外，你还需要介绍文档中涉及到的术语、概念，然后详细讲解具体的实现，这样读者就能看懂你在说什么。

#### 针对专家人员

如果你的文档读者是专业人员，那你可以省去额外的介绍信息，只给出几个外部链接即可，将主要内容给实现细节和注意事项上。

#### 针对运维人员

如果你的文档读者是运维人员，你需要尽量详细的给出`shell`命令的案例，一步一步的带着读者完成操作，毕竟熟悉Linux系统的运维人员可能并不熟悉的系统配置信息。

### 清晰的文档分类

文档内容不要都写在一起，举个例子，你需要区分出参考文档、设计文档、引导类文档、概念性文档，清洗的文档分类可以快速的帮助读者找到需要的内容。

### 5W 法则

5W法则分别是Who What When Where Why，这是一个广泛被用在各行各业的法则，写文档当然也能用（5W法则堪称万金油，啥地方都能用）。

* WHO： 前面已经说过了，文档是写给谁看的，读者是谁。
* WHAT： 明确这篇文档的用途，有时候，仅仅说明文档的用途和目的就能帮你搭建起整个文档的框架。
* WHEN： 明确文档的创建、Review和更新日期。因为文档也有时效性，明确相关日期可以避免阅读者踩坑。
* WHERE： 文档应该放在哪！ 建议一个组织或者团队有统一的永久文档存放地址，并且有版本控制。最好是方便查找、使用和分享。
* WHY： 为什么要写这篇文档， 你期望读者读完后从文档中获得什么！

### 三段式写作

任何文档都可以分为头、身体、尾三个部分，技术文档也不例外。

首先先阐述问题，你为啥要写这个文档，为了解决什么问题，大致介绍一下问题的场景、你所使用到的技术概念。

中间部分，开始介绍具体的解决方案、详细的过程，成为文档的主干部分。

最后，总结解决办法、分析导致的原因、如何避免、参考文献、致谢帮助者。

## 案例

下面的给出一个我的小案例，并介绍我为什么这么写。

这个案例是我给某个项目写的一个小中间件，作用是管理用户的权限、菜单、按钮，这样多个系统可以连接中间件来共享统一的权限，有点像微服务了，但它不是，它是独立的中间件。

明确读者是对接我的其他系统开发工程师，所以很多基础知识我就不用介绍了，直接介绍我的设计概念、鉴权注意事项、对接的`Example`案例，由于读者是开发人员，我可以默认读者是会使用`curl`的。

### 以下是我当时写的文档内容

> # UAA (User Account and Authority) 统一权限管理中间件
> 
> ![/image/docs/20220705091246.webp](/image/docs/20220705091246.webp)
> 
> ## 概念
> UAA是如何工作的：UAA中可以保存系统菜单树、菜单页面中的按钮、角色、用户信息，根据用户的角色可获取用户拥有的菜单树、按钮列表。
> 
> ### namespace
> 命名空间，UAA中间件可运行在所有项目中间，那么不同的项目、不同的运行环境（如开发、测试、生产），可以选择不同的命名空间。
> 
> 在不同的命名空间下，数据完全隔离，你可以认为是一个全新的 UAA 环境。
> 
> ### ExtendJson
> 
> 在菜单、按钮、角色对象中都含有```ExtendJson```字段，该字段为扩展字段，如果UAA提供给你的字段无法满足你的需求时，你可以将需要存储的对象转为 JSON 字符串存入该字段。
> 
> ## 鉴权
> 
> > 注意：
> > * UAA 是一个内部组件，需要在可信的内部网络中运行，不可暴露在公网环境，防止带来安全风险。
> > * UAA 提供简单的鉴权实现，为防止业务错用的弱鉴权体系，不是防止恶意攻击的强鉴权体系。
> 
> ### 开放接口
> 
> 所有以```/api/**```地址开头的接口都是开放接口，无需认证即可访问。提供给其他组件使用。
> 
> ### 管理接口
> 
> 所有以```/_/api/**```地址开头的接口都是内部管理接口，需要登陆认证。
> 
> 使用管理接口可以管理 UAA 中间件中的数据。
> 
> ### 关闭鉴权
> 
> 关闭鉴权后，管理接口也将开放，整个系统的接口可以任意访问。修改```application.yml```配置文件中```enabled```：
> 
> ```yml
> uaa:
>   auth:
>     enabled: true
>     username: renfei
>     password: renfei
> ```
> 
> ## Example
> 
> ### 获取命名空间列表
> 
> ```bash
> curl -X 'GET' \
>   'http://local.renfei.net:8086/api/namespace' \
>   -H 'accept: */*'
> {"code":200,"message":"成功","timestamp":1650610347,"signature":"7cfead27fe18c4f8fbed48d812e9f519d81446d1","nonce":"c3OAiJn909G1T2jx","data":[{"id":1,"namespace":"dev","addTime":"2022-04-21T13:24:19.000+00:00","updateTime":null}]}
> ```
> 
> ### 获取命名空间下所有用户列表
> 
> ```bash
> curl -X 'GET' \
>   'http://local.renfei.net:8086/api/dev/account' \
>   -H 'accept: */*'
> {"code":200,"message":"成功","timestamp":1650610408,"signature":"d32288f97fab5a3e86484688bb5306cdc25da303","nonce":"joyu4l549vNYOCpi","data":[{"id":1,"namespace":"dev","userName":"renfei","email":"i@renfei.net","telephone":"13001000762","company":"飞利信","department":"大数据中心","enable":true,"addTime":"2022-04-22T06:47:27.000+00:00","updateTime":null,"extendJson":null}]}
> ```
> 
> ### 获取指定用户详细信息
> 
> ```bash
> curl -X 'GET' \
>   'http://local.renfei.net:8086/api/dev/account/renfei' \
>   -H 'accept: */*'
> {"code":200,"message":"成功","timestamp":1650610507,"signature":"9dfbbcb4e1223c251b69a8019e358ba842b7be8f","nonce":"f148WujVzvH22Kk2","data":{"id":1,"namespace":"dev","userName":"renfei","email":"i@renfei.net","telephone":"13001000762","company":"飞利信","department":"大数据中心","enable":true,"addTime":"2022-04-22T06:47:27.000+00:00","updateTime":null,"extendJson":null}}
> ```
> 
> ### 获取指定用户拥有的角色列表
> 
> ```bash
> curl -X 'GET' \
>   'http://local.renfei.net:8086/api/dev/account/renfei/role' \
>   -H 'accept: */*'
> {"code":200,"message":"成功","timestamp":1650610583,"signature":"933b1e814234e5a211b6126873d449ba5ea4d78b","nonce":"3SHOqjdXVtF2d123","data":[{"id":1,"namespace":"dev","roleName":"developer","addTime":"2022-04-22T06:46:51.000+00:00","updateTime":null,"extendJson":null}]}
> ```
> 
> ### 获取指定用户拥有的菜单树
> 
> ```bash
> curl -X 'GET' \
>   'http://local.renfei.net:8086/api/dev/account/renfei/menu' \
>   -H 'accept: */*'
> {"code":200,"message":"成功","timestamp":1650610627,"signature":"087bbd9338c615c387c4ce12f28b9f4eec4bd840","nonce":"iW9bXuLQk3oBI3EZ","data":[{"id":1,"pid":null,"namespace":"dev","menuName":"首页","menuIcon":null,"menuTarget":null,"menuClass":null,"menuTitle":null,"menuOnclick":null,"menuOrder":0,"enable":true,"addTime":"2022-04-22T06:47:58.000+00:00","updateTime":null,"menuHref":"/","menuCss":null,"extendJson":null,"child":null},{"id":2,"pid":null,"namespace":"dev","menuName":"系统设置","menuIcon":null,"menuTarget":null,"menuClass":null,"menuTitle":null,"menuOnclick":null,"menuOrder":0,"enable":true,"addTime":"2022-04-22T06:48:15.000+00:00","updateTime":null,"menuHref":"/setting","menuCss":null,"extendJson":null,"child":[{"id":3,"pid":2,"namespace":"dev","menuName":"角色管理","menuIcon":null,"menuTarget":null,"menuClass":null,"menuTitle":null,"menuOnclick":null,"menuOrder":0,"enable":true,"addTime":"2022-04-22T06:48:33.000+00:00","updateTime":null,"menuHref":"/role","menuCss":null,"extendJson":null,"child":null}]}]}
> ```
> 
> ### 获取指定用户拥有的按钮列表
> 
> ```bash
> curl -X 'GET' \
>   'http://local.renfei.net:8086/api/dev/account/renfei/menu/3/button' \
>   -H 'accept: */*'
> {"code":200,"message":"成功","timestamp":1650610973,"signature":"a454b6b1b49b58345090d1ee06c09bbcaaf24739","nonce":"4l12EVcqdWp441Ys","data":[{"id":1,"menuId":3,"namespace":"dev","btnUuid":null,"btnText":null,"btnType":null,"btnName":"添加","btnClass":null,"btnOnclick":null,"menuOrder":0,"enable":true,"addTime":"2022-04-22T06:49:29.000+00:00","updateTime":null,"btnCss":null,"extendJson":null}]}
> ```
> 
> ## Document
> 
> 访问项目将自动跳转 Swagger 文档：
> 
> ![/image/docs/20220705091245.webp](/image/docs/20220705091245.webp)
> 
