---
layout: post
title: Maven artifacts pgp keys map - first release
description: Maven artifacts pgp keys map - first release
tags: maven central pgp verify signature security release-note
categories: releases-note
---

We announce that The first version `2020.08` of [pgp-keys-map](https://github.com/s4u/pgp-keys-map) has been released.

Now we can verify PGP signature of downloaded artifact, connected with proper key which was used for signature. 
So we have sure - we used correct unchanged artifact.

<!-- -->

To use this map you should configure your project to execute
[pgpverify-maven-plugin](https://www.simplify4u.org/pgpverify-maven-plugin/)
with [pgp-keys-map](https://github.com/s4u/pgp-keys-map)

One more benefit which you have using our tools is checking signature of artifacts during each build,
not only during artifact download from the remote repository to local.

We need help of any other people (the more the better) to build credible keys map, so your contribution is welcome.

#### External links:
 - <https://www.simplify4u.org/pgpverify-maven-plugin>
 - <https://github.com/s4u/pgp-keys-map/releases/tag/v2020.08>
