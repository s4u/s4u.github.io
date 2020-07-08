---
layout: post
title: PGPVerify Maven Plugin 1.9.0
description: PGPVerify Maven Plugin 1.9.0 - release note
tags: maven pgp verify release-note
categories: releases-note
---

Next major version `1.9.0` of PGPVerify Maven Plugin was released.

<!-- -->

Some of new feature in this version:
 
 - Report duration of artifact resolution, download and signature validation phases
 - Checksumming - this speeds up next build on the same project
 - Add hkps://keyserver.ubuntu.com to default key servers 
 - Use Issuer Fingerprint signature subpacket to obtain key fingerprint - protects us from keyId collision prone
 
Detail release info can be found at github [v1.9.0](https://github.com/s4u/pgpverify-maven-plugin/releases/tag/v1.9.0).

