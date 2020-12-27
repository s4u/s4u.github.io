---
layout: post
title: Sign Maven Plugin 0.1.0
description: Sign Maven Plugin 0.1.0 - release note
tags: maven pgp sign release-note
categories: releases-note
social_logo: /img/logo-social-sign.png
---

We announce that The first version of [sign-maven-plugin](https://www.simplify4u.org/sign-maven-plugin/) has been released.

Sign Maven Plugin allows you to create OpenPGP signatures
for all of the Maven project’s artifacts without any external software.

It can replace [maven-gpg-plugin](https://maven.apache.org/plugins/maven-gpg-plugin/) 
to simplifier OpenPGP signatures generation.

<!-- -->

We invite everybody to test and give us feedback
on [GitHub Discussions](https://github.com/s4u/sign-maven-plugin/discussions).

We're also waiting for issues with request for new needed feature
on [GitHub Issues](https://github.com/s4u/sign-maven-plugin/issues)

Everybody is welcome to collaborate on making the project the best usable.

# Feature
- all the signing operations are done using `Bouncy Castle`
- support `Maven 3.6` and is ready for next version `3.7/4.0` of Maven with `Consumer POM`
- support `subkey` for signing
- easy to use on CI system, configuration can be provided by environment variables


Detail release info can be found at github [v0.1.0](https://github.com/s4u/sign-maven-plugin/releases/tag/v0.1.0).
