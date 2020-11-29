---
layout: post
title: PGPVerify Maven Plugin 1.7.0
description: PGPVerify Maven Plugin 1.7.0 - release note
tags: maven pgp verify release-note
categories: releases-note
social_logo: /img/logo-social-pgpverify.png
---

Next major version `1.7.0` of PGPVerify Maven Plugin was released.

<!-- -->

Beginning from this version we can use many pgp key servers addresses.

It can help us in case of:
 - one pgp key server is not accessible
 -  a pgp key is deployed only on specific key server and not found on another

Next feature is that when check plugins also plugins used for maven site report also are checked.

As usual there is no external software need to install - plugin use Bouncy Castle library to manage pgp operations.

Detail release info can be found at github [v1.7.0](https://github.com/s4u/pgpverify-maven-plugin/releases/tag/v1.7.0).

