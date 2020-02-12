---
layout: post
title: Show all maven project dependency at once
description: Show all maven project dependency at once
tags: maven dependency
categories: how-to
---

Maintenance of current version of dependency is important in every project.
In maven project you can use ```versions-maven-plugin``` to help find what can be updated.

```versions-maven-plugin``` has many goals to show dependency updates for different kind of artifacts,
like project dependency, plugin dependency.

<!-- -->

In order to show all kind of dependency in your project you can put in your project ```pom.xml```
or better in your parent pom for your projects bellow code:

{% highlight xml %}

<project>
    <profiles>
        <profile>
            <id>update-show</id>
            <build>
                <defaultGoal>validate</defaultGoal>
                <plugins>
                    <plugin>
                        <groupId>org.codehaus.mojo</groupId>
                        <artifactId>versions-maven-plugin</artifactId>
                        <executions>
                            <execution>
                                <phase>validate</phase>
                                <goals>
                                    <goal>display-dependency-updates</goal>
                                    <goal>display-parent-updates</goal>
                                    <goal>display-property-updates</goal>
                                    <goal>display-plugin-updates</goal>
                                </goals>
                            </execution>
                        </executions>
                    </plugin>
                </plugins>
            </build>
        </profile>
     </profiles>
 </project>

{% endhighlight %}

And now you can simply run:

    mvn -P update-show

#### External links:
 * [versions-maven-plugin](https://www.mojohaus.org/versions-maven-plugin/)
