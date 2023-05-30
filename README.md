# 笔记汇总

## 参考

* <https://github.com/JacksonTian/fks>

## 问题

### 简称？ 如何创建好记的目录名称

#### 正确的简称？ BE？

> ChatGpt:全球公认的后端简称是Back-End，通常缩写为BE。在英语中，“back”指的是“后面”的意思，因此Back-End表示的是系统的后台部分，负责处理数据存储、逻辑处理等功能。这个术语得到了全球范围内的广泛使用。

### 正确的简称？ FE？

> ChatGpt:全球公认的大前端简称是Front-End，缩写为FE。在国内，由于语言和文化差异，也有一些其他的缩写方式，比如前端、Web前端、移动前端等，但是在全球范围内，FE是最常用的简称。

### git 相关

#### 放在github上存储

创建了一个`note` 仓库

```bash
# …or create a new repository on the command line
echo "# note" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/wudexiong/note.git
git push -u origin main

# …or push an existing repository from the command line
git remote add origin https://github.com/wudexiong/note.git
git branch -M main
git push -u origin main
```

