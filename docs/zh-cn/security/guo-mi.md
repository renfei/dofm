---
lang: zh-CN
title: 国密（国产密码算法）
description: 国密（国产密码算法）
---

# 国密（国产密码算法）

国密是指国产密码算法，相对于的是国际密码算法。

## 密码算法等级

密码算法分为三个等级，之前称为：国密、普密、商密，现在称为：核密、普密、商密。

| 简称  | 全称   | 可加密最高密级 |
|-----|------|---------|
| 核密  | 核心密码 | 绝密级     |
| 普密  | 普通密码 | 机密级     |
| 商密  | 商用密码 | 非密      |

其中核心密码、普通密码属于国家秘密，商用密码用于保护不属于国家秘密的信息。

本文档后续所述都为商密。

## 商密算法

商用密码是中华人民共和国政府用于非国家机密信息保护所采用的一系列密码技术和密码产品的总称，其相关技术部分为国家秘密。商用密码的研发及使用由国家密码管理局统一管理。

国产商密与国际商密对照表：

| 密码分类  | 国产商用密码                | 国际商用密码               |
|-------|-----------------------|----------------------|
| 对称加密  | SM1/SCB2 SM4/SMS4 SM7 | DES IDEA AES RC5 RC6 |
| 对称加密  | ZUC(祖冲之算法) SSF46      | RC4                  |
| 非对称加密 |                       | RAS DSA ECDSA Rabin  |
| 非对称加密 | SM2 SM9               | DH DSA ECC ECDH      |
| 散列    | SM3                   | MD5 SHA-1 SHA-2      |

### 国标文件

* SM2, GB/T 32918-2016, IETF "draft-shen-sm2-ecdsa", ISO/IEC 10118-3:2018
* SM3, GB/T 32905-2016, IETF "draft-oscca-cfrg-sm3", ISO/IEC 10118-3:2018
* SM4, GB/T 32907-2016, IETF "draft-ribose-cfrg-sm4“, ISO/IEC WD1 18033-3/AMD2
* ZUC, GM/T 0001-2016, 3GPP TS 35.221
* SM9, GM/T 0044.1-2016, ISO/IEC 10118-3:2018

### 常用国密算法概述

* SM1算法：对称加密算法其加密强度与AES相当。该算法不公开，仅以IP核的形式存在于芯片中。需要通过加密芯片的接口进行调用。
* SM2算法：非对称算法其实现基于ECC算法。SM2椭圆曲线公钥密码算法是我国自主设计的公钥密码算法，包括SM2-1椭圆曲线数字签名算法，SM2-2椭圆曲线密钥交换协议，SM2-3椭圆曲线公钥加密算法，分别用于实现数字签名密钥协商和数据加密等功能。SM2算法与RSA算法不同的是，SM2算法是基于椭圆曲线上点群离散对数难题，相对于RSA算法，256位的SM2密码强度已经比2048位的RSA密码强度要高。SM2以其高安全性和运算快速的特点在数据安全领域应用越来越广泛。
* SM3算法：该算法为摘要算法，可以用MD5作为对比理解。校验结果为256位。适用于商用密码应用中的数字签名和验证消息认证码的生成与验证以及随机数的生成，可满足多种密码应用的安全需求。
* SM4算法：无线局域网标准的分组数据算法。对称加密，密钥长度和分组长度均为128位。由于SM1、SM4加解密的分组大小为128bit，故对消息进行加解密时，若消息长度过长，需要进行分组，要消息长度不足，则要进行填充。
* SM7算法：是一种分组密码算法，分组长度为128比特，密钥长度为128比特。SM7适用于非接触式IC卡，应用包括身份识别类应用(门禁卡、工作证、参赛证)，票务类应用(赛事门票、展会门票)，支付与通卡类应用（校园一卡通、企业一卡通等）。

## 国密算法实现

### Java版实现

基于BouncyCastle实现国密算法SM2、SM3、SM4的操作类。

#### 安装依赖

```xml
<dependency>
    <groupId>net.renfei</groupId>
    <artifactId>sdk</artifactId>
    <version>2.0.0-SNAPSHOT</version>
</dependency>
```

#### 使用案例

使用 SM3 进行散列，类似 SHA-1 的 Hash 操作：

```java
import net.renfei.sdk.security.gm.sm.SM3Util;
import net.renfei.sdk.utils.StringUtils;

public class SM3UtilTest {
    static int randomData = 128;
    static byte[] message = StringUtils.getRandomString(randomData).getBytes();

    public void hashAndVerify() {
        byte[] hashVal = SM3Util.hash(message);
        assertTrue(SM3Util.verify(message, hashVal));

        String messageString = StringUtils.getRandomString(randomData);
        String hash = SM3Util.hash(messageString);
        assertTrue(SM3Util.verify(messageString, hash));
    }
}
```

### NodeJS版实现

暂无
