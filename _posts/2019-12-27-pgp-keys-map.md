---
layout: post
title: Maven artifacts pgp keys map
description: Maven artifacts pgp keys map
tags: maven central pgp verify signature security
---

According to Maven Central Repository requirements all artifacts deployed to Central Repository
have to provided PGP signatures. All key used to signing artifacts are distributed to public key servers.

We can verify PGP signature of downloaded artifact,
but there aren't place to verify if given public key should be used for specific artifact.

To meet this demand we created [map of pgp keys](https://github.com/s4u/pgp-keys-map) connected with artifacts.
So we have information if some key identified by finger print should be used to signing specific artifact.

<!-- -->

To use this map you should configure your project to execute
[pgpverify-maven-plugin](https://www.simplify4u.org/pgpverify-maven-plugin/)
with [pgp-keys-map](https://github.com/s4u/pgp-keys-map)

One more benefit which you have using our tools is checking signature of artifacts during each builds,
not only during artifact download from remote repository to local.

We need help of any other people (the more the better) to build credible keys map, so your contribution is welcome.

#### External links:
 - <https://maven.apache.org/repository/guide-central-repository-upload.html>
 - <https://central.sonatype.org/pages/requirements.html>
 - <https://www.simplify4u.org/pgpverify-maven-plugin>
 - <https://github.com/s4u/pgp-keys-map>
