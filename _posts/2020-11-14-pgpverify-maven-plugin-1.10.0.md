---
layout: post
title: PGPVerify Maven Plugin 1.10.0
description: PGPVerify Maven Plugin 1.10.0 - release note
tags: maven pgp verify release-note
categories: releases-note
---

Next major version `1.10.0` of PGPVerify Maven Plugin was released.

<!-- -->

In this version we have new goal `show`.

Now you can see and verify an artifact signature eg for JUnit by simply execute:

```
mvn org.simplify4u.plugins:pgpverify-maven-plugin:show -Dartifact=junit:jnuit:4.12
``` 

as a result you see output like:

```yaml
Artifact:
    groupId:     junit
    artifactId:  junit
    type:        jar
    version:     4.12

PGP signature:
    version:     4
    algorithm:   SHA1withRSA
    keyId:       0xEFE8086F9E93774E
    create date: Thu Dec 04 17:17:33 CET 2014
    status:      valid

PGP key:
    version:     4
    algorithm:   RSA (Encrypt or Sign)
    bits:        2048
    fingerprint: 0xD4C89EA4AAF455FD88B22087EFE8086F9E93774E
    master key:  0x58E79B6ABC762159DC0B1591164BD2247B936711
    create date: Sun Jul 27 14:31:46 CEST 2014
    uids:        [.... (JUnit Development, 2014) <mail@....>]
```

For more information you can consult documentation for [show](https://www.simplify4u.org/pgpverify-maven-plugin/show-mojo.html) goal.
 
Detail release info can be found at github [v1.10.0](https://github.com/s4u/pgpverify-maven-plugin/releases/tag/v1.10.0).

