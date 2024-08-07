
```
   _____           ____ ____
  / __  \__ ______/ ___/ __ \
 / /_/ / /_/ /> </ (_ / /_/ /
/_____/\_,__/_/\_\___/\____/  
```


# 概述
DuxGO 是一款基于 go-echo 框架整合常用的 ORM、日志、队列、缓存、rbac 等 web 开发常用功能，提供了一个简单、易用、灵活的中后台管理系统。


# 快速开始

下载对应平台的二进制文件，并且执行如下命令：

```sh
cd 文件目录

./dux-win-amd64 web
```

浏览器打开安装向导进入安装

```
http://localhost:8900/install
```

安装完毕后请再次启动服务即可

```sh
./dux-win-amd64 web
```

默认后台地址
```
http://localhost:8900/manage
```


默认前台地址
```
http://localhost:8900
```


# 开发依赖

- Go 1.18+
- Mysql 5.7+
- Redis 5.0+

# 开发安装

将该仓库代码导出到独立目录使用 go install 安装：

```sh
go install

go run main.go
```



## 作者

👤 **duxweb**

* Website: https://www.dux.cn
* Github: [@duxweb](https://github.com/duxweb)
* Gitee: [@duxphp](https://gitee.com/duxphp/)

## 🤝 反馈

如果有开发疑问，请提交 issues <br />请查看 [github](https://github.com/duxweb/duxgo/issues).

## 支持


如果这个产品对您有帮助请给于我们一个 ⭐️ star 以表示鼓励

## 📝 协议

Copyright © 2023 [duxweb](https://github.com/duxweb).<br />
This project is [MIT](https://github.com/duxweb/dux-lite/blob/main/LICENSE) licensed.