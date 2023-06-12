# 编程入门指南

大量借鉴：https://www.kancloud.cn/kancloud/intro-to-prog/52592, 目前是它的草稿

## 警醒

不要好高骛远， 要理解一个东西， 首先就需要理解它的基础， 这是最重要的一步， 不然后面你还会重新去拾起基础

不要只与构建好的机器工具接触(在没有理解和思考它的构成原理)， 这会严重限制你的能力

不要想着回头再去补基础， 这会造成极大的心理障碍， 你应该从基础入手

## 启蒙

自顶向下探索

1.完成[Learn Python The Hard Way（“笨办法”学Python（第3版）](https://www.bookstack.cn/read/LearnPython3TheHardWay/spilt.4.learn-py3.md)
2.完成 MIT 计算机导论课（如果你英语不过关：[麻省理工学院公开课：计算机科学及编程导论](https://open.163.com/newview/movie/courseintro?newurl=%2Fspecial%2Fopencourse%2Fcs50.html)）。MOOC 是学习编程的一个有效途径。虽然该课程的教学语言为Python，但作为一门优秀的导论课，它强调学习计算机科学领域里的重要概念和范式，而不仅仅是教你特定的语言。如果你不是科班生，这能让你在自学时开阔眼界；课程内容：计算概念，python编程语言，一些简单的数据结构与算法，测试与调试。支线任务：完成《Python核心编程 》
3.完成 Harvard CS50 如果你英语不过关：完成哈佛大学公开课：计算机科学 cs50 。同样是导论课，但这门课与MIT的导论课互补。教学语言涉及 C, PHP, JavaScript + SQL, HTML + CSS，内容的广度与深度十分合理，还能够了解到最新的 一些科技成果，可以很好激发学习计算机的兴趣。

支线任务：

* 阅读《编码的奥秘》
* 完成《C语言编程》
* [可选] 如果你的目标是成为一名 Hacker：阅读 Hacker's Delight

## 入门

1.首先
> X = 用于思考解决方案的时间，即「解决问题」 部分
> Y = 用于实现代码的时间，即「利用计算机」部分」
> 编程能力 = F(X, Y) （X>Y）
>推荐书籍:
>Structure and Interpretation of Computer Programs(SICP)《计算机程序的构造和解释》
>虽然SICP是一本「入门书」，但对于初学者还是有一定的难度，以下是一些十分有用的辅助资源：
>Udacity CS212 Design of Computer Program)： 由上文提到的Google研究主管Peter Norvig 主讲，教学语言为 Python，内容有一定难度。
>How to Design Programs, Second Edition：HtDP的起点比SICP低，书中的内容循循善诱，对初学者很友好，如果觉得完成SICP过于困难，可以考虑先读一读HtDP。
>UC Berkeley SICP授课视频以及 SICP 的两位作者给 Hewlett-Packard 公司员工培训时的录像(中文化项目)
>Composing Programs：一个继承了SICP思想但使用Python作为教学语言的编程导论（其中包含了一些小项目）
>SICP 解题集：对于书后的习题，作为初学者应尽力并量力完成。


2.实践一个入门项目：可以从 Mega Project List 中选取项目

3.读The Elements of Computing Systems

## 计算机系统基础

1.《深入理解计算机系统》  可以配合跟进: The Hardware/Software Interface，这门课的内容是 CSAPP 的一个子集，但是最经典的实验部分都移植过来了。同时，可以看看 The C Programming Language，回顾一下C语言的知识。

2.接触 UNIX 哲学了: KISS - Keep it Simple, Stupid. 脱离之前使用的IDE，学会使用Vim或Emacs

* 阅读 《UNIX编程环境 》
* 《UNIX编程环境}》
* 折腾你的 UN*X 系统

## 数据结构与算法基础

书籍：
1.《数据结构与算法分析》
2.《算法导论 》
3.[麻省理工学院公开课：算法导论](http://v.163.com/special/opencourse/algorithms.html)
4.《编程珠玑 》，《程序设计实践 》

## 编程语言基础

学习第n门编程语言的难度是第(n-1)门的一半，所以尽量去尝试不同的编程语言与编程范式

必学： C C++

* 入门：C++ Primer

可选进阶：

* 高效使用：Effective C++

* 深入了解：《深度探索C++对象模型》；C++Templates

* 研究反思：The Design and Evolution of C++ ；对于C++这个 Necessary Evil ，看这本书可以让你选择是成为守夜人还是守日人。

实现一个简单的解释器

供你参考的学习资源：

《程序设计语言-实践之路》：CMU编程语言原理的教材，程序语言入门书，现在就可以看，会极大扩展你的眼界，拉开你与普通人的差距。
Coursera 编程语言MOOC：课堂上你能接触到极端FP（函数式）的SML，中性偏FP的Racket，以及极端OOP（面向对象）的Ruby，并学会问题的FP分解 vs OOP分解、ML的模式匹配、Lisp宏、不变性与可变性、解释器的实现原理等，让你在将来学习新语言时更加轻松并写出更好的程序。
Udacity CS262 Programming Language：热热身，教你写一个简单的浏览器——其实就是一个javascript和html的解释器，完成后的成品还是很有趣的；接下来，试着完成一个之前在SICP部分提到过的项目：用Python写一个 Scheme Interpreter

## 其他

编程入门阶段比较容易忽视的几点：

1.学好英语：英语是你获取高质量学习资源的主要工具，但在入门阶段，所看的那些翻译书信息损耗也没那么严重，以你自己情况权衡吧。此外英语的重要性更体现在沟通交流上

2.学会提问：学习中肯定会遇到问题，首先应该学会搜索引擎的「高级搜索」，当单靠检索无法解决问题时，去Stack Overflow 或知乎 提问，提问前读读这篇文章：What have you tried?

3.不要做一匹独狼：尝试搭建一个像这样简单的个人网站，不要只是一个孤零零的About页面，去学习 Markdown 与 LaTeX，试着在Blog上记录自己的想法，并订阅自己喜欢的编程类博客

4.学习方法尝试「费曼」技巧:将难点分而化之，切成小知识块，再逐个对付，之后通过向别人清楚地解说来检验自己是否真的理解

书籍推荐:

Code Complete ：不管是对于经验丰富的程序员还是对于那些没有受过太多的正规训练的新手程序员，此书都能用来填补自己的知识缺陷。对于入门阶段的新手们，可以重点看看涉及变量名，测试，个人性格的章节。

The Pragmatic Programmer : 程序员入门书，终极书。有人称这本书为代码小全：从 DRY 到 KISS，从做人到做程序员，这本书教给了你一切，你所需的只是遵循书上的指导。

## 资料

<https://www.kancloud.cn/kancloud/intro-to-prog/52592>
