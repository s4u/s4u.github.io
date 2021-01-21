---
layout: post
title: Easy way to create PGP/GPG Signatures with Maven on CI/CD
description: Easy way to create PGP/GPG Signatures with Maven on CI/CD
tags: maven central pgp openpgp signature sign
categories: how-to
social_logo: /img/logo-social-sign.png
---

One of `Maven Central` repository requirements is signing all deployed artifacts with `PGP/GPG`.

In order to meet this requirement we need setup our environment with proper `PGP/GPG` keys.

<!-- -->

On local system we can do it once.

The task is more complicated on modern `CI/CD` system working in cloud/container
where each build is done on fresh environment.

In this case we need to setup `PGP/GPG` infrastructure before each build,
so our build script becomes more complicated.

The most of `CI/CD` systems allow us to set environment variables which can be pass to our builds.

Instead of using `maven-gpg-plugin` which require install and configure binary of `gpg`
we can use [`sign-maven-plugin`](https://www.simplify4u.org/sign-maven-plugin/) and environment variables.

### Key prepare
Please look at our [tutorial](https://www.simplify4u.org/sign-maven-plugin/key-prepare.html)

### Maven configuration

In `Maven` project we need only:

```xml
<plugins>
    <plugin>
        <groupId>org.simplify4u.plugins</groupId>
        <artifactId>sign-maven-plugin</artifactId>
        <version><!-- check releases page --></version>
        <executions>
            <execution>
                <goals>
                    <goal>sign</goal>
                </goals>
            </execution>
        </executions>
    </plugin>
</plugins>
```

We need not any special maven **profiles** because by default `sign-maven-plugin` skip execution if key not found

We need not any special **application**, **software** - `sign-maven-plugin` use internally `Bouncy Castle` to generate signature.

### CI/CD configuration

Next we configure environment variable on `CI/CD` system:
 
SIGN_KEY
: armored `GPG/PGP` key - this is required

SIGN_KEY_ID
: key id in hex format - optional, first key from `SIGN_KEY` will be used

SIGN_KEY_PASS
: passphrase to decrypt private signing key - optional if key is not encrypted

### Plugin Documentation

Documentation of can be found on site <https://www.simplify4u.org/sign-maven-plugin/plugin-info.html>
