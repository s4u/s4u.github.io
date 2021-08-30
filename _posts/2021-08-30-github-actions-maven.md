---
layout: post
title: Easy way to setup Maven builds on GitHub Actions
description: Easy way to setup Maven builds on GitHub Actions
tags: maven github actions
categories: how-to
social_logo: /img/logo-social.png
---

GitHub Action give you possibility to create a continuous integration (CI) workflow to build and test your Java project with Maven.

Using [Setup Maven Action](https://github.com/marketplace/actions/setup-maven-action) you workflow can be simply as possible.

<!-- -->

```yaml
name: Maven CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Setup Maven Action
        uses: s4u/setup-maven-action@v1.2.1
        with:
          java-version: 8

      - name: Build with Maven
        run: mvn verify
```

`Setup Maven Action` does for you:

 - checkout your code
 - setup Java with selected version
 - setup Maven with default version
 - setup cache for speed up build

You can testing against different Java and Maven versions


```yaml
name: Maven CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        maven: [ '3.5.4', '3.6.3', '3.8.2' ]
        java: [ '8', '11', '16']
        
    steps:
      - name: Setup Maven Action
        uses: s4u/setup-maven-action@v1.2.1
        with:{% raw %}
          java-version: ${{ matrix.java }}
          maven-version: ${{ matrix.maven }}{% endraw %}
      - name: Build with Maven
        run: mvn verify
```
