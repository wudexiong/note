# 学习github

## ssh登录

```sh
ssh-keygen -t rsa -C "1245295089@qq.com"
```

打开`C:\User\WDX\.ssh`(WDX是用户目录)下的`id_rsa.pub`文件

登录github 进入settings-SSH and GPG keys-New SSH key 将id_rsa.pub文件内容 Add SSH key 即可。

在clone项目时选择ssh方式的的地址。
